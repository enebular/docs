---
lastUpdated: 2018-10-24
---

# File Deploys

**File Deploys** deploys files to enebular agent.  
A use case example can be running shell scripts in enebular agent or adding setting files.

A file is an asset with one of the following possible functionalities.

- executing files for enebular agent
- setting files for enebular agent
- other files for enebular agent (image files, movie files)

Owner/Admin of the project are able to deploy files. Collaborators are unable to.
Deployments can only be made by trusted users.

## Screen description
### List

The list displays uploaded files.
Select a file to view it's details.

| # | Item | Description |
| --- | --- | --- |
| 1 | File | The name of the file assets |
| 2 | Type | The type of the files |
| 3 | Last Updated |  The date connection last updated |

### Add

You can upload new files.

Click on the plus ("+") button.

At the pop up, set the config of the file, Click on `upload` button.

See **File settings** for further information about config.

### Overview

You can see general information about the uploaded files.

### Deploy

You can deploy files and view deployment history.

### Devices

You can delete files which are deployed in devices.

### Access

You can set the access to files.

### Settings

You can edit settings of files.

## File settings

File setting are as follows:

### Title

The name of files

### Description

The description of files (optional)

### Deploy path

You can set the path to deploy.

- path under `<root>/enebular-runtime-agent/ports/awsiot/assets/`
- folder name and file name
- e.g. Setting hoge/hige.txt, saving as `<root>/enebular-runtime-agent/ports/awsiot/assets/hige.txt`.

### Execution

Setting for if you want to deploy execution files.

#### Execute On Deploy

If it's turned on, files run as the execution files.
The user is same as enebular-runtime-agent. 

#### Max Execution Time

You can set maximum execution time of **Execution**.
Set times are from 0 to 300(5 min)sec.

If the execution exceeds the maximum execution time, execution is forcibly stopped.

#### Execution Arguments

Setting execution arguments

#### Environmental Variables

Setting environmental variables

- KEY
    - the name of enviromnetal variable
- VALUE
    - the value of enviromnetal variable

### Deploy Hooks

It's a functionality that allows you to execute files already deployed when you deploy new files.

#### Staging

##### Pre-Deploy

Pre-Deploy executes a file in enebular agent before a deployment.
If you don't specify Pre-Deploy it doesn't run.

e.g.)You want to run a shell script before deployment that deletes some files you don't need anymore in enebular agent.

##### Post-Deploy

Post-Deploy executes a file in enebular agent after deployment.
If you don't specify Post-Deploy it doesn't run.

e.g.) You want to run a shell script after deployment which deletes some files you don't need anymore in enebular agent.

#### Command

Command you want to execute.

#### Max Execution Time

You can set maximum execution time of **Pre-Deploy/Post-Deploy**.
Set times are from 0 to 300(5 min)sec.

If the Pre-Deploy/Post-Deploy exceeds the maximum execution time, Pre-Deploy/Post-Deploy is forcibly stopped.

### Default Role

Select file's role.

### Category

Choose file's category.