import typing

from aws_cdk import aws_certificatemanager as acm
from aws_cdk import aws_route53 as rt53
from aws_cdk import aws_s3_deployment as s3deployment
from aws_cdk import aws_s3 as s3
from constructs import Construct
from YbfConstructs import s3site

from . import config
from .base import BaseStack


class SiteStack(BaseStack):
    def __init__(
        self,
        scope: Construct,
        id: str,
        stage: str,
        sources: typing.Sequence[s3deployment.Source],
        **kwargs
    ) -> None:
        super().__init__(scope, id, stage, **kwargs)

        self.cert = acm.Certificate.from_certificate_arn(
            self, f"{id}-DatwitCertificate", config.CERTIFICATE_ARN
        )

        self.zone = rt53.HostedZone.from_lookup(
            self, f"{id}-DatwitZone", domain_name=config.ZONE_DOMAIN_NAME
        )

        site_bucket = s3.Bucket(
            self, "SiteBucket",
            public_read_access=True,
            website_error_document="404.html",
            website_index_document="index.html",
            block_public_access=s3.BlockPublicAccess(
                block_public_acls=False,
                block_public_policy=False,
                ignore_public_acls=False,
                restrict_public_buckets=False
            )
        )

        s3site.SiteDeploy(
            self,
            f"{id}-LadingSite",
            sources=sources,
            certificate=self.cert,
            domain_name=config.SITE_DOMAIN_NAME,
            route53_zone=self.zone,
            prune_bucket=True,
            bucket_name=site_bucket.bucket_name
        )
