#!/bin/bash

# Milán Unicsovics, u.milan at gmail dot com
# usage: ./install.sh
# installs DinoPlayer Helper and creates list.json

# install

wget https://raw.github.com/thesnapdragon/dinoplayer/master/install/release/linux/createJSON
chmod +x ./createJSON
./createJSON > list.json
wget https://raw.github.com/thesnapdragon/dinoplayer/master/install/release/index.html
echo Install completed...

# cleanup

rm createJSON

echo PRESS ENTER TO EXIT
read key

exit 0
