echo "---- INSTALL Tify  ----"

# cleanup if it exists
rm -rf tify

# get mirador
git clone https://github.com/tify-iiif-viewer/tify tify || { echo "Tify git clone failed" ;exit 1; }
cd tify

#install tify mods
npm install || { echo "Tify Npm install failed" ;exit 1; }
