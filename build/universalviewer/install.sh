echo "---- INSTALL UniversalViewer  ----"

universalviewerbranch=master

# cleanup if it exists
rm -rf universalviewer

# get uv
git clone https://github.com/UniversalViewer/universalviewer.git
cd universalviewer
git checkout $universalviewerbranch

#install uv mods
npm install -g grunt
npm install
