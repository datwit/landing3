from landing_stack import config
from YbfConstructs import s3site
from aws_cdk import BundlingOptions, CfnOutput, Stack
from aws_cdk import aws_certificatemanager as acm
from aws_cdk import aws_route53 as rt53
from aws_cdk import aws_s3_deployment as s3deployment
from aws_cdk import aws_dynamodb as dynamodb
from aws_cdk import aws_lambda as _lambda
from aws_cdk import aws_apigateway as apigateway
from aws_cdk import aws_iam as iam
from aws_cdk import aws_logs as logs
from constructs import Construct
import typing


class SiteStack(Stack):

    def __init__(
            self, scope: Construct, construct_id: str,
            sources: typing.Sequence[s3deployment.Source],
            **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        self.cert = acm.Certificate.from_certificate_arn(
            self, 'DatwitCertificate', config.CERTIFICATE_ARN
        )

        self.zone = rt53.HostedZone.from_lookup(
            self, 'DatwitZone', domain_name=config.ZONE_DOMAIN_NAME
        )

        s3site.SiteDeploy(
            self, "LadingSite",
            sources=sources,
            certificate=self.cert,
            domain_name=config.SITE_DOMAIN_NAME,
            route53_zone=self.zone,
            prune_bucket=True)

        self.contactStore = dynamodb.Table(
            self,
            "ContactStore",
            table_name="ContactStore{}".format(config.STAGE),
            partition_key=dynamodb.Attribute(
                name="pk",
                type=dynamodb.AttributeType.STRING
            ),
            sort_key=dynamodb.Attribute(
                name="sk",
                type=dynamodb.AttributeType.STRING
            ),
            billing_mode=dynamodb.BillingMode.PAY_PER_REQUEST
        )

        retention = logs.RetentionDays.ONE_WEEK
        if config.STAGE == "Prod":
            retention = logs.RetentionDays.ONE_MONTH

        contactApiFunc = _lambda.Function(
            self, "ContactLambda",
            runtime=_lambda.Runtime.PYTHON_3_8,
            handler="main.handler",
            code=_lambda.Code.from_asset(
                'functions/contact', bundling=BundlingOptions(
                    image=_lambda.Runtime.PYTHON_3_8.bundling_image,
                    command=[
                        "bash", "-c", "pip install -r requirements.txt -t"
                        " /asset-output && cp -au . /asset-output"
                    ]
                )
            ),
            environment={
                'STAGE': config.STAGE,
                'TABLE_NAME': self.contactStore.table_name,
                'NEXT_PUBLIC_FORM_SUFFIX': config.NEXT_PUBLIC_FORM_SUFFIX,
                'DATWIT_RCPT': config.DATWIT_RCPT,
                'DATWIT_FROM': config.DATWIT_FROM,
                'SITE_URL': "https://{}".format(config.SITE_DOMAIN_NAME),
                "LOG_LEVEL": config.LOG_LEVEL
            },
            log_retention=retention
        )
        # permissions over the lambda function
        self.contactStore.grant_read_write_data(contactApiFunc)
        contactApiFunc.add_to_role_policy(iam.PolicyStatement(
            actions=['ses:SendEmail', 'SES:SendRawEmail'],
            resources=['*'],
            effect=iam.Effect.ALLOW
        ))

        origins = ["https://{}".format(config.SITE_DOMAIN_NAME)]
        if config.STAGE == 'Dev':
            origins = ['*']

        cors = apigateway.CorsOptions(
            allow_methods=["GET", "OPTIONS", "POST", "PUT"],
            allow_origins=origins,
        )

        self.contactApi = apigateway.LambdaRestApi(
            self, "ContactAPI{}".format(config.STAGE),
            handler=contactApiFunc,
            default_cors_preflight_options=cors
        )

        CfnOutput(self, "ContactApiURL", value=self.contactApi.url)
