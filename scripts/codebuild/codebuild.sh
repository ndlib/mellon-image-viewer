# install
./scripts/codebuild/universalviewer/install.sh || { echo "Universal Viewer Install Failed"; exit 1; }

./scripts/codebuild/mirador/install.sh || { echo "Mirador Install Failed"; exit 1; }

./scripts/codebuild/react/install.sh || { echo "React Install Failed"; exit 1; }

# ./scripts/codebuild/leaflet/install.sh || { echo "Leaflet Install Failed"; exit 1; }

# pre build
./scripts/codebuild/react/pre_build.sh || { echo "React Prebuild Failed"; exit 1; }

rm -rf dist/*

# build

./scripts/codebuild/universalviewer/build.sh || { echo "Universal Viewer Build Failed"; exit 1; }

./scripts/codebuild/mirador/build.sh || { echo "Mirador Build Failed"; exit 1; }

# ./scripts/codebuild/diva/build.sh || { echo "Diva Build Failed"; exit 1; }

# ./scripts/codebuild/leaflet/build.sh || { echo "Leaflet Build Failed"; exit 1; }

./scripts/codebuild/react/build.sh || { echo "React Build Failed"; exit 1; }

# post build

./scripts/codebuild/universalviewer/post_build.sh || { echo "Universal Viewer Post Build Failed"; exit 1; }
./scripts/codebuild/mirador/post_build.sh || { echo "Mirador Post Build Failed"; exit 1; }

echo "FINISHED BUILD"

# deploy
