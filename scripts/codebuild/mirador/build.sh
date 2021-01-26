echo "---- BUILD Mirador ----"

cd mirador

# build the dist
yarn build || { echo "Mirador Build failed" ;exit 1; }
