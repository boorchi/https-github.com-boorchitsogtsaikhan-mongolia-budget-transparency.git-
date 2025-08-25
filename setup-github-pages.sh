#!/bin/bash

# Interactive GitHub Pages Setup Script

echo "🎯 GitHub Pages Setup for Mongolia Budget Transparency App"
echo "================================================="
echo ""

# Get user input
echo "Please provide your GitHub information:"
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your repository name (e.g., mongolia-budget-transparency): " REPO_NAME

if [ -z "$GITHUB_USERNAME" ] || [ -z "$REPO_NAME" ]; then
    echo "❌ Both username and repository name are required!"
    exit 1
fi

echo ""
echo "📝 Configuration:"
echo "   GitHub Username: $GITHUB_USERNAME"
echo "   Repository Name: $REPO_NAME"
echo "   Future URL: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""

read -p "Is this correct? (y/n): " CONFIRM
if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    echo "❌ Setup cancelled. Please run the script again."
    exit 1
fi

echo ""
echo "🔧 Setting up git remote..."

# Update git remote
git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

echo "✅ Git remote updated!"
echo ""
echo "🏗️  Building application..."

# Build with correct base href
ng build --configuration=production --base-href=/$REPO_NAME/

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📤 Pushing code to GitHub..."

# Push to GitHub
git push -u origin main

if [ $? -ne 0 ]; then
    echo "❌ Push failed. Make sure you've created the repository on GitHub.com"
    exit 1
fi

echo "✅ Code pushed to GitHub!"
echo ""
echo "🌐 Deploying to GitHub Pages..."

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/budget-front --no-silent

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment Successful!"
    echo "================================================="
    echo "📱 Your app will be available at:"
    echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
    echo ""
    echo "⏳ Next steps:"
    echo "1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo "2. Click Settings → Pages"
    echo "3. Source: Deploy from branch → gh-pages → Save"
    echo "4. Wait 5-10 minutes for GitHub Pages to activate"
    echo ""
    echo "🎊 Your Budget Transparency app is now live!"
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi
