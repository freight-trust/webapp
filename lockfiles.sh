#!/bin/bash
echo -ne "==> Rebuilding lockfiles"
rm package-lock.json || exit
rm yarn.lock || exit
rm -rf node_modules/ || exit
yarn install
npm install --package-lock-only
