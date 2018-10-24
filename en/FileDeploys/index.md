---
lastUpdated: 2018-10-24
---

# File Deploys

The **File Deploys** deploys files to enebular agent.  
The use cases, for example, running shell script in enebular agent, adding setting files and so on.

Files are kind of asset and included as follows.

- execution files for enebular agent
- setting files for enebular agent
- other files for enebular agent (image files, movie files)

Owner/Admin of the project are able to deploy files. Collaborator can't do that.
To prevent from untrustable deployment, it's only allowed trustable user to deploy it.

## Screen description
### List

The list displays uploaded files.
Selecting a file, you can view the detail of the file.

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

You can deploy files.
Also, see the history of the deployments.

### Devices

You can delete files which deployed in devices.

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

- path under `(root)/assets/`
- folder name and file name
- e.g. Setting hoge/hige.txt, saving as (root)/assets/hoge/hige.txt.

### Execution

Setting for you want to deploy execution files

#### Execute On Deploy

If it's turned on, files are run as the execution files.
The user is same as enebular-runtime-agent. 

#### Max Execution Time

You can set maximum execution time of **Execution**.
It's able to set from 0 to 300(5 min)sec.

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

It's a functionality that you can execute files already deployed when you deploy new files.

#### Staging

##### Pre-Deploy

You can execute a file in enebular agent before the deployment as Pre-Deploy.
If you don't specify it, Pre-Deploy doesn't run.

e.g.) Before deployment, you want to run shell script which deleting some files you don't need anymore in enebular agent.

##### Post-Deploy

You can execute a file in enebular agent after the deployment as Post-Deploy.
If you don't specify it, Post-Deploy doesn't run.

e.g.) After deployment, you want to run shell script which deleting some files you don't need anymore in enebular agent.

#### Command

Command you want to execute.

#### Max Execution Time

You can set maximum execution time of **Pre-Deploy/Post-Deploy**.
It's able to set from 0 to 300(5 min)sec.

If the Pre-Deploy/Post-Deploy exceeds the maximum execution time, Pre-Deploy/Post-Deploy is forcibly stopped.

### Default Role

Select file's role.

### Category

Choose file's category.