// config.example.js - API Configuration Example
// Copy this file and rename it to config.js, then add your actual API keys

const CONFIG = {
    // Google OAuth Client ID
    CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',
    
    // Google API Key
    API_KEY: 'YOUR_GOOGLE_API_KEY_HERE',
    
    // Gmail API Scopes
    SCOPES: 'https://www.googleapis.com/auth/gmail.readonly',
    
    // Discovery Document URL
    DISCOVERY_DOC: 'https://gmail.googleapis.com/$discovery/rest?version=v1',
    
    // App Configuration
    APP_NAME: 'Limit Edge Email Manager',
    APP_VERSION: '1.0.0',
    
    // Development/Production Environment
    ENVIRONMENT: 'development', // 'development' or 'production'
    
    // Debug Mode
    DEBUG: true
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
