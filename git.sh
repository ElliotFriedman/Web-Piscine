rm .DS_Store
git add .
git commit -m "${1}"
git push origin master
git push github master

echo "
Commit message: ${1}
"
