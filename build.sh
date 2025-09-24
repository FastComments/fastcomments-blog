#!/bin/bash

if [ "$PARTIAL_BUILD" != "true" ]; then
  npm install
  node src/app
  mkdir -p src/static/generated/
  cp -rv src/static/css src/static/generated/
  cp -rv src/static/images src/static/generated/
  cp -rv src/static/js src/static/generated/
  cp -rv src/static/image-compare src/static/generated/
  cp src/static/*.html src/static/generated/
fi
