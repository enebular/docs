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

## Deploy path {#Deploy path}

You can set the path to deploy.

- path under `<root>/enebular-runtime-agent/ports/awsiot/assets/`
- folder name and file name
- e.g. Setting hoge/hige.txt, saving as `<root>/enebular-runtime-agent/ports/awsiot/assets/hige.txt`.

## Execution {#Execution}

Setting for if you want to deploy execution files.

### Execute On Deploy

If it's turned on, files run as the execution files.
The user is same as enebular-runtime-agent. 

### Max Execution Time

You can set maximum execution time of **Execution**.
Set times are from 0 to 300(5 min)sec.

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

### Staging

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
Set times are from 0 to 300(5 min)sec.

If the Pre-Deploy/Post-Deploy exceeds the maximum execution time, Pre-Deploy/Post-Deploy is forcibly stopped.

## Default Role {#Default Role}

Select file's role.

## Category {#Category}

Choose file's category.
