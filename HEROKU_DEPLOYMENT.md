# Heroku Deployment Guide for NestJS Backend

## 📋 Prerequisites
- Heroku account (free tier available)
- Heroku CLI installed

## 🔧 Setup Steps

### 1. Install Heroku CLI
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Or download from: https://devcenter.heroku.com/articles/heroku-cli
```

### 2. Prepare Your Backend for Heroku

Create these files in your backend project:

**Procfile** (no extension):
```
web: npm run start:prod
```

**package.json** (update scripts):
```json
{
  "scripts": {
    "build": "nest build",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "heroku-postbuild": "npm run build"
  },
  "engines": {
    "node": "18.x",
    "npm": "9.x"
  }
}
```

### 3. Deploy Commands
```bash
# Login to Heroku
heroku login

# Create Heroku app
heroku create mongolia-budget-backend

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set PORT=\$PORT
heroku config:set MONGODB_URI=your_mongodb_connection_string

# Deploy
git push heroku main
```

### 4. Update Frontend
Update your Angular constants.ts:
```typescript
public static NEW_BACKEND_URL = 'https://mongolia-budget-backend.herokuapp.com/api';
public static NEW_BACKEND_PUBLIC = 'https://mongolia-budget-backend.herokuapp.com/api/public';
```
