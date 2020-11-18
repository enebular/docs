# Tools

This section describes following functions of ** enebular Reference Board Configuration Tool ** (hereinafter: eRB Config. Tool).

- Log
- Debug Output

Please see [here](Configuration.md) for the operating environment of **eRB Config. Tool**.

### Table of Contents

1. [Common setup method](#setup)
1. [Log](#Log)
1. [Debug Output](#DebugOutput)

### Common setup method{#setup}

**eRB Config. Tool** click [Here](https://download.enebular.com/eRB-Config-Tool/eRBConfigTool.msi) to download and install.  

Please do the following steps, after launch **eRB Config. Tool**.

1. Connect to the PC's USB port using the enclosed USB cable.
1. Start the device in `configuration mode`. Press RESET SW and hold the USER SW after rebooting, it will be in 'settings mode'. Make sure the USER LED is lit in red.
    - See [here](./../Board/RAVEN.md#parts) to know USER SW, RESET SW and USER LED of RAVEN

## Log{#Log}

The **eRB Config. Tool** log consists of the following functions:

1. [View Log](#LogDisplay)
1. [Save Log](#LogSave)
1. [Delete Log](#LogDelete)

### View Log{#LogDisplay}

This function display log files information which stored in enebular-edge-agent.

1. Setup **eRB Config. Tool** see [here](#setup).
1. Click Read button in the log group of **eRB Config. Tool**, Log Viewer window opens with log file information.   

### Save Log{#LogSave}

There are two methods for saving logs.

`Save Log File` saves the current view of log file information as a text file.
`Save Log Folder` saves all log file(binary) information read from enebular-edge-agent.

1. [Save Log File](#LogDisplaySave)
1. [Save Log Folder](#LogFolderSave)

#### Save Log File{#LogDisplaySave}

This function saves the currently displayed log file information as a text file.  

1. Click Save Log View button at the bottom left of the Log Viewer window.
1. When the Save Log File dialog is displayed, set the save destination folder and file name, and click the Save button.
1. Saves the currently displayed log file information as a text file with the specified file name in the destination folder.

#### Save Log Folder{#LogFolderSave}

This function saves all log file information read from enebular-edge-agent as a binary file.

1. Click Save Log Folder button at the bottom right of the Log Viewer window.
1. When the folder reference dialog is displayed, set the destination folder, and click the OK button.
1. A folder named YYYYMMDDhhmmss is created in the destination folder, and all log file information read from enebular-edge-agent is saved.

The saved log folder can be displayed by the following procedure.

1. When the View button in the log group of **eRB Config. Tool** is clicked, displays the open folder selection dialog box. Select the saved log file folder, and click the OK button.
1. The Log Viewer window is displayed with log file information.

### Delete Log{#LogDelete}

This function delete all log files stored in enebular-edge-agent.

1. When the Delete button in the log group of **eRB Config. Tool** is clicked, displays confirmation dialog, click the Yes button.   
1. After deletion of log file information from enebular-edge-agent is completed, a deletion success message box will be displayed, click the OK button.

## Debug Output{#DebugOutput}

The debug output of **eRB Config. Tool** consists of the following functions:

1. [View Debug Output](#DebugDisplay)
1. [Save Debug Output](#DebugOutputSave)

### View Debug Output{#DebugDisplay}

This function to display debug output of enebular-edge-agent.
Debug output is disabled by default. see [here](#DebugSetting) to activate this function.

1. Click the View button in the **eRB Config. Tool** debug output group.
1. Debug Output Viewer dialog is displayed with debug message.
1. You can stop the debug output message by clicking the Stop button on the lower left of the window while displaying the debug output message. Then the Stop button switches to the Start button.
1. You can start output by clicking the Start button on the lower left of the window while debug output is stopped. Then the Start button switches to the Stop button.

When debug output is started, [Save Debug Output](#DebugOutputSave) can be used from the Debug Output Viewer window.

#### Enable/Disable Debug Outpu{#DebugSetting}

Follow these steps to enable/disable debug output:

1. Setup **eRB Config. Tool** see [here](#setup).
1. Select the Output Radio button ON or OFF in the debug output group of **eRB Config. Tool**.
1. Click Write button in the debug output group of **eRB Config. Tool**.
1. Click OK button, after Write success message box displayed.

You can read the current settings by clicking the Read button in the debug output group of **eRB Config. Tool**.

### Save Debug Output{#DebugOutputSave}

This function save debug output messages from enebular-edge-agent.  

1. Click the Stop button at the bottom left of the Debug Output Viewer window.
1. Click the Save Debug Output button at the bottom right of the Debug Output Viewer window.
1. When the Save Debug Output dialog is displayed, set the save destination folder and file name, and click the Save button.
1. Saves the Debug Output information as a text file with the specified file name in the destination folder.

The default file name is YYYYMMDDhhmmss.txt.

## Troubleshooting {#troubleShooting}

### Got an error message{#errorMessage}

List of error messages. Please deal with the reference below.  
If you receive an error message other than the following, please refer to [here](./Configuration.md#errorMessage).

1. When enebular-edge-agent is not connected by PC and USB cable
1. When the USB serial port is in use by another application
1. When enebular-edge-agent is not in configuration mode
1. Failed getting version information from enebular-edge-agent
1. When the enebular-edge-agent FW version is less than 1.4.0
1. When log file information does not exist on the enebular-edge-agent
1. When log save is executed without selecting log file information
1. When Debug Output Radio button ON/OFF is not selected

| Error Message | Cause of problem |
| --- | --- |
| Version read failed. This feature may not be used. | 1.,2.,3.,4. |
| This feature cannot be used version 1.4.0 below. | 5. |
| No log file. | 6. |
| Log File not selected. Please select Log File and try again. | 7. |
| Output setting [ON or OFF] not selected. Please select and try again. | 8. |

