echo "---- POST BUILD Universalviewer ----"

# copy the uv embeded file so that it is an index file for a webserver to pickup
cp src/universalviewer/index.html universalviewer/examples/uv/index.html || { echo "copy failed" ;exit 1; }
cp src/universalviewer/config.json universalviewer/examples/uv/ || { echo "copy failed" ;exit 1; }

cp -r universalviewer/examples/uv dist/universalviewer || { echo "copy failed" ;exit 1; }
