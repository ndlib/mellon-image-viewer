echo "---- BUILD Diva ----"

cd divajs

# build the dist
yarn build || { echo "Diva Build failed" ;exit 1; }
