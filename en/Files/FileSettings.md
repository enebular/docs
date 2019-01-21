---
lastUpdated: 2019-01-21
---

# File Settings {#File settings}

Files have the following settings.

## File {#File}

The file to upload to enebular.

- The maximum file size is 500MB.

## Name {#Name}

The asset name of the file.

## Description {#Description}

The description of the file (optional).

## Deploy Directory {#Deploy Directory}

The directory name when deploying.

- This will be the directory name under enebular-agent's `ports/<port>/assets` directory. 
- For example, when using the AWS IoT enebular-agent port and uploading a file called `hige.txt` with a deploy directory of `hoge`, the file will be saved as `ports/awsiot/assets/hoge/hige.txt` under enebular-agent.

## Execution {#Execution}

These are settings for executing the file on deploy.

### Execute On Deploy

When enabled, the file is treated as an executable and executed on deploy.
The file is executed as the same user as enebular-agent.

### Max Execution Time

The maximum time of the file's execution.
Any number of seconds between 1 and 300 (5 minutes) can be specified.

If the file's execution exceeds the maximum execution time, the execution is forcibly stopped.

### Execution Arguments

The arguments passed to the file when executed.

### Environment Variables

The environment variables provided to the file when executed.

- KEY
    - The enviromnetal variable name
- VALUE
    - The enviromnetal variable value

## Deploy Hooks {#Deploy Hooks}

This is for executing other files already deployed when deploying this file.

### Stage

#### Pre-Deploy

Selecting Pre-Deploy executes the existing file immediately before this file is deployed.
If no file is specified then the hook doesn't run.

For example, you could run a shell script before deployment that deletes some files from the deploy directory which are no longer needed.

#### Post-Deploy

Selecting Post-Deploy executes the existing file immediately after this file is deployed.
If no file is specified then the hook doesn't run.

For example, you could run a shell script after deployment that deletes some files from the deploy directory which are no longer needed.

### Asset Path

The path of the asset to execute.

### Max Execution Time

The maximum time of the hook's execution.
Any number of seconds between 1 and 300 (5 minutes) can be specified.

If the hook's execution exceeds the maximum execution time, the execution is forcibly stopped.

## Default Role {#Default Role}

The file's role.
