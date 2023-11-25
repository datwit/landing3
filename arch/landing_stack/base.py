from aws_cdk import Stack
from constructs import Construct


class BaseStack(Stack):
    """Base class for all stacks"""
    def __init__(self, scope: Construct, id: str, stage: str, **kwargs):
        super().__init__(scope, id, **kwargs)

        self.stage = stage
