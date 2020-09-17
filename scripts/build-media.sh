#!/usr/bin/env bash

## ./scripts/build-media.sh

echo "media vueWebview"
pushd ./media/vueWebview
pwd
webpack --config ./webpack.config.js --mode development
popd
