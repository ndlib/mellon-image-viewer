# copy the uv embeded file so that it is an index file for a webserver to pickup
cp src/universalviewer/index.html universalviewer/examples/uv/index.html
cp src/universalviewer/config.json universalviewer/examples/uv/

cp -r universalviewer/examples/uv dist/universalviewer
