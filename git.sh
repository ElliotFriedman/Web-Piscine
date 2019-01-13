rm .DS_Store
git add git.sh
git add rush00/public/*
git commit -m "${1}"
git push origin master

echo "
Commit message: ${1}
"
