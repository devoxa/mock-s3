#!/bin/sh
set -e

export NODE_OPTIONS=--openssl-legacy-provider
exec node /application/dist/index.js
