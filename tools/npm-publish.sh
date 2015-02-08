#!/bin/bash

npm version patch
git push origin master --tags
npm publish
