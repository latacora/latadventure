#!/usr/bin/env bash
lein cljsbuild once main
git commit -am "Deploy commit"
git subtree push --prefix resources/public origin gh-pages
