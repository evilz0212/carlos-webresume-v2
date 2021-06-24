# 打包
NODE_ENV=production vite build

# 新增至暫存分支 (強制加入dist資料夾)
git checkout -b temp
git add -f dist
git commit --allow-empty -m 'Initial dist subtree commit'

# 分割 dist 資料夾至 gh-pages 分支
git subtree split --rejoin --prefix dist -b gh-pages
git push -f origin gh-pages

# 切回主分支，刪除本地暫存分支
git checkout main
git branch -D gh-pages temp