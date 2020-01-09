echo "---- INSTALL Leaflet  ----"

divabranch=master

# cleanup if it exists
rm -rf diva

# get mirador
git clone git://github.com/DDMAL/diva.js.git || { echo "diva git clone failed" ;exit 1; }
cd diva
git checkout $divabranch

#install mirador mods
npm install || { echo "diva Npm install failed" ;exit 1; }
