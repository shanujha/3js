# remove old git
rm -rf .git*
echo "node_modules" > .gitignore
git init
git branch -M main
npm i
rm -rf init.sh