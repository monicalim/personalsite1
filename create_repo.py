#!/usr/bin/env python3
"""
Create a GitHub repository and push the code.
Requires: GitHub username and personal access token with 'repo' scope
"""

import os
import sys
import subprocess
import json
import urllib.request
import urllib.error

REPO_NAME = "nostalgic-website-layout"

def create_github_repo(username, token):
    """Create a GitHub repository using the API"""
    url = "https://api.github.com/user/repos"
    data = {
        "name": REPO_NAME,
        "description": "Nostalgic website layout project",
        "private": False
    }
    
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode('utf-8'),
        headers={
            "Authorization": f"token {token}",
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
        }
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode())
            return True, result.get("clone_url", "")
    except urllib.error.HTTPError as e:
        error_body = e.read().decode()
        return False, f"HTTP {e.code}: {error_body}"

def main():
    username = os.environ.get("GITHUB_USERNAME") or input("Enter your GitHub username: ").strip()
    token = os.environ.get("GITHUB_TOKEN") or input("Enter your GitHub personal access token: ").strip()
    
    if not username or not token:
        print("Error: Both username and token are required")
        print("Get a token from: https://github.com/settings/tokens")
        sys.exit(1)
    
    print(f"Creating repository '{REPO_NAME}' on GitHub...")
    success, result = create_github_repo(username, token)
    
    if success:
        print("✓ Repository created successfully!")
        clone_url = result
        remote_url = f"https://github.com/{username}/{REPO_NAME}.git"
        
        # Add remote and push
        subprocess.run(["git", "remote", "add", "origin", remote_url], check=False)
        subprocess.run(["git", "branch", "-M", "main"], check=True)
        subprocess.run(["git", "push", "-u", "origin", "main"], check=True)
        
        print(f"\n✓ Code pushed successfully!")
        print(f"Repository URL: https://github.com/{username}/{REPO_NAME}")
    else:
        print(f"✗ Error creating repository: {result}")
        sys.exit(1)

if __name__ == "__main__":
    main()
