echo "---- INSTALL Diva  ----"

divabranch=master

# cleanup if it exists
rm -rf diva

# get diva
git clone --branch v6.0.2 git://github.com/DDMAL/diva.js.git divajs || { echo "Diva git clone failed" ;exit 1; }
cd divajs
git checkout $divabranch

#install diva mods
npm install || { echo "Diva Npm install failed" ;exit 1; }
