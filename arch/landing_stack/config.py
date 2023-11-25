"""Load configuration from environment"""
from dotenv import load_dotenv
import os

load_dotenv()

ASSETS_SOURCE_KEY = os.getenv('ASSETS_SOURCE_KEY', 'dev_landing_assets.zip')
# this user has already been created, so here we import it directly
LADING_DEV_USERNAME = os.getenv('LADING_DEV_USERNAME', 'landing_deploy')
CERTIFICATE_ARN = os.getenv('CERTIFICATE_ARN', None)
ZONE_DOMAIN_NAME = os.getenv('ZONE_DOMAIN_NAME', 'datwit.com')
SITE_DOMAIN_NAME = os.getenv('SITE_DOMAIN_NAME', 'development.datwit.com')
CDK_DEFAULT_ACCOUNT = os.getenv('CDK_DEFAULT_ACCOUNT', '')
CDK_DEFAULT_REGION = os.getenv('CDK_DEFAULT_REGION', '')
STAGE = os.getenv('STAGE', 'Dev')
NEXT_PUBLIC_FORM_SUFFIX = os.getenv('NEXT_PUBLIC_FORM_SUFFIX', '384jje')
DATWIT_RCPT = os.getenv('DATWIT_RCPT', 'contact@example.com')
DATWIT_FROM = os.getenv('DATWIT_FROM', 'noreply@example.com')
LOG_LEVEL = os.getenv('LOG_LEVEL', 'INFO')
SITE_REGION = os.getenv('SITE_REGION', 'us')