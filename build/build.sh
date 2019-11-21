
./build/universalviewer/build.sh || { echo "Universal Viewer Build Failed"; exit 1; }

./build/mirador/build.sh || { echo "Mirador Build Failed"; exit 1; }

./build/react/build.sh || { echo "React Build Failed"; exit 1; }
