---
lastUpdated: 2018-11-30
---

# Files {#Files}

**Files** deploys files to enebular agent.  
A use case example can be running shell scripts in enebular agent or adding setting files.

A file is an asset with one of the following possible functionalities.

- executing files for enebular agent
- setting files for enebular agent
- other files for enebular agent (image files, movie files)

Owner/Admin of the project are able to deploy files. Collaborators are unable to.
Deployments can only be made by trusted users.

## Screen description {#Screen description}
### List {#List}

The list displays uploaded files.
Select a file to view it's details.

| # | Item | Description |
| --- | --- | --- |
| 1 | File | The name of the file assets |
| 2 | Type | The type of the files |
| 3 | Last Updated |  The date connection last updated |

### Add {#Add}

You can upload new files.

Click on the plus ("+") button.

At the pop up, set the config of the file, Click on `upload` button.

See **File settings** for further information about config.

### Overview {#Overview}

You can see general information about the uploaded files.

### Deploy {#Deploy}

You can deploy files and view deployment history.

### Devices {#Devices}

You can delete files which are deployed in devices.

### Access {#Access}

You can set the access to files.

### Settings {#Settings}

You can edit settings of files.

## File settings {#File settings}

File setting are as follows:

### Title {#Title}

The name of files

### Description {#Description}

The description of files (optional)

### Deploy path {#Deploy path}

You can set the path to deploy.

- path under `<root>/enebular-runtime-agent/ports/awsiot/assets/`
- folder name and file name
- e.g. Setting hoge/hige.txt, saving as `<root>/enebular-runtime-agent/ports/awsiot/assets/hige.txt`.

### Execution {#Execution}

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

### Deploy Hooks {#Deploy Hooks}

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

### Default Role {#Default Role}

Select file's role.

### Category {#Category}

Choose file's category.