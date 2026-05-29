#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

extract() {
  grep "^$1=" .env.local | sed "s/^$1=//; s/^\"//; s/\"$//" | tr -d '\n'
}

echo "Uploading EMAILOCTOPUS_API_KEY..."
extract EMAILOCTOPUS_API_KEY | npx wrangler secret put EMAILOCTOPUS_API_KEY

echo "Uploading EMAILOCTOPUS_LIST_ID..."
extract EMAILOCTOPUS_LIST_ID | npx wrangler secret put EMAILOCTOPUS_LIST_ID

echo "Done."
