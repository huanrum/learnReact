NOCOLOR='\033[0m'
REDCOLOR='\033[37;41m'
GREENCOLOR='\033[34;42m'

DIR=`pwd`

cp "$DIR/../index.html" "$DIR/index.html"
echo -e "$GREENCOLOR copy index.html.$NOCOLOR"
echo -e " "

cp "$DIR/../webpack.config.js" "$DIR/webpack.config.js"
echo -e "$GREENCOLOR copy webpack.config.js.$NOCOLOR"
echo -e " "

cp "$DIR/../dev-server.js" "$DIR/dev-server.js"
echo -e "$GREENCOLOR copy dev-server.js.$NOCOLOR"
echo -e " "

echo -e "$REDCOLOR node dev-server.js.$NOCOLOR"
node dev-server.js --open --hot


