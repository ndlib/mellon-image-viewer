# install
./build/universalviewer/install.sh || { echo "Universal Viewer Install Failed"; exit 1; }

./build/mirador/install.sh || { echo "Mirador Install Failed"; exit 1; }

./build/react/install.sh || { echo "React Install Failed"; exit 1; }

# ./build/leaflet/install.sh || { echo "Leaflet Install Failed"; exit 1; }

# pre build
./build/react/pre_build.sh || { echo "React Prebuild Failed"; exit 1; }

rm -rf dist/*

# build

./build/universalviewer/build.sh || { echo "Universal Viewer Build Failed"; exit 1; }

./build/mirador/build.sh || { echo "Mirador Build Failed"; exit 1; }

# ./build/diva/build.sh || { echo "Diva Build Failed"; exit 1; }

# ./build/leaflet/build.sh || { echo "Leaflet Build Failed"; exit 1; }

./build/react/build.sh || { echo "React Build Failed"; exit 1; }

# post build

./build/universalviewer/post_build.sh || { echo "Universal Viewer Post Build Failed"; exit 1; }
./build/mirador/post_build.sh || { echo "Mirador Post Build Failed"; exit 1; }

echo "FINISHED BUILD"

# deploy
