# Configuration

enebular-edge-agent configures wireless LAN using ** enebular Reference Board Configuration Tool ** (hereinafter: eRB Config. Tool).
eRB Config. Tool is available for Windows only.

1. [Environment](#environment)
1. [Install](#install)
1. [Usage](#usage)
1. [Troubleshooting](#troubleShooting)

## Environment{#environment}

eRB Config. Tool runs on Windows computer.
The operating environment of eRB Config. Tool is as follows.

| OS | CPU | memory | Other |
| --- | --- | --- | --- |
| Windows 10 | Core i5 2.90GHz or more recommended | 8.0GB or more recommended | .NET Framework v4.6.1 or more recommended |

## Install {#install}

1. Download the installer from [here](https://download.enebular.com/eRB-Config-Tool/eRBConfigTool.msi).
1. Execute "eRBConfigTool.msi" and install according to the screen display.
1. "eRB Config. Tool" is located in the Uhuru Folder in the Start Menu.

## Usage {#usage}

### Setup {#setup}
1. Connect the device and the PC in device mode and start the device in the setting mode. (For the `settings mode`, learn more to the page of each device.)
    - Case of RAVEN:  Press and hold `USER SW` until the `USER LED` lights red. RAVEN starts up in `setting mode`. 
    \* If you want to know more, refer to to the page of each device.
1. Select the serial port to which the device is connected from "Port".

### Wireless LAN Settings {#network}
1. Select the setting mode from "R/W Mode".
    - Read · · · Press "Read" is displayed in the text area.
    - Write・・・Enter each setting value in the text area , and press "Write" to set it.

\* Once the serial port is selected, setting will be saved. You will not need to set it next time you start up. (Except when serial port name changes)
\* When connecting to an open network, please set SSID, leave the password field blank and press the "Write" button.

### Version Info {#version}

1. Press the "Read" button next to blank field of "EEA Version" to check the "enebular-edge-agent" version written on the device.

## TroubleShooting {##troubleShooting}

### Port is not known {#PortIsNotKnown}

1. Open Control Panel > Device Manager > Port.
1. Select Properties > Details > Device description as reported by bus for any port.
1. Reference board to which "value" is "mbed Serial Port" is connected.

### Got an error message{#gotAnErrorMessage}

List of error messages. Please deal with the reference below.

| Error Message                                    | Reference                                                                                                                        |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| There is no Serial port available on this PC.    | No available serial port. Please check your USB connection.                                                                      |
| Serial port setting error.                       | Error on serial port settings. Please check your USB connection or reselect serial port.                                          |
| Serial port error.                               | Something went wrong with the serial port setting. Please check your serial port setting. If it's not working reboot the device. |
| Error command received.                          | Please check if device in setting mode.                                                                                          |
| Received command format error.                   | The received message is different from the communication protocol.                                                               |
| Serial port Time out.                            | Please check if device in setting mode. Please check your USB connection or reselect serial port.                                |
| Input error.                                     | User input Error. Please check user input.                                                                                       |
| SSID length has to be within 32 characters.     | Please check your input.                                                                                                         |
| Password length has to be within 64 characters. | Please check your input.                                                                                                         |

### Uninstall{#uninstall}

1. After executing "setup.exe", select "Delete eRB Config. Tool" and uninstall "eRB Config. Tool" as shown on the screen.

- You can also uninstall from "Add / Remove Programs".
