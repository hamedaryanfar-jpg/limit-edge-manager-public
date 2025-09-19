# Limit Edge Manager Configuration

## Gmail API Configuration

Replace these values with your actual API credentials:

```javascript
const CONFIG = {
    CLIENT_ID: 'your-client-id',
    API_KEY: 'your-api-key',
    DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest',
    SCOPES: 'https://www.googleapis.com/auth/gmail.readonly'
};
```

## Setup Instructions

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Gmail API
4. Create OAuth 2.0 credentials
5. Add your domain to authorized origins
6. Copy credentials to `config.js`

## Security Notes

- Never commit `config.js` to public repositories
- Use environment variables in production
- Regularly rotate API keys
