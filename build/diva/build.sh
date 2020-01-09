echo "---- BUILD Diva ----"

cd diva.js

# build the dist
yarn build || { echo "Diva Build failed" ;exit 1; }
