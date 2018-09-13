# copy the uv embeded file so that it is an index file for a webserver to pickup
cp build/index.html universalviewer/examples/uv/index.html
cp build/config.json universalviewer/examples/uv/

cp -r universalviewer/examples/uv/* dist/
