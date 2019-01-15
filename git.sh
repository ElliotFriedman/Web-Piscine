rm .DS_Store
git add day05/*
git rm -rf day05/.git
git add git.sh
git add rush00/public/*
git commit -m "${1}"
git push origin master

echo "
Commit message: ${1}
"
