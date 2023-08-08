# Looking into git

To be frank, until now I have only been using basic git commands. Without
knowing much about how it works, or how to solve conflicts and so on.

In my opinion, you are only able to use a tool to its full potential if you
understand at least some of the concepts behind it. So I decided to try and
learn more about git. Here are some of my findings.

Note that:

1. I am no git expert, so if you find any mistakes or have any suggestions
   please let me know;
2. I won't be bogged down by formal definitions or implementations, my goal here
   is to develop an understanding of how to use git more effectively.

With that out of the way, let's get started.

## What is git ?

<mark>You can think of git as a series of pictures (snapshots) of a mini
filesystem. With git you can go back and forth between those snapshots, and
manage what goes into each one of them.</mark>

High level view of what snapshots represent (not related to how they are
implemented):

```python
# Picture 1
--main-folder
  |--fileA-v1
  |--fileB-v1
  |--fileC-v1

# Picture 2
--main-folder
  |--fileA-v1 # File didn't change
  |--fileB-v2 # File content changed
              # File was removed

...
```

## Where does git store all this ?

First of all, every git initialized project has a hidden folder called
<mark>.git</mark>. This folder contains all the data about the project,
including all the snapshots (based around the concepts of files and pointers to
those files).

At its core, the files are stored in a subfolder of <mark>.git</mark> called
<mark>objects</mark>, however they are not stored by their name, instead they
are saved by their content (SHA-1 hash). So, if a file changes, git will know,
because the checksums will be different. Important to note that git will store
both the old and the new version of the file.

Git is additive, so each version of a file that is tracked by a snapshot will be
stored separately, files will not be overritten.

I am not going to go into detail about how git implements snapshots, I am more
interested in how it uses them. And how we can interact with them.

## How to use git ?

### The three areas

Before we start, let's talk about the three areas we need to consider when
managing those snapshots.

![Working tree, staging area, and Git directory](https://git-scm.com/book/en/v2/images/areas.png)

- _The working tree / directory_ is just a checkout of one of those snapshots.
  This is where you will be doing most of your work;

- _The staging area, aka "the index"_ is where you will be adding the files
  (created, modified, renamed, ... from the working directory) or removing them
  from the **next snapshot**;

- _The git directory_ is where git stores all the snapshots and all relevant
  metadata.

### Basic commands and considerations

#### git init

This command is used to initialize a git repository. It will create a
<mark>.git</mark> folder in the current directory.

```bash
user@pc ~/P/training> git init
Initialized empty Git repository in /home/user/Projects/training/.git/

user@pc ~/P/training (master)> ls -a .git
.  ..  branches  config  description  HEAD  hooks  info  objects  refs
```

#### git clone

Sometimes you already have a remote repository. In that case you can use this
command to clone it. It will create a new directory and initialize a git
repository in it. It will also copy all the files from the remote repository to
the local one.

```bash
user@pc ~/P> git clone <github_url>
Cloning into 'training'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.

user@pc ~/P> ls -a training
.  ..  .git  README.md
```

#### git add

This command is used to **add changes in the form of files** from the working
directory to the staging area. That change can be a file that was modified,
removed, renamed, etc. All those changes will be added to the **next snapshot**
when a commit is made.

```bash
user@pc ~/P/training (master)> git add README.md
user@pc ~/P/training (master)> git status
On branch master

No commits yet
```

#### git commit

This command is used to create a new snapshot. It will take all the files in the
staging area and create a new snapshot with them.

#### git status

This command is used to check the status of the working directory and the
staging area. It will tell you which files are modified, which are staged and
which are untracked.

#### git diff

This command is used to check the differences between the working directory and
the staging area. It will tell you which lines were added, removed or modified.

#### git log

This command is used to check the history of the project. It will show you all
the snapshots that were created, and the changes that were made in each one of
them.

#### git checkout

This command is used to checkout a snapshot. It will replace the working
directory with the files from the snapshot.

#### git reset

This command is used to reset the staging area. It will remove the files from
the staging area.

#### git rm

This command is used to remove files from the staging area. It will remove the
files from the next snapshot.

#### git branch

This command is used to create a new branch. It will create a new pointer to a
snapshot.

#### git merge

This command is used to merge two branches. It will create a new snapshot that
contains the changes from both branches.

#### git rebase

This command is used to rebase a branch. It will create a new snapshot that
contains the changes from the branch being rebased, and the changes from the
branch it is being rebased onto.

#### git stash

This command is used to stash changes. It will create a new snapshot that
contains the changes from the working directory, and will remove them from the
working directory.

#### git stash pop

This command is used to pop stashed changes. It will take the changes from the
last stashed snapshot and add them to the working directory.

#### git stash apply

This command is used to apply stashed changes. It will take the changes from the
last stashed snapshot and add them to the staging area.

#### git stash drop

This command is used to drop stashed changes. It will remove the last stashed
snapshot.

#### git stash list

This command is used to list stashed changes. It will show you all the stashed
snapshots.

#### git stash clear

This command is used to clear stashed changes. It will remove all the stashed
snapshots.

#### git stash branch

This command is used to create a new branch from stashed changes. It will create
a new branch with the changes from the last stashed snapshot.

#### git stash show

This command is used to show stashed changes. It will show you the changes from
the last stashed snapshot.
