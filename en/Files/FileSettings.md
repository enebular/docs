# File Settings {#File settings}

The following explains about the file configuration options.

## File {#File}

The file to upload to enebular.

-   The maximum file size is 500MB.

## Name {#Name}

The asset name of the file.

The characters that can be entered are single-byte alphanumeric characters, underscores, and hyphens. Please enter within 1 to 30 characters.

## Description {#Description}

The description of the file.
You can enter up to 512 characters.

## Deploy Directory {#Deploy Directory}

The directory name when deploying.

-   This will be the directory name under enebular-agent's `ports/<port>/assets` directory.
-   For example, when using the AWS IoT enebular-agent port and uploading a file called `foo.txt` with a deploy directory of `bar`, the file will be saved as `ports/awsiot/assets/bar/foo.txt` under enebular-agent.
-   If no deploy directory is specified, then the file is saved directly under the `ports/<port>/assets` directory.

The characters that can be entered are single-byte alphanumeric characters, underscores, and hyphens. Please enter within 1 to 30 characters.

## Execution {#Execution}

These are settings for executing the file on deploy.

### Execute On Deploy {#Execute On Deploy}

When enabled, the file is treated as an executable and executed on deploy.
The file is executed as the same user as enebular-agent.
The following options are displayed when this option is toggled on.

### Max Execution Time {#Max Execution Time}

The maximum time of the file's execution.
Any number of seconds between 1 and 300 (5 minutes) can be specified.

If the file's execution exceeds the maximum execution time, the execution is forcibly stopped.

### Execution Arguments {#Execution Arguments}

The arguments passed to the file when executed.

### Environment Variables {#Environment Variables}

The environment variables provided to the file when executed.

-   KEY
    -   The environment variable name
-   VALUE
    -   The environment variable value

## Deploy Hooks {#Deploy Hooks}

This is for executing other files already deployed when deploying this file.

### Stage {#Stage}

Either Pre-Deploy or Post-Deploy can be selected here.

#### Pre-Deploy {#Pre-Deploy}

Selecting Pre-Deploy executes the existing file immediately before this file is deployed.
If no file is specified then the hook doesn't run.

For example, you could run a shell script before deployment that deletes some files from the deploy directory which are no longer needed.

#### Post-Deploy {#Post-Deploy}

Selecting Post-Deploy executes the existing file immediately after this file is deployed.
If no file is specified then the hook doesn't run.

For example, you could run a shell script after deployment that deletes some files from the deploy directory which are no longer needed.

### Asset Path {#Asset Path}

The path of the asset to execute.

### Max Execution Time {#Max Execution Time}

The maximum time of the hook's execution.
Any number of seconds between 1 and 300 (5 minutes) can be specified.

If the hook's execution exceeds the maximum execution time, the execution is forcibly stopped.

## Privilege {#Privilege}

The file's access permissions.
