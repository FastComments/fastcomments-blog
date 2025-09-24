#!/bin/bash

if [ "$PARTIAL_BUILD" != "true" ]; then
  npm install
  mkdir -p src/static/generated/
  node src/app
  cp -rv src/static/css src/static/generated/
  cp -rv src/static/images src/static/generated/
  cp -rv src/static/js src/static/generated/
  cp -rv src/static/image-compare src/static/generated/
  cp src/static/*.html src/static/generated/
fi
