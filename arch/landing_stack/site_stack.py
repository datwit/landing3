import typing

from aws_cdk import aws_certificatemanager as acm
from aws_cdk import aws_route53 as rt53
from aws_cdk import aws_s3_deployment as s3deployment
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

        s3site.SiteDeploy(
            self,
            f"{id}-LadingSite",
            sources=sources,
            certificate=self.cert,
            domain_name=config.SITE_DOMAIN_NAME,
            route53_zone=self.zone,
            prune_bucket=True
        )
