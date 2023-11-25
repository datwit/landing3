from aws_cdk import BundlingOptions
from aws_cdk import CfnOutput
from aws_cdk import aws_apigateway as apigateway
from aws_cdk import aws_dynamodb as dynamodb
from aws_cdk import aws_iam as iam
from aws_cdk import aws_lambda as _lambda
from aws_cdk import aws_logs as logs
from constructs import Construct

from .base import BaseStack


class ContactAPIStack(BaseStack):
    def __init__(
        self,
        scope: Construct,
        id: str,
        stage: str,
        form_suffix: str,
        rcpt: str,
        sender: str,
        contact_log_level: str,
        **kwargs
    ):
        super().__init__(scope, id, stage, **kwargs)

        self.contactStore = dynamodb.Table(
            self,
            f"{id}-ContactStore",
            partition_key=dynamodb.Attribute(
                name="pk", type=dynamodb.AttributeType.STRING
            ),
            sort_key=dynamodb.Attribute(name="sk", type=dynamodb.AttributeType.STRING),
            billing_mode=dynamodb.BillingMode.PAY_PER_REQUEST,
        )

        retention = logs.RetentionDays.ONE_WEEK
        if self.stage == "Prod":
            retention = logs.RetentionDays.ONE_MONTH

        contactApiFunc = _lambda.Function(
            self,
            f"{id}-ContactLambda",
            runtime=_lambda.Runtime.PYTHON_3_8,
            handler="main.handler",
            code=_lambda.Code.from_asset(
                "functions/contact",
                bundling=BundlingOptions(
                    image=_lambda.Runtime.PYTHON_3_8.bundling_image,
                    command=[
                        "bash",
                        "-c",
                        "pip install -r requirements.txt -t"
                        " /asset-output && cp -au . /asset-output",
                    ],
                ),
            ),
            environment={
                "STAGE": self.stage,
                "TABLE_NAME": self.contactStore.table_name,
                "NEXT_PUBLIC_FORM_SUFFIX": form_suffix,
                "DATWIT_RCPT": rcpt,
                "DATWIT_FROM": sender,
                "LOG_LEVEL": contact_log_level,
            },
            log_retention=retention,
        )
        self.contactStore.grant_read_write_data(contactApiFunc)
        contactApiFunc.add_to_role_policy(
            iam.PolicyStatement(
                actions=["ses:SendEmail", "SES:SendRawEmail"],
                resources=["*"],
                effect=iam.Effect.ALLOW,
            )
        )

        cors = apigateway.CorsOptions(
            allow_methods=["GET", "OPTIONS", "POST", "PUT"],
            allow_origins=["*"],
        )

        self.contactApi = apigateway.LambdaRestApi(
            self,
            f"{id}-ContactAPI",
            handler=contactApiFunc,
            default_cors_preflight_options=cors,
        )

        CfnOutput(self, "ContactApiURL", value=self.contactApi.url)
