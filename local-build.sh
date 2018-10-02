./build/install.sh || { echo "Install Failed"; exit 1; }
./build/pre_build.sh || { echo "Pre Build Failed"; exit 1; }
./build/build.sh || { echo "Failed to build"; exit 1; }
./build/post_build.sh || { echo "Post Build Failed"; exit 1; }
