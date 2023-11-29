import json
import logging
import os
from typing import Any, Dict

import boto3
from datwit_contact_form.contact_manager import ContactManager
from datwit_contact_form.errors import HoneyPotException, MissingFormDataError

logger = logging.getLogger()
logger.setLevel(os.getenv('LOG_LEVEL', 'INFO').upper())

ddb_client = boto3.client('dynamodb')
ses_client = boto3.client('ses')
table_name = os.getenv('TABLE_NAME', 'ContactLanding3.development')
STAGE = os.getenv('STAGE', 'Dev')


def handler(event, context):
    logger.debug(json.dumps({'msg': "Event", 'data': event}))
    logger.info(json.dumps({"msg": "Receive request",
                "appKey": "LADING:CONTACT:FORM", 'action': 'BEGIN'}))

    if event['httpMethod'] == 'GET':
        logger.debug(json.dumps(
            {
                "msg": "Ok but doing nothing at all",
                "appKey": "LADING:CONTACT:FORM", 'action': 'END:GET'
            }
        ))

        return makeResponse(200, {"message": "Active"})

    if event['httpMethod'] == 'POST':
        body = json.loads(event['body'])
        mgt = ContactManager(ddb_client, ses_client)
        logger.debug(json.dumps(
            {
                "msg": "Got contact form data", "appKey": "LADING:CONTACT:FORM",
                'action': '', 'data': body
            }
        ))
        try:
            mgt.saveContact(body)
            return makeResponse(201, {"message": "Data saved"})

        except HoneyPotException:
            logger.warning(json.dumps({
                "msg": "Honey pot error",
                "appKey": "LADING:CONTACT:FORM",
                'action': 'FAIL',
            }))
            return makeResponse(400, {"message": "Your data is incorrect"})
        except MissingFormDataError:
            logger.warning(json.dumps({
                "msg": "Missing data in the posted form",
                "appKey": "LADING:CONTACT:FORM",
                'action': 'FAIL',
            }))
            return makeResponse(
                400, {"message": "Missing required information"}
            )
        except:
            logger.error(json.dumps({
                "msg": "Internal server error",
                "appKey": "LADING:CONTACT:FORM",
                'action': 'FAIL',
            }), exc_info=True)
            return makeResponse(500, {"message": "Internal server error"})

    logger.warn(json.dumps({
        "msg": "Bad request, can not recognize HTTP method",
        "appKey": "LADING:CONTACT:FORM", 'action': 'FAIL'
    }))
    return makeResponse(405, {"message": 'Bad request'})


def makeResponse(code: int, payload: Any, headers: Dict[str, str] = {}):
    defaultH = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": '*',
    }
    response = {
        "statusCode": code,
        "body": json.dumps(payload),
        "headers": {**defaultH, **headers},
        "isBase64Encoded": False
    }

    logger.debug(json.dumps(
        {
            "msg": "Generating response", "response": response,
            "appKey": "LADING:CONTACT:FORM"
        }
    ))

    return response
