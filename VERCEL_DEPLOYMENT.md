# Vercel Deployment for NestJS Backend

## 🚀 Quick Deployment

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Prepare Backend
Create `vercel.json` in your backend root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/main.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/main.ts",
      "methods": ["GET", "POST", "PUT", "DELETE"]
    }
  ]
}
```

### 3. Deploy
```bash
# In your backend folder
vercel

# Follow prompts:
# - Set up project
# - Deploy to production

# Your backend will be at: https://your-project.vercel.app
```

### 4. Update Frontend Constants
```typescript
public static NEW_BACKEND_URL = 'https://your-project.vercel.app/api';
public static NEW_BACKEND_PUBLIC = 'https://your-project.vercel.app/api/public';
```
