# Device List Import/Export {#DeviceListImportExport}

## Overview {#Overview}

You can export your existing Device List in enebular as a file or import a file into your Device List.
This is only available to Devices that already have Licenses registered using AWS IoT or Pelion.

Once you export the Device List, you can make changes to it and import it again to update your Device List information.

Updatable categories are limited to the following:

- Tags
- Pelion Device Name (Only works with Pelion Connections)

Import/Export happens on a Connection basis.

Depending on the number of Devices you have, importing a Device List can take time. The result of the Import is notified by email.

## Description {#Description}

### Prerequisite {#Prerequisite}

- Import/Export functionality is limited to paid users
- Import/Export can only be executed by the Project Owner/Admin
- If you export a Device List from Connection A; once you edit it, it can only be imported back into the Device List registered from Connection A. (Adding new Devices, removing Devices, or importing it to a different Device List where the connection is different from the one you exported from is not supported)

### Devices File Format {#DevicesFileFormat}

The file format of the Import/Export functionality is `TSV(Tab Separated Values)`

The schema of the Device File is the following:

| Category         | Description                                                                                     | Updatable |
| ---------------- | ----------------------------------------------------------------------------------------------- | --------- |
| id               | Device ID from enebular                                                                         | No        |
| identifier       | AWS IoT or Pelion Name. For AWS IoT, it is the Thing Name. For Pelion, it is Pelion's DeviceId. | No        |
| tags             | Tags given to the Device. With multiple tags, separate the Tag by a comma                       | Ok        |
| pelionDeviceName | Pelion's Device Name. For AWS IoT, the column is empty                                          | Ok        |

- The first row in the Devices File is the header (Please do not edit it)
- The exported file will be named `<ConnectionName>_<ConnectionId>.tsv`
- Character encoding is UTF-8 and newline is CRLF

Below is an example of a Device File exported from a Pelion connection.

```
id	identifier	tags	pelionDeviceName
03b5a71e-fe00-468c-a353-f68389f6b6ba	016a691252f2000000000001001001e6	foo,bar,foobar	pelion-device-01
```

The first row contains the table headers and is separated by Tabs.
In the second row and tag section, multiple tags are separated by commas.

### Export Usage {#HowToUseExport}

The flow for exporting a Device List is as described below:

1. Open the Project with the Device List you want to export
1. Click on Devices from the sidebar on the left
1. Select the Connection the Device List belongs to
1. Click on the `Settings` dropdown on the top right
1. From the dropdown, select `Export Devices`
1. Click OK on the confirmation dialog
1. Devices File will begin downloading

### Import Usage {#HowToUseImport}

The flow for importing a Device List is as described below:

1. Open the Project with the Device List you want to export
1. Click on Devices from the sidebar on the left
1. Select the Connection the Device List belongs to
1. Click on the `Settings` dropdown on the top right
1. From the dropdown, select `Import Devices`
1. From the dropdown, select `Import` and select the Device file
1. Click on `Import`
1. Shortly, an email regarding the import result will be sent your email address registered with enebular.

The result of `Import` is as follows.

- success count: The number of successful updates
- error count: The number of errors that occur
- imported date: The import date
- When there is an error, the possible error messages are as follows:
  - line number: The line at which the error occurred in the Devices file.
  - error message: The error message

\* When an error occurs during Importing, the Importing continues for lines that do not have the error.

\* If the headers are changed or if the file is empty, the Device file will not be imported and you will see an error message on the screen right away instead of by email.
