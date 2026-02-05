#!/bin/bash

# Script to create GitHub repository and push code
# Usage: ./create-github-repo.sh [GITHUB_USERNAME] [GITHUB_TOKEN]

REPO_NAME="nostalgic-website-layout"
GITHUB_USERNAME="${1:-}"
GITHUB_TOKEN="${2:-${GITHUB_TOKEN}}"

if [ -z "$GITHUB_USERNAME" ]; then
    echo "Error: GitHub username required"
    echo "Usage: ./create-github-repo.sh <github_username> [github_token]"
    echo "Or set GITHUB_TOKEN environment variable"
    exit 1
fi

if [ -z "$GITHUB_TOKEN" ]; then
    echo "Error: GitHub token required"
    echo "You can get a token from: https://github.com/settings/tokens"
    echo "Token needs 'repo' scope"
    exit 1
fi

echo "Creating GitHub repository: $REPO_NAME..."

# Create the repository
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"$REPO_NAME\",\"private\":false,\"description\":\"Nostalgic website layout project\"}")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" -eq 201 ]; then
    echo "Repository created successfully!"
    
    # Add remote and push
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    git branch -M main
    git push -u origin main
    
    echo "Code pushed to: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
else
    echo "Error creating repository. HTTP Code: $HTTP_CODE"
    echo "Response: $BODY"
    exit 1
fi
