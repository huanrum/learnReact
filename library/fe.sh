NOCOLOR='\033[0m'
REDCOLOR='\033[37;41m'
GREENCOLOR='\033[34;42m'

DIR=`pwd`
NAME=$(basename "$DIR")
TITLE="{headtitle}"

cp "$DIR/../index.html" "$DIR/../build/$NAME/index.html"
sed -i "s/$TITLE/$NAME/g" "$DIR/../build/$NAME/index.html"
echo -e "$GREENCOLOR copy index.html.$NOCOLOR"
echo -e " "

cp -R "$DIR/assets/" "$DIR/../build/$NAME/assets/"
echo -e "$GREENCOLOR copy assets.$NOCOLOR"
echo -e " "

cp "$DIR/../webpack.config.js" "$DIR/webpack.config.js"
echo -e "$GREENCOLOR copy webpack.config.js.$NOCOLOR"
echo -e " "

echo -e "$REDCOLOR webpack webpack.config.js.$NOCOLOR"
echo -e " "
webpack webpack.config.js

rm -f "$DIR/webpack.config.js"
rm -f "$DIR/index.html"
