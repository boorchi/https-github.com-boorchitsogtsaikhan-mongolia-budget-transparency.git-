#!/bin/bash

# Fix remaining image paths in budget components

echo "Fixing remaining image paths in budget components..."

# Fix concept component
echo "Fixing concept component..."

# Add getImagePath method to concept component
if ! grep -q "getImagePath" /Users/boorchitsogtsaikhan/Downloads/websan_front-master/src/app/budget/concept/concept.component.ts; then
    # Check if Constants is imported
    if ! grep -q "import.*Constants" /Users/boorchitsogtsaikhan/Downloads/websan_front-master/src/app/budget/concept/concept.component.ts; then
        sed -i '' '1s/^/import { Constants } from "..\/..\/services\/constants";\n/' /Users/boorchitsogtsaikhan/Downloads/websan_front-master/src/app/budget/concept/concept.component.ts
    fi
    
    # Add the helper method before the last closing brace
    sed -i '' '$i\
\
  // Add image path helper method\
  getImagePath(imagePath: string): string {\
    return Constants.getImagePath(imagePath);\
  }\
' /Users/boorchitsogtsaikhan/Downloads/websan_front-master/src/app/budget/concept/concept.component.ts
fi

# Fix debit-concept-detail component
echo "Fixing debit-concept-detail component..."

if ! grep -q "getImagePath" /Users/boorchitsogtsaikhan/Downloads/websan_front-master/src/app/budget/debit-concept-detail/debit-concept-detail.component.ts; then
    if ! grep -q "import.*Constants" /Users/boorchitsogtsaikhan/Downloads/websan_front-master/src/app/budget/debit-concept-detail/debit-concept-detail.component.ts; then
        sed -i '' '1s/^/import { Constants } from "..\/..\/services\/constants";\n/' /Users/boorchitsogtsaikhan/Downloads/websan_front-master/src/app/budget/debit-concept-detail/debit-concept-detail.component.ts
    fi
    
    sed -i '' '$i\
\
  // Add image path helper method\
  getImagePath(imagePath: string): string {\
    return Constants.getImagePath(imagePath);\
  }\
' /Users/boorchitsogtsaikhan/Downloads/websan_front-master/src/app/budget/debit-concept-detail/debit-concept-detail.component.ts
fi

echo "Image path fixing script completed!"
