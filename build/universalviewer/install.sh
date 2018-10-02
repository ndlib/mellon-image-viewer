echo "---- INSTALL UniversalViewer  ----"

universalviewerbranch=master

# cleanup if it exists
rm -rf universalviewer

# get uv
git clone https://github.com/UniversalViewer/universalviewer.git || { echo "UV git clone failed" ;exit 1; }
cd universalviewer
git checkout $universalviewerbranch

#install uv mods
npm install -g grunt || { echo "UV Grunt install failed" ;exit 1; }
npm install || { echo "UV Npm install failed" ;exit 1; }
