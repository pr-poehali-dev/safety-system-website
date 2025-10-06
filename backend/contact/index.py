import json
from typing import Dict, Any
from pydantic import BaseModel, EmailStr, Field, ValidationError

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    object_type: str = Field(..., min_length=1, max_length=100)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Process contact form submissions from SOUE website
    Args: event - dict with httpMethod, body, headers
          context - object with request_id, function_name attributes
    Returns: HTTP response dict with submission confirmation
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    contact_req = ContactRequest(**body_data)
    
    result = {
        'success': True,
        'message': 'Спасибо! Мы свяжемся с вами в ближайшее время.',
        'data': {
            'name': contact_req.name,
            'phone': contact_req.phone,
            'object_type': contact_req.object_type,
            'request_id': context.request_id
        }
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(result, ensure_ascii=False),
        'isBase64Encoded': False
    }
