#!/bin/bash

# install tools
npm install -g yarn
yarn

# build
yarn build

# cp dist/bundle.js to where ever we want to have the default package go to.
