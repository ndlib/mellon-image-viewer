# image-viewer
IIIF Viewer React component

Builds a react component that can be included into a react application that will include universalviewer, mirador, diva, leaftet, and tify image viewers.

The viewer is chosen by the directory of the viewer's custom index page. Variables such as the manifest are appended to the url. ( i.e.: http://example.com/src/VIEWER/index.html?manifest=http://example.com/manifest)

You can read more about each viewer on their respective pages:

Universal Viewer: https://universalviewer.io/
Mirador: https://projectmirador.org/docs/
Diva.js: https://ddmal.music.mcgill.ca/diva.js/doc/
Leaflet: https://leafletjs.com/
Leaflet IIIF extension: https://github.com/mejackreed/Leaflet-IIIF
Tify: https://github.com/tify-iiif-viewer/tify


# Install
./scripts/codebuild/codebuild.sh


# run
yarn start
goto localhost:3001

Currently this does not run the local universalviewer instance.  

# build
yarn build

# Testing

To run the tests one time.
yarn test  

To watch changes to the test file
yarn watch

\\\


Enzyme:  https://airbnb.io/enzyme/docs/api
Jest: https://jestjs.io/docs/en/tutorial-react
