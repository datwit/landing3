#!/usr/bin/env python3
from aws_cdk import App, Environment
from aws_cdk.aws_s3_deployment import Source
from dev_stack import DevStack
from landing_stack.site_stack import SiteStack
from landing_stack import config

env = Environment(
    account=config.CDK_DEFAULT_ACCOUNT,
    region=config.CDK_DEFAULT_REGION
)

app = App()
dev = DevStack(app, "DevStack", env=env)
SiteStack(
    app, f"SiteStack{config.STAGE}",
    sources=[Source.asset('static_site')],
    env=env
)

app.synth()
