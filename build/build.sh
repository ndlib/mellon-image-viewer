echo "Force a failure to test BuildFailureEventRule notification"
exit 1;
./build/universalviewer/build.sh || { echo "Universal Viewer Build Failed"; exit 1; }

./build/react/build.sh || { echo "React Build Failed"; exit 1; }
