from aws_cdk import Stack, CfnOutput
from aws_cdk import aws_s3
from aws_cdk import  aws_iam
from constructs import Construct
from . import config


class DevStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        self.bucket = aws_s3.Bucket(self, "StaticFiles")
        self.dev_user = aws_iam.User.from_user_name(
            self, "LandingDevUser", config.LADING_DEV_USERNAME)

        self.bucket.grant_read_write(self.dev_user)

        assets_uri = "s3://{}/{}".format(
            self.bucket.bucket_name,
            config.ASSETS_SOURCE_KEY
        )

        CfnOutput(
            self, 'BucketName', 
            value=self.bucket.bucket_name,
            export_name="HtmlAssetsBucket")

        CfnOutput(
            self, 'AssetsS3Uri',
            value=assets_uri,
            export_name="HtmlAssetsUri")
