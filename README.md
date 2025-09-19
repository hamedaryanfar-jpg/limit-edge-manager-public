# 📧 Limit Edge Email Manager

A professional web application for managing Limit Edge application emails with Gmail API integration.

## 🚀 Features

- **Gmail Integration**: Secure Gmail API authentication
- **Email Management**: View and filter application emails
- **Professional UI**: Card-based layout with responsive design
- **Search & Filter**: Advanced filtering and search capabilities
- **Application Details**: Detailed view of each application
- **Social Media Links**: Direct links to Instagram and YouTube profiles

## 🔧 Setup Instructions

### Prerequisites

- Google Cloud Console account
- Gmail API enabled
- OAuth 2.0 credentials

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/limit-edge-manager.git
cd limit-edge-manager
```

### 2. Configure API Keys

1. Copy the example configuration file:
```bash
cp config.example.js config.js
```

2. Edit `config.js` and add your API credentials:
```javascript
const CONFIG = {
    CLIENT_ID: 'your-google-client-id',
    API_KEY: 'your-google-api-key',
    // ... other settings
};
```

### 3. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Gmail API
4. Create OAuth 2.0 credentials
5. Add authorized JavaScript origins:
   - `http://localhost:8080` (for local development)
   - `https://your-domain.com` (for production)

### 4. Run Locally

```bash
# Start local server
python3 -m http.server 8080

# Or using Node.js
npx http-server -p 8080
```

Open `http://localhost:8080/gmail-reader.html` in your browser.

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Add environment variables in Netlify dashboard:
   - `GOOGLE_CLIENT_ID`: Your Google Client ID
   - `GOOGLE_API_KEY`: Your Google API Key
3. Deploy automatically on push

### Option 2: Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Option 3: GitHub Pages

1. Enable GitHub Pages in repository settings
2. Use environment variables for API keys
3. Deploy from main branch

## 🔒 Security

- **API Keys**: Never commit `config.js` to Git
- **Environment Variables**: Use for production deployment
- **HTTPS**: Always use HTTPS in production
- **OAuth Scopes**: Minimal required permissions

## 📱 Usage

1. **Authentication**: Sign in with Google account
2. **Email Fetching**: Click "دریافت ایمیل‌ها" to fetch emails
3. **Filtering**: Use filter buttons to sort applications
4. **Search**: Use search box to find specific applications
5. **Details**: Click on cards to view full application details

## 🛠️ Development

### File Structure

```
├── gmail-reader.html      # Main application file
├── config.js             # API configuration (not in Git)
├── config.example.js     # Example configuration
├── .gitignore           # Git ignore rules
├── README.md            # This file
└── netlify.toml         # Netlify configuration
```

### Environment Variables

For production deployment, set these environment variables:

- `GOOGLE_CLIENT_ID`: Google OAuth Client ID
- `GOOGLE_API_KEY`: Google API Key

## 📄 License

This project is private and confidential. Unauthorized distribution is prohibited.

## 🤝 Support

For support and questions, contact the development team.

---

**⚠️ Important**: Keep your API keys secure and never share them publicly.
