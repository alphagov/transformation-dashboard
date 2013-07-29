#!/bin/bash

set -e

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

bundle exec jekyll ./_site
cp -R ./_site/transformation $GUIDANCE_PATH

echo "*****"
echo "You should now use git to push the changes to the design principles app."
echo "And then schedule a deployment for it."
