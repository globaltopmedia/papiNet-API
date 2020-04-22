## Contributing Guidelines

This document intends to establish guidelines which build a transparent, open mechanism for deciding how to evolve the papiNet API standard. The papiNet Central Working Group (CWG) will follow these processes when merging changes from external contributors or from the CWG itself. This guideline document will be adjusted as practicality dictates.

## Tracking Process
* GitHub is the medium of record for all papiNet API standard updates.
* At any given time, there would be *at most* 4 work branches. The branches would exist if work has started on them. Assuming a current version of 1.0.0:
  * master - Current stable version 1.0.0. No PRs would be accepted directly to modify the specification. PRs against supporting files can be accepted.
  * v1.0.1 - The next PATCH version of the standard. This would only include non-breaking changes such as typo fixes and wording clarifications.
  * v1.1.0 - The next MINOR version.
  * v2.0.0 - The next MAJOR version.
* New features should be done in feature branches/forks which, upon approval, are merged into the proper work branch.
* An issue SHOULD be opened for each feature change.
* A PR will be used to describe the *proposed* solution and linked to the original issue.

## Release Process
A release requires a vote by papiNet CWG members within the voting period.
* PATCH-level releases require a majority (>=50%) approval by papiNet CWG members within a voting period of 5 calendar days
* MINOR-level releases requires a super majority (>=66%) approval by papiNet CWG members within a voting period of 10 calendar days
* MAJOR-level releases requires a super majority (>=66%) approval by papiNet CWG members within a voting period of 15 calendar days

## Getting Started for papiNet CGW Members

First of all, you need to install Git. For an installation on Windows, you can just go to <https://git-scm.com/download/win> and the download will start automatically. If you want to install Git on other OS, please follow the instructions at <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>.

Once you have install Git on your computer, you can start **Git Bash** and type

  ```command
  USER@MACHINE MINGW64 ~
  $ git --version
  git version 2.26.0.windows.1
  ```

Then, you should configure your Git with the following commands:

  ```command
  USER@MACHINE MINGW64 ~
  $ git config --global user.name "[Your first name] [Your last name]"

  USER@MACHINE MINGW64 ~
  $ git config --global user.email "[Your email used to sign up to GitHub.com]"
  ```

You can verify that your configuration is correct using the following commands:

  ```command
  USER@MACHINE MINGW64 ~
  $ git config --global --show-origin user.name
  file:C:/Users/USER/.gitconfig John Doe

  USER@MACHINE MINGW64 ~
  $ git config --global --show-origin user.email
  file:C:/Users/USER/.gitconfig john.doe@mail.com
  ```

Now, we can clone the **papiNet-API** repository from GitHub:

  ```command
  USER@MACHINE MINGW64 ~
  $ git clone https://github.com/papinet/papiNet-API.git
  Cloning into 'papiNet-API'...
  remote: Enumerating objects: 17, done.
  remote: Counting objects: 100% (17/17), done.
  remote: Compressing objects: 100% (15/15), done.
  remote: Total 17 (delta 4), reused 6 (delta 0), pack-reused 0
  Receiving objects: 100% (17/17), 7.34 KiB | 2.45 MiB/s, done.
  Resolving deltas: 100% (4/4), done.
  ```

It create a new directory with the same name as the repository `papiNet-API`:

  ```command
  USER@MACHINE MINGW64 ~
  $ cd papiNet-API/

  USER@MACHINE MINGW64 ~/papiNet-API (master)
  $
  ```

You should now locate the work branch representing the version you would like to work on. Assuming that the current version of the standard is 1.0.0, you should then see the following three work branches:

  * `v1.0.1` for the next PATCH version, which SHOULD only include non-breaking changes such as typo fixes and wording clarifications.
  * `v1.1.0` for the next MINOR version.
  * `v2.0.0` for the next MAJOR version.

You get the list of available branches with the following command:

  ```command
  USER@MACHINE MINGW64 ~/papiNet-API (master)
  $ git branch -a
  * master
    remotes/origin/HEAD -> origin/master
    remotes/origin/v1.0.1
    remotes/origin/v1.1.0
    remotes/origin/v2.0.0
  ```

Assuming that you want to add a file, you should switch to the `v1.1.0` branch:

  ```command
  USER@MACHINE MINGW64 ~/papiNet-API (master)
  $ git checkout v1.1.0
  Switched to a new branch 'v1.1.0'
  Branch 'v1.1.0' set up to track remote branch 'v1.1.0' from 'origin'.

  USER@MACHINE MINGW64 ~/papiNet-API (v1.1.0)
  $
  ```

Notice that the Git Batch prompt nicely tells you on which branch you are.

You cannot work directly on the branch `v1.1.0`. Changes to this branch MUST be done only via Pull Request (PR), which will requires the approval of three maintainers.

So, you need to create your own working branch from the branch `v1.1.0`:

  ```command
  USER@MACHINE MINGW64 ~/papiNet-API (v1.1.0)
  $ git branch john-v1.1.0

  USER@MACHINE MINGW64 ~/papiNet-API (v1.1.0)
  $ git checkout john-v1.1.0
  Switched to branch 'john-v1.1.0'

  USER@MACHINE MINGW64 ~/papiNet-API (john-v1.1.0)
  $
  ```

Let's assume that the root folder of the repository only contains the following two files:

  ```command
  USER@MACHINE MINGW64 ~/papiNet-API (john-v1.1.0)
  $ ls
  LICENSE  README.md
  ```

Before you do anything, you will have:

  ```command
  USER@MACHINE MINGW64 ~/papiNet-API (john-v1.1.0)
  $ git status
  On branch john-v1.1.0
  nothing to commit, working tree clean
  ```

Now, if you add/create the `MAINTAINERS.md` file:

  ```command
  USER@MACHINE MINGW64 ~/papiNet-API (john-v1.1.0)
  $ ls
  LICENSE  MAINTAINERS.md  README.md
  ```

You will have:

  ```command
  USER@MACHINE MINGW64 ~/papiNet-API (john-v1.1.0)
  $ git status
  On branch john-v1.1.0
  Your branch is up to date with 'origin/v1.1.0'.

  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          MAINTAINERS.md

  nothing added to commit but untracked files present (use "git add" to track)
  ```

Then, you should add this new file `MAINTAINERS.md` to the *Staging Area*:

  ```command
  USER@MACHINE MINGW64 ~/papiNet-API (v1.1.0)
  $ git add .

  USER@MACHINE MINGW64 ~/papiNet-API (v1.1.0)
  $ git status
  On branch v0.1.0
  Your branch is up to date with 'origin/v1.1.0'.

  Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
          new file:   MAINTAINERS.md
  ```

And commit your change(s):

  ```command
  USER@MACHINE MINGW64 ~/papiNet-API (v1.1.0)
  $ git commit -m "Add the file MAINTAINERS.md"
