#!/usr/bin/env python3
from aws_cdk import App
from aws_cdk import Environment
from aws_cdk.aws_s3_deployment import Source
from landing_stack import config
from landing_stack.contact_api import ContactAPIStack
from landing_stack.site_stack import SiteStack

env = Environment(
    account=config.CDK_DEFAULT_ACCOUNT,
    region=config.CDK_DEFAULT_REGION
)

app = App()

ContactAPIStack(
    app, f"{config.STAGE}-ContactAPIStack",
    config.STAGE,
    config.NEXT_PUBLIC_FORM_SUFFIX,
    config.DATWIT_RCPT,
    config.DATWIT_FROM,
    config.LOG_LEVEL,
    env=env
)

SiteStack(
    app, f"{config.STAGE}-{config.SITE_REGION}-SiteStack",
    config.STAGE,
    sources='./static_site',
    env=env
)

app.synth()
