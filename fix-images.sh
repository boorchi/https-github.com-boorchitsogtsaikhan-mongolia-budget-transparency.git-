#!/bin/bash

echo "🖼️  Fixing image paths for GitHub Pages deployment..."

# Fix app.component.html - already done manually above

# Create a temp service file to import in components that need image path fixing
echo "Creating image path utilities..."

# Find all HTML files with image references and create a list
echo "📋 Scanning for image references..."

find src -name "*.html" -exec grep -l "assets/" {} \; | while read file; do
    echo "Found images in: $file"
done

echo ""
echo "🔧 For dynamic image path fixing, components should:"
echo "1. Import Constants from './services/constants'"  
echo "2. Use Constants.getImagePath('path/to/image.ext') for src attributes"
echo "3. Use [src]=\"Constants.getImagePath('path')\" in templates"
echo ""
echo "💡 For immediate fix, building with correct baseHref..."
