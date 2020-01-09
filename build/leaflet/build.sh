echo "---- BUILD Leaflet ----"

cd leaflet

# build the dist
yarn build || { echo "Leaflet Build failed" ;exit 1; }
