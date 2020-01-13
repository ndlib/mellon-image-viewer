echo "---- INSTALL Leaflet  ----"

leafletbranch=master

# cleanup if it exists
rm -rf leaflet

# get mirador
git clone https://github.com/Leaflet/Leaflet.git || { echo "Leaflet git clone failed" ;exit 1; }
cd leaflet
git checkout $leafletbranch

#install mirador mods
npm install || { echo "Leaflet Npm install failed" ;exit 1; }
