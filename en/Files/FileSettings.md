---
lastUpdated: 2019-01-10
---

# File Settings {#File settings}

File setting are as follows:

## File {#File}

Select the file to upload.

- The maximum file size is 500MB.

## Title {#Title}

The name of files

## Description {#Description}

The description of files (optional)

## Deploy Directory {#Deploy Directory}

The directory name when deploying.

- This will be the directory name under enebular-agent's `ports/<port>/assets` directory. 
- For example, when using the AWS IoT enebular-agent port and uploading a file called `hige.txt` and specifying a directory name of `hoge`, the file will be saved as `ports/awsiot/assets/hoge/hige.txt` under enebular-agent.

## Execution {#Execution}

Setting for if you want to deploy execution files.

### Execute On Deploy

If it's turned on, files run as the execution files.
The user is same as enebular-agent. 

### Max Execution Time

You can set maximum execution time of **Execution**.
Set times are from 1 to 300 seconds (5 minutes).

If the execution exceeds the maximum execution time, execution is forcibly stopped.

### Execution Arguments

Setting execution arguments

### Environmental Variables

Setting environmental variables

- KEY
    - the name of enviromnetal variable
- VALUE
    - the value of enviromnetal variable

## Deploy Hooks {#Deploy Hooks}

It's a functionality that allows you to execute files already deployed when you deploy new files.

### Stage

#### Pre-Deploy

Pre-Deploy executes a file in enebular agent before a deployment.
If you don't specify Pre-Deploy it doesn't run.

e.g.)You want to run a shell script before deployment that deletes some files you don't need anymore in enebular agent.

#### Post-Deploy

Post-Deploy executes a file in enebular agent after deployment.
If you don't specify Post-Deploy it doesn't run.

e.g.) You want to run a shell script after deployment which deletes some files you don't need anymore in enebular agent.

### Asset Path

The path of the asset you want to execute.

### Max Execution Time

You can set maximum execution time of **Pre-Deploy/Post-Deploy**.
Set times are from 1 to 300 seconds (5 minutes).

If the Pre-Deploy/Post-Deploy exceeds the maximum execution time, Pre-Deploy/Post-Deploy is forcibly stopped.

## Default Role {#Default Role}

Select file's role.
