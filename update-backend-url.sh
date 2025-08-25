#!/bin/bash

# Backend Deployment and Frontend Update Script

echo "🚀 Mongolia Budget Transparency - Backend Deployment Setup"
echo "=========================================================="
echo ""

# Get backend URL from user
read -p "Enter your deployed backend URL (e.g., https://your-app.railway.app): " BACKEND_URL

if [ -z "$BACKEND_URL" ]; then
    echo "❌ Backend URL is required!"
    exit 1
fi

# Remove trailing slash
BACKEND_URL=${BACKEND_URL%/}

echo ""
echo "📝 Updating frontend constants with backend URL: $BACKEND_URL"

# Update constants.ts
sed -i.bak "s|https://your-backend-domain.com|$BACKEND_URL|g" src/app/services/constants.ts

echo "✅ Constants updated!"
echo ""
echo "🏗️  Rebuilding frontend..."

# Build frontend with updated backend URL
ng build --configuration=production --base-href=/https-github.com-boorchitsogtsaikhan-mongolia-budget-transparency.git-/

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    # Restore backup
    mv src/app/services/constants.ts.bak src/app/services/constants.ts
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "🌐 Deploying updated frontend to GitHub Pages..."

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/budget-front --no-silent

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment Complete!"
    echo "========================"
    echo "🔗 Frontend: https://boorchi.github.io/https-github.com-boorchitsogtsaikhan-mongolia-budget-transparency.git-/"
    echo "🔗 Backend:  $BACKEND_URL"
    echo ""
    echo "✅ Your Budget Transparency app is now fully functional!"
    
    # Clean up backup
    rm -f src/app/services/constants.ts.bak
else
    echo "❌ Deployment failed!"
    # Restore backup
    mv src/app/services/constants.ts.bak src/app/services/constants.ts
    exit 1
fi
