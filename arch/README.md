# Datwit site infrastructure

This repo define two stacks

- dev stack:
  - A bucket for asset's produced by the [landing3 project](https://github.com/datwit/landing3)
  - An IAM user with permissions to write and read from this bucket
- site stack
  - SSL certificate 
  - Route53 dns zone
  - A static html site deploy based on S3

The static files to deploy are produced by the [landing3 project](https://github.com/datwit/landing3) and copy over to S3, when that occurs the stacks of this project need to be redeployed to see any change in https://datwit.com or https://development.datwit.com

## environment configuration

See `.github/workflows/deploy-development.yml` for example workflow and steps needed to deploy the Stack, in any case all the configuration is done trough environment variables. You can declare then before running `cdk deploy` or you can create a `.env` file, for example:

```.env
CDK_DEFAULT_ACCOUNT=AWS-ACCOUNT-NUMBER
CDK_DEFAULT_REGION=eu-west-1
CERTIFICATE_ARN=ARN-FOR-DOMAIN-CERTIFICATE
ZONE_DOMAIN_NAME='datwit.com'
STAGE=Dev
```

See `landing_stack/config.py` for defaults

- `CDK_DEFAULT_ACCOUNT` the account number to use
- `CDK_DEFAULT_REGION` region for the deploy
- `CERTIFICATE_ARN`: arn for the domain certificate - the is one created on for datwit witch subject `*.datwit.com` in the region `us-east-1`
- `ZONE_DOMAIN_NAME`: this is the DNS zone for datwit.com and it should not be change
- `STAGE`: very important, normally `Dev` or `Prod`, but can be anything, the name of the site stack will depend on this.

**IMPORTANT**: to deploy changes to the site there is no need to deploy the stack manually, you can activate the corresponding workflow from github UI

## Welcome to your CDK Python project!

This is a blank project for Python development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

This project is set up like a standard Python project.  The initialization
process also creates a virtualenv within this project, stored under the `.venv`
directory.  To create the virtualenv it assumes that there is a `python3`
(or `python` for Windows) executable in your path with access to the `venv`
package. If for any reason the automatic creation of the virtualenv fails,
you can create the virtualenv manually.

To manually create a virtualenv on MacOS and Linux:

```
$ python3 -m venv .venv
```

After the init process completes and the virtualenv is created, you can use the following
step to activate your virtualenv.

```
$ source .venv/bin/activate
```

If you are a Windows platform, you would activate the virtualenv like this:

```
% .venv\Scripts\activate.bat
```

Once the virtualenv is activated, you can install the required dependencies.

```
$ pip install -r requirements.txt
```

At this point you can now synthesize the CloudFormation template for this code.

```
$ cdk synth
```

To add additional dependencies, for example other CDK libraries, just add
them to your `setup.py` file and rerun the `pip install -r requirements.txt`
command.

## Useful commands

 * `cdk ls`          list all stacks in the app
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk docs`        open CDK documentation

Enjoy!
