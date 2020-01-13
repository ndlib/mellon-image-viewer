echo "---- INSTALL Diva  ----"

# cleanup if it exists
rm -rf divajs

# get diva
git clone --branch v6.0.2 git://github.com/DDMAL/diva.js.git divajs || { echo "Diva git clone failed" ;exit 1; }
cd divajs

#install diva mods
npm install || { echo "Diva Npm install failed" ;exit 1; }
