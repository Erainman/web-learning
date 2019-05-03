#git命令总结：

##创建一个本地库 ：

- $git init
在当前目录下新建一个git代码库
- $git init [project-name]
新建一个目录,将其初始化为一个git代码库
- $git clone [url]
下载一个项目和它的整个代码历史

##添加/删除文件：

- $git add [file1] [file2]....
添加指定的文件到暂存区
- $git add [dir]
添加指定目录到暂存区,包括其中的子目录
- $git add .
添加当前目录的所有文件到暂存区
- $git rm [file1] [file2].......
删除工作区文件,并将这次删除的文件放入暂存区
- $ git rm --cached [file]
停止追踪指定文件,但该文件会保留在工作区
- $ git mv [file-original] [file-renamed]
修改文件名,并将这个文件放入暂存区

##代码提交

- $　git commit -m [message]
提交暂存区到仓库区
- $git commit [file1] [file2] ....-m [message(自己写的上传的文件的备注信息)]
提交暂存区的指定文件到仓库区
- $git commit -a
提交工作区自上次commit之后的变化,直接到仓库区
- $ git commit -v
提交时显示所有的diff信息
使用一次新的commit,替代上一次提交
- $ git commit --amend -m [message]
如果代码没有任何新变化,则用来改写上一次commit的提交信息
- $git commit --amend [file1] [file2]...
重做上一次commit,并包括制定文件的新变化

##查看信息
- $ git status
显示所有的变更的文件;
- $ git log
显示当前分支的版本历史
- $ git log --stat
显示commit历史,以及每次commit发生变更的文件
- $git log -S [keyword]
搜索提交历史,根据关键词
- $ git log [tag] HEAD --pretty=format:%s
显示某个commit之后的所有变动,每个commit占据一行
- $ git log [tag] HEAD -grep feaure
显示某个commit之后的所有变动,其"提交说明"必须符合搜索条件
- $git log --follow [file]
显示某个文件的版本历史,包括文件改名
- $git log -p [file]
显示指定文件相关的每一次diff
- $git log -5 --pretty --oneline
显示过去五次提交
- $git shortlog -sn
显示所有提交过的用户,按提交次数排序
- $ git diff
显示暂存区和工作区的差异
- $ git blame [file]
显示指定文件是什么人,什么时间修改过
- $git diff HEAD
显示暂存区和上一个commit的差异
- $git diff [first-branch]...[second-branch]
显示两次提交之间的差异
- $ git diff --shortstat "@{0 day ago}"
显示今天你写了多少行代码
- $git show [commit]
显示某次提交的元数据和内容变化
- $ git show [commit]:[filename]
显示末次提交发生变化的文件
- $git reflog
显示当前分支的最近几次提交

##远程同步

- $git fetch [remote]
下载远程仓库的所有变动
- $git remote -v
显示所有的远程仓库
- $git remote show [remote]
显示某个远程仓库的信息
- $git remote add [shortname] [url]
增加一个新的远程仓库,并命名
- $git pull [remote] [branch]
取回远程仓库的变化,并与本地分支合并
- $git push [remote] --force
上传本地指定分支到远程仓库
- $git push [remote] --all
推送所有分支到远程仓库

#撤销/恢复操作
- $git checkout [file]
恢复暂存区的指定文件到工作区
- $git checkout [commit] [file]
恢复某个commit的指定文件到暂存区和工作区
- $git checkout
恢复暂存区的所有文件到工作区
- $git reset [file]
重置暂存区的指定文件,与上一次commit 保持一致,当工作区不变
- $git reset --hard
重置暂存区与工作区,与上一次commit保持一致
- $git reset [commit]
重置当前分支的指针为指定commit,同时重置暂存区,当工作区不变
- $git reset --hard [commit]
重置当前分支的HEAD为指定commit同时重置暂存区和工作区,与指commit一致
- $git reset --keep [commit]
重置当前HEAD为指定commit,但保持暂存区和工作区不变
- $ git revert [commit]
新建一个commit,用来撤销指定commit，
- $git stash
后者的所有变化都将被前者抵消,并且应用到当前分支
- $git stash pop
暂时将未提交的变化移除,稍后再移入

- git remote add origin [github]
与github建立连接；

- git push origin master
将文件添加到主枝上；即将文件添加到github上；

