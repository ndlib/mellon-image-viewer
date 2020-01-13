./build/universalviewer/install.sh || { echo "Universal Viewer Install Failed"; exit 1; }

./build/mirador/install.sh || { echo "Mirador Install Failed"; exit 1; }

./build/react/install.sh || { echo "React Install Failed"; exit 1; }

./build/diva/install.sh || { echo "Diva Install Failed"; exit 1; }
