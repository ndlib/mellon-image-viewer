echo "---- BUILD TIFY ----"

cd tify

# build the dist
npm run build || { echo "Tify Build failed" ;exit 1; }
