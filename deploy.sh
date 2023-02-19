#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://Zack85219.github.io
# git push -f git@github.com:Zack85219/Zack85219.github.io.git main

# 部署到 https://Zack85219.github.io/vite-practice
git push -f git@github.com:Zack85219/vite-works.git main:gh-pages

cd -