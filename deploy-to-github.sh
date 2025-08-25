#!/bin/bash

# GitHub Pages Deployment Script for Budget Transparency App
# This script builds and deploys your Angular app to GitHub Pages

echo "🚀 Starting GitHub Pages deployment..."

# Check if git repository is properly configured
if git remote get-url origin | grep -q "YOUR_USERNAME\|YOUR_REPO_NAME"; then
    echo "❌ Please configure your GitHub repository first:"
    echo "1. Create a repository on GitHub.com"
    echo "2. Run: git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo "3. Replace YOUR_USERNAME and YOUR_REPO_NAME with actual values"
    exit 1
fi

# Get repository name from git remote
REPO_URL=$(git remote get-url origin)
REPO_NAME=$(basename "$REPO_URL" .git)

echo "📦 Repository: $REPO_NAME"
echo "🏗️  Building application..."

# Build the application
ng build --configuration=production --base-href="/$REPO_NAME/"

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build successful!"
echo "🌐 Deploying to GitHub Pages..."

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/budget-front --no-silent

if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "📱 Your app will be available at:"
    GITHUB_USERNAME=$(echo "$REPO_URL" | sed 's/.*github.com[/:]\([^/]*\)\/.*/\1/')
    echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
    echo ""
    echo "⏳ Note: It may take a few minutes for GitHub Pages to update."
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi
