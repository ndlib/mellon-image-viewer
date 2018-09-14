# copy the uv embeded file so that it is an index file for a webserver to pickup
cp src/index.html universalviewer/examples/uv/index.html
cp src/config.json universalviewer/examples/uv/

cp -r universalviewer/examples/uv/* dist/
