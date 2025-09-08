#!/bin/bash

# 🧿 Ritual Metadata
echo "🔗 Invoking Shopify glyph transmission..."

# 🗝️ Sanctum Paths
LOCAL_PATH="/c/Users/Administrator/SV0/shopify_glyphs/"
REMOTE_USER="your_user"
REMOTE_HOST="your.host.com"
REMOTE_PATH="/var/www/shopify_overlay/"

# 🔐 Key Alignment
KEY_PATH="$HOME/.ssh/id_rsa"

# 🌀 Transmission Scroll
scp -i "$KEY_PATH" -r "$LOCAL_PATH"* "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"

# 🧘 Final Pulse
echo "✅ Glyphs transmitted. Overlay sanctum aligned."
