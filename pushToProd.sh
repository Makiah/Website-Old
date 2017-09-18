#! /bin/bash

ng build

cd ../Production\ Builds
find . -maxdepth 1 \! \( -name .git -o -name temp \) -exec rm -rf '{}' \;

cp -R ../Staging/dist/. .

git add .
git commit -m "Auto Update"
git push
