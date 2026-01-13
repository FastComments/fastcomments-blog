#!/bin/bash

if [ "$PARTIAL_BUILD" != "true" ]; then
  npm install

  # Check for missing translations
  echo "Checking for missing translations..."
  node src/check-translations.js
  translation_check_result=$?
  if [ $translation_check_result -ne 0 ]; then
    echo "Missing translations detected. Running automated translation..."

    # Run translation
    node src/translate-with-gpt.js
    if [ $? -ne 0 ]; then
      echo "Build failed: Translation failed"
      exit 1
    fi

    # Check if there are changes to commit
    if [ -n "$(git status --porcelain src/content src/translation-cache.json 2>/dev/null)" ]; then
      echo "Committing translation changes..."
      git add src/content src/translation-cache.json
      git commit -m "Automated translation update"
      echo "Translation changes committed."

      echo "Pushing translation changes..."
      git push
      echo "Translation changes pushed."
    else
      echo "No translation changes to commit."
    fi
  else
    echo "All translations up to date."
  fi

  mkdir -p src/static/generated/
  node src/app
  cp -rv src/static/css src/static/generated/
  cp -rv src/static/images src/static/generated/
  cp -rv src/static/js src/static/generated/
  cp -rv src/static/image-compare src/static/generated/
  cp src/static/*.html src/static/generated/
fi
