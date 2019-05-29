# SwitchItProject

## GitHub Collaboration

### Getting Started
Fork & Clone Project
In cloned directory excute these command:
```
npm install
git remote add main https://github.com/[USERNAME_OF_MASTER_REPO_OWNER]/[REPO_NAME]
```

## Building
NEVER work on master branch
DO: 
```
git checkout -b 'task_branch'
```
Contributing: When you've finished working on your branch
Make sure you've saved and commited all work
```
git checkout master
git pull main master
git npm install
git checkout 'task_branch'
git merge master
```
Resolve any conflicts
Test App
If App tests out OK:
```
git push -u origin 'task_branch'
```

Pull request your 'task_branch' to main project repo
Add code reviewers from project collaborators list
