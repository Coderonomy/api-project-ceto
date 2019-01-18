# project-ceto 
back end

# Git Workflow - Feature Branch

**General Process**
 - At the start of each session, make sure you are on the master branch and do `git pull` to bring down any changes others have made
 - Create a feature branch for whatever you are working on using `git checkout -b <branch-name>`
 - Work on the feature branch, making regular commits to document the process
 - When ready (i.e. when a chunk of work has been completed, but not too much) push your feature branch to the GitHub repo with `git push origin <branch-name>`
 - Go onto GitHub and make a Pull Request. Write a comment to explain what this code does. Let your team members know that there is a pull request waiting for them to see.
 - Once your team member has done a code review and approved the pull request and your code is merged, switch onto your master branch and do `git pull` to get the changes.

**More Info**
- At the end of the day/every few days delete unusued branches both locally and on GitHub. Usually git/GitHub will let you know if these branches haven't yet been merged.