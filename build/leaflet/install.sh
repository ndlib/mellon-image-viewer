echo "---- INSTALL Leaflet  ----"

# cleanup if it exists
rm -rf leaflet
rm -rf leaflet-iiif

# get leaflet and leaflet-iiif
git clone https://github.com/Leaflet/Leaflet.git leaflet || { echo "Leaflet git clone failed" ;exit 1; }
git clone https://github.com/mejackreed/Leaflet-IIIF.git leaflet-iiif || { echo "Leaflet-IIIF git clone failed" ;exit 1; }

cd leaflet

#install leaflet mods
npm install || { echo "Leaflet Npm install failed" ;exit 1; }

cd ../leaflet-iiif

npm install | { echo "Leaflet-IIIF Npm install failed" ;exit 1; }
