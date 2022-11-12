---
title: Bastion host in AWS CDK to access resources in private networks
summary: Including a Bastion host on a AWS VPC is a way to provide secure access, for developers and other roles, to resources in the infrastructure deployed in a private network. The bastion host sits in between the public network and the private network and can be used to create SSH tunnels to target services only visible on the private network.
img: /images/cases/bastion_host.png
tags: 
    - AWS CDK
    - VPC
    - SSH
date: 2022-11-11T20:35:27.220Z
author: Yoel Benítez Fonseca 
reading: 10
---


Including a Bastion host on a [AWS VPC](https://aws.amazon.com/vpc/) is a way to provide secure access, for developers and other roles, to resources in the infrastructure deployed in a private network without making any critical service public to the internet. The bastion host sits in between the public network and the private network and can be used to create SSH tunnels to target services only visible on the private network.

<img src="/images/cases/bastion_host.png"/>

The bastion host setup can be done manually from the AWS console, but nowadays infrastructure as code is the way to go.

## Problem

Lets say you are in charge to setup - with AWS CDK - a Neptune database, right now AWS only allows the database cluster to exists on a VPC with a private network, the target architecture will be exactly the same as above. Lets say, too, that we are no sharing <code>SSH</code> keys between members of the team and we want to keep security tight.

## Solution

Lets begins by setting up our project - i am assuming you have [AWS CDK installed](https://docs.aws.amazon.com/cdk/v2/guide/work-with.html#work-with-prerequisites), Aws CLI installed and we will be working with Python.

We needs a Stack for this resources: a VPC, a neptune cluster and a bastion host - i will not enter on the details of the components:

### VPC and bastion host

```python
from aws_cdk import (
    CfnOutput,
    Stack,
    aws_ec2 as ec2
)
from constructs import Construct


class VPCStack(Stack):
    vpc: ec2.Vpc
    bastionSG: ec2.SecurityGroup

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        self.vpc = ec2.Vpc(
            self,
            'VPC',
            ip_addresses=ec2.IpAddresses.cidr('10.0.0.0/16'),
            nat_gateways=1,
            max_azs=3,
            subnet_configuration=[
                ec2.SubnetConfiguration(
                    name='private-subnet',
                    cidr_mask=24,
                    subnet_type=ec2.SubnetType.PRIVATE_WITH_EGRESS
                ),
                ec2.SubnetConfiguration(
                    name='public-subnet',
                    cidr_mask=24,
                    subnet_type=ec2.SubnetType.PUBLIC
                ),
                ec2.SubnetConfiguration(
                    name='isolate-subnet',
                    cidr_mask=28,
                    subnet_type=ec2.SubnetType.PRIVATE_ISOLATED
                ),
            ]
        )

        self.bastionSG = ec2.SecurityGroup(
            self,
            'bastion-sg',
            description='Security group for the bastion, no inbound open '
                        'because we should access to the bastion via AWS SSM',
            vpc=self.vpc,
            allow_all_outbound=True
        )

        bastion = ec2.BastionHostLinux(
            self, 'SecureBastion',
            vpc=self.vpc,
            instance_name='secure-bastion',
            subnet_selection=ec2.SubnetSelection(
                subnet_type=ec2.SubnetType.PUBLIC
            ),
            security_group=self.bastionSG,
        )
        bastion.allow_ssh_access_from(ec2.Peer.any_ipv4())
        CfnOutput(self, 'secure-bastion-id', value=bastion.instance_id)
        CfnOutput(
            self, 'secure-bastion-dns-name',
            value=bastion.instance.instance_public_dns_name
        )
        CfnOutput(
            self, 'secure-bastion-zone',
            value=bastion.instance.instance_availability_zone
        )
```

This first stack defines two resources: the VPC and the bastion host. The VPC es divided on 3 subnet's (`PRIVATE_WITH_EGRESS`, `PUBLIC` and `PRIVATE_ISOLATED`), as this is just for demonstration only one NAT Gateway is assigned to the VPC. You can see more details on the [CDK documentation](https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk.aws_ec2/README.html#vpc) 

As for the bastion host

```python
bastion = ec2.BastionHostLinux(
    self, 'SecureBastion',
    vpc=self.vpc,
    instance_name='secure-bastion',
    subnet_selection=ec2.SubnetSelection(
        subnet_type=ec2.SubnetType.PUBLIC
    ),
    security_group=self.bastionSG,
)
bastion.allow_ssh_access_from(ec2.Peer.any_ipv4())
```

Note that we assign a `instance_name`, we will use these later. Note, too, that wee are allowing SSH access from any where, you probably want to tuneup this. And finally the bastion host is planted on the public subnet of the VPC.

From the deploy output we will need: the bastion host instance id (`secure-bastion-id`), the instance public dns name (`secure-bastion-dns-name`) and the instance availability zone in the VPC (`instance_availability_zone`)


### Neptune database

This will be then the database cluster definition, i will not enter on details here, what matters here is that the neptune cluster will be planted on the private network of the VPC and will not be accessibly from the outside world.

```python
class NeptuneStack(Stack):

    def __init__(
            self,
            scope: Construct,
            construct_id: str,
            vpc: ec2.Vpc,
            **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        cluster_parameter_group = neptune.ClusterParameterGroup(
            self, "NeptuneClusterParams",
            description="Cluster parameter group",
            parameters={
                "neptune_enable_audit_log": "1"
            }
        )
        cluster = neptune.DatabaseCluster(
            self,
            "NeptuneDatabase",
            vpc=vpc,
            instance_type=neptune.InstanceType.T3_MEDIUM,
            auto_minor_version_upgrade=True,
            cluster_parameter_group=cluster_parameter_group,
            cloudwatch_logs_exports=[neptune.LogType.AUDIT],
            cloudwatch_logs_retention=logs.RetentionDays.FIVE_DAYS,
            removal_policy=RemovalPolicy.DESTROY
        )
        cluster.connections.allow_default_port_from_any_ipv4()
        neptune_endpoint = cluster.cluster_endpoint.socket_address

        CfnOutput(self, "neptune_endpoint", value=neptune_endpoint)
```

From this stack we will need the address of the endpoint (`neptune_endpoint`)


### Usage

Note that we are not setting any ssh keys on the bastion host, not either we are creating any user, that is we will not do any of that. First deploy both stacks:

```bash
cdk deploy --all
```

After the deploy is completed we will use the subcommand `ec2-instance-connect` of the aws cli to push our own SSH keys to the instance, for example:

```bash
aws ec2-instance-connect send-ssh-public-key \
    --region us-east-1 --instance-id $INSTANCE_ID \
    --availability-zone $AVAILABILITY_ZONE --instance-os-user ec2-user \
    --ssh-public-key file://~/.ssh/id_rsa.pub
```

Where:

- `$INSTANCE_ID` is the instance ID from the output of the cdk `secure-bastion-id`
- `$AVAILABILITY_ZONE` is the bastion host instance availability zone in the VPC, also get this from the output of the cdk deploy (`instance_availability_zone`)
- `~/.ssh/id_rsa.pub` is the public key part of your SSH key, see [Generate a New SSH Key](https://www.ssh.com/academy/ssh/keygen) on how to generate your SSH keys if needed.

After this you must connect to the instance in less than 60 seconds, if you get access denied just repeat de previous command:

```bash
ssh -i ~/.ssh/id_rsa ec2-user@$PUBLIC_DNS_NAME
```

Where:

- `-i ~/.ssh/id_rsa` tells ssh what private key must be used to connect to the bastion host
- `$PUBLIC_DNS_NAME` is the DNS name of the bastion host, again you get this from the cdk deploy output

This just proves you can connect to the bastion host, to get to the neptune database you can use a variant of the following command to make a SSH tunnel from your machine to the neptune database using the bastion host:

```bash
ssh -i ~/.ssh/id_rsa ec2-user@$PUBLIC_DNS_NAME -L LOCAL_PORT:ENDPOINT:REMOTE_PORT
```

Where

- `$PUBLIC_DNS_NAME` is the DNS name of the bastion host, again you get this from the cdk deploy output
- `LOCAL_PORT` is the port on your machine where the neptune database will be available
- `ENDPOINT` is the dns name of the neptune endpoint in the VPC, get this from the cdk deploy output
- `REMOTE_PORT` is the TCP port of the neptune database, normally 8182

And now you can connect to `127.0.0.1:8182` to access the resource in the private network securely.


### Conclusions

- All the code presented here is accessible in [this repository](https://github.com/datwit/cdk-bastion-host)
- In the repository i have include a [script](https://github.com/datwit/cdk-bastion-host/blob/main/mapdbs.sh) that's automate the process of the tunnel creation and can be used to add more SSH tunnels as needed. The user will need some permissions or policies to execute some of the aws cli commands: `aws ec2 describe-instances`, `aws ec2-instance-connect send-ssh-public-key`, for example for sending the ssh keys:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ec2-instance-connect:SendSSHPublicKey"
            ],
            "Resource": [
                "arn:aws:ec2:us-east-1:670371202330:instance/*"
            ],
            "Condition": {
                "StringEquals": {
                    "ec2:osuser": "ec2-user"
                }
            }
        }
    ]
}
```

- With this setup you no need to share ssh between users, each user will be using his own keys.

## References

- https://aws.amazon.com/blogs/infrastructure-and-automation/deploy-bastion-hosts-into-private-subnets-with-aws-cdk/
- https://faun.pub/create-a-bastion-with-aws-cdk-d5ebfb91aef9
- https://aws.amazon.com/cdk/