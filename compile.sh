#!/bin/bash

set -e

if [ $(find . -name '*.orig' -type f | grep -c .) -ne 0 ]; then
  echo "You seem to have some git merge artifacts on the filesystem. Aborting..."
  exit 1
fi

echo "Updating submodules to ensure toolkit up to date..."
git submodule update --init
echo "Updated."

DESIGN_PRINCIPLES_ROOT="../design-principles"
DIRECTORY="$DESIGN_PRINCIPLES_ROOT/public"
GUIDANCE_PATH="$DIRECTORY/transformation"

if [ ! -d "$DIRECTORY" ]; then
  echo "Couldn't find design principles app in $DIRECTORY"
fi

if [ -d $GUIDANCE_PATH ]; then
  echo "Emptying existing transformation folder"
  rm -rf $GUIDANCE_PATH
  rm -rf ./_site
fi

jekyll build
cp -R ./_site/transformation $GUIDANCE_PATH

echo "*****"
echo "You should now use git to push the changes to the design principles app."
echo "And then schedule a deployment for it."
