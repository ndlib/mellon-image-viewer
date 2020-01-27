echo "---- INSTALL Mirador  ----"

# cleanup if it exists
rm -rf mirador

# get mirador
git clone https://github.com/ProjectMirador/mirador.git mirador || { echo "Mirador git clone failed" ;exit 1; }
cd mirador

#install mirador mods
npm install || { echo "Mirador Npm install failed" ;exit 1; }
