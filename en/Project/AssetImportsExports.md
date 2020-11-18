# Asset Import/Export {#AssetImportExport}

## Overview {#Overview}

Asset Import/Export allows users to export Assets from one Project into a ZIP file and import them to another Project.
This function is intended to be used for backing up the created Assets or copying it to another Project.

Only Flow and File Assets can be exported.
The user can change the exported ZIP file to remove some Assets before importing it to another project.

Assets inside the exported ZIP file should not be edited. An attempt to import an altered Asset can result in error.

The results of Asset Import/Export would be sent by email.

## Description {#Description}

### Prerequisite {#Prerequisite}

- Can only be performed by the project owner or admin
- Only Enterprise project can Export or Import File Assets

### Exported file format {#AssetFileFormat}

The following section describes the format of the exported ZIP file.

For each exported Asset the file includes the Asset's base file (source code created by enebular for Flows or uploaded file for File Assets) and other information such as Asset name, description, etc necessary for each Asset version separately.

#### Folder Structure

The compressed ZIP file has the following folder structure:

- `<Project name>` folder
  - `flows` folder
    - `<Flow Asset name>` folder (*)
      - `<Version>` folder (**)
        - `settings.json` file (***)
        - `flow.json` file(****)
  - `files` folder
    - `<File Asset name>` folder (*)
      - `<Version>` folder (**)
        - `settings.json` file
        - `uploaded file` file

(*) if two Assets with the same name exist, `_n` (n is an integer greater than 0) would be added at the end

(**) `<Version>` folder name can be an integer corresponding to the version number or `master` corresponding to the master Asset.
`master` folder must exist under each Asset folder.

(***) Be careful with the sensitive information as Node-RED Credential information such as passwords etc is included in the exported file.

(****) Reference file for `Import from Clipboard` Node-RED function.
It does not include Credential information.
The Import function does not refer to this file.

#### settings.json content

`settings.json` is the JSON file that is used to store the setting information of each Asset.
Encoding is UTF-8, line ending is CRLF.

##### Flows

`settings.json` file for Flows includes following information:

| Item             | Description                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| title            | Name. Flow name for `master` version or version title otherwise                                                                   |
| description      | Flow description for `master` version or version comment otherwise                                                                |
| category         | Asset category                                                                                                                    |
| type             | Asset type. Fixed to `flow`                                                                                                       |
| sourceCode       | Flow settings. Contains Node-RED flow and credentials                                                                             |
| projectId        | The ID of the project from which Assets were exported                                                                             |
| tagTitles        | List of Tag names attached to Asset                                                                                               |
| defaultPrivilege | Default privileges. After importing of Asset, privileges of the project members other than importing user would be specified here |
| hash             | Information used to confirm that exported Asset is unchanged                                                                      |

##### File Assets

`settings.json` file for File Assets includes following information:

| Item             | Description                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| title            | Name. File Asset name for `master` version's or version title otherwise                                                           |
| description      | File Asset description for `master` version or version;s comment otherwise                                                        |
| category         | Asset category                                                                                                                    |
| type             | Asset type. Fixed to `file`                                                                                                       |
| sourceCode       | File Asset settings.                                                                                                              |
| projectId        | The ID of the project from which Assets were exported                                                                             |
| tagTitles        | List of Tag names attached to Asset                                                                                               |
| defaultPrivilege | Default privileges. After importing of Asset, privileges of the project members other than importing user would be specified here |
| hash             | Information used to confirm that exported Asset is unchanged                                                                      |

### How to use Asset Export {#HowToUseExport}

The following section describes about how to use Asset Export.

1. Open Project which Assets you want to export
2. Click on `Settings` at the top right corner of the Assets screen
3. Click on `Export Asset` from the displayed submenu
4. Click on `Export` button in the confirmation dialogue
5. You will receive an email on your registered email address after the Export process is completed
6. Click on download link inside the received email
  
The email contains:

- flow/file count: number of exported assets
- Export error list: list of occurred errors (if there any)
  - asset name of failed Asset
  - error message
- Download link: link to download the ZIP file

※ Failed Assets would be excluded from the resulting ZIP file in case of error

### How to use Asset Import {#HowToUseImport}

The following section describes how to use Asset Import.

1. Open Project to which you want to import Assets
2. Click on `Settings` at the top right corner of the Assets screen
3. Click on `Import Asset` from the displayed submenu
4. Click on `Import` button in the confirmation dialogue
5. You will receive an email on your registered email address after the Import process is completed

The email contains:

- flow/file count: number of imported assets
- Export error list: list of occurred errors (if there any)
  - asset name of failed Asset
  - error message
  
※ whole import process would not be interrupted if an error occurred while importing any individual asset
※ if an Asset with the same name already exist, `_n` (n is an integer greater than 0) would be added to the imported Asset name at the end

## Usage examples

The following section describes how to change the exported ZIP file.

### Remove Assets

If you don't want to import some Assets, you can accomplish it by editing the exported ZIP file by removing unnecessary `<Asset name>` folder(s) from it.

### Remove Asset Versions

You can remove unnecessary Asset Version by deleting `<Version>` folder inside the `<Asset name>` folder.
For example, if you have version folders for `master`, `1` and `2` version, and you want to keep only version `2`, then all you need to do is to remove `master` and `1` folders and rename folder `2` to `master`.
However, note, that in this case the title and the comment of version `2` would become imported Asset name and description. You can change them after importing  of that Asset.


## Constraints

- Asset Version Control is only available in the Enterprise projects. If you try to import an Asset with different versions, only a master version of that Asset would be imported.
- The number of concurrent Asset Import/Export processes is limited. An error will occur while trying to execute Asset Import/Export if this limit is exceeded.
- An error may occur during export if one of exported Assets is deleted so the outputted ZIP file may not contain that Asset.
