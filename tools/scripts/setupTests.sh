#!/bin/bash

set -e

echo '
  PORT=3000
  PUBLIC_PATH=/assets/
  SERVER_ENTRY=src/entry/server.js
  CLIENT_ENTRY=src/entry/client.js
  VENDOR_FILE=src/entry/vendor.js
  CLIENT_OUTPUT=build/assets
  SERVER_OUTPUT=build
' > .env
