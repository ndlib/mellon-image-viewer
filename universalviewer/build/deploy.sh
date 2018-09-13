#!/bin/bash

webcomponentstackname="mellon-image-webcomponent-dev"
componentbucketname=$( aws cloudformation describe-stacks --region us-west-2 --stack-name $webcomponentstackname --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' --output text )
universalviewerbranch=master

# cleanup if it exists
rm -rf universalviewer

# get uv
git clone https://github.com/UniversalViewer/universalviewer.git
cd universalviewer
git checkout $universalviewerbranch



#install uv mods
npm install -g grunt
npm install

# build the dist
grunt build --dist

# copy the uv embeded file so that it is an index file for a webserver to pickup
cp examples/uv/uv.html examples/uv/index.html

# push to S3
aws s3 sync --region us-west-2 --delete examples/uv s3://$componentbucketname/universalviewer
