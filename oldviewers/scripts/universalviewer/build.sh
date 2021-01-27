echo "---- BUILD Universalviewer ----"

cd universalviewer

# build the dist
grunt build --dist || { echo "UN Grunt Build failed" ;exit 1; }
