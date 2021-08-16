#!/bin/sh
bundle install
bundle exec jekyll build
cd _site 
aws s3 sync . s3://jogos-digitais/ --acl public-read
cd ..
