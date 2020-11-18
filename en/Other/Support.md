# Operating Environments {#OperatingEnvironments}

## enebular {#enebular}

The web browsers supported by enebular are as follows.

| Web Browser    | Version                                                                              | OS          |
| -------------- | ------------------------------------------------------------------------------------ | ----------- |
| Chrome         | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac |
| Firefox        | [57.0 or later](https://www.mozilla.org/en-US/firefox/releases/)                     | Windows/Mac |
| Safari         | Coming soon                                                                          | Mac         |
| Microsoft Edge | Coming soon                                                                          | Windows     |

- The above browsers are recommended for use with enebular. Please contact support if an issue occurs such as something not displaying correctly or a function not working correctly.
- It has been found that enebular does not work properly when using some Chrome extensions. We recommend disabling unnecessary Chrome extensions when using enebular.

## enebular editor {#enebularEditor}

### Operating System {#EnebularEditorOperatingSystem}

The following operating systems are supported.

- Windows 10
- macOS v10.13

The middleware versions for each are as follows.

| OS           | [npm](https://github.com/npm/npm/releases) |
| ------------ | ------------------------------------------ |
| Windows 10   | 6.0 or later                               |
| macOS v10.13 | 6.0 or later                               |

## enebular-agent {#enebular-agent}

enebular-agent is IoT agent software for enebular and designed for Linux OS gateways. The environments are as follows.

For detailed specifications, please contact support (support@enebular.com).

### Recommended Hardware {#RecommendedHardware}

The enebular-agent runs on Linux.
The following are examples of recommended hardware for inexpensive gateway environments which run Linux.

| Product                | Version                                                                           | Remarks                                             |
| ---------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------- |
| Raspberry Pi 3 Model B | [Version 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) |                                                     |
| Raspberry Pi 4 Model B | [Version 4 Model B](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) | Supported enebular-agent version is 2.13.0 or later |

### Requirements {#Requirements}

- Network Interface (ethernet or Wireless network)
  - For Wireless network, IEEE802.11a/b/g etc is assumed, but anything where an IP network connection from Linux can be used.
- SD-Card
- RAM
- Flash Memory

### Operating System {#OperatingSystem}

The enebular-agent runs on [Debian GNU/Linux](https://www.debian.org/).
For the recommended Raspberry Pi hardware, use the Debian based [Raspbian OS](https://www.raspbian.org/).

#### Raspbian OS{#RaspbianOS}

The following operating systems are supported for use with Raspbian OS.

| enebular-agent versions | [Raspbian Buster base](https://downloads.raspberrypi.org/raspbian/images/raspbian-2019-09-30/) (10.0) | [Raspbian Stretch base](https://downloads.raspberrypi.org/raspbian/images/raspbian-2019-04-09/) (9.0) | [Raspbian Jessie base](https://downloads.raspberrypi.org/raspbian/images/raspbian-2017-07-05/) (8.0) |
| ----------------------- | :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
| 2.12.0 and later        |                                                   ○                                                   |                                                   ○                                                   |                                                  ×                                                   |
| 2.10.0 〜 2.11.0        |                                                   ×                                                   |                                                   ○                                                   |                                                  ×                                                   |
| 2.9.1 and earlier       |                                                   ×                                                   |                                                   ○                                                   |                                                  ○                                                   |

The middleware versions for each are as follows.

| enebular-agent versions | [Node.js](https://nodejs.org/ja/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
| ----------------------- | --------------------------------------------------: | -----------------------------------------: | --------------------------------------------------------: |
| 2.15.0 and later        |                                             12.18.1 |                                     6.14.5 |                                                     1.0.5 |
| 2.10.0 and later        |                                             12.14.0 |                                     6.13.4 |                                                    0.18.6 |
| 2.9.1 and earlier       |                                               9.2.1 |                                      5.5.1 |                                                    0.18.6 |

#### Debian GNU/Linux{#DebianGNULinux}

For Debian GNU/Linux, the following operating systems are supported.

| enebular-agent versions | [Debian GNU/Linux Buster](https://www.debian.org/releases/buster/) (10.0) | [Debian GNU/Linux 9 Stretch](https://www.debian.org/releases/stretch/) (9.0) | [Debian GNU/Linux 8 Jessie](https://www.debian.org/releases/jessie/) (8.0) |
| ----------------------- | :-----------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :------------------------------------------------------------------------: |
| 2.12.0 and later        |                                     ○                                     |                                      ○                                       |                                     ×                                      |
| 2.10.0 〜 2.11.0        |                                     ×                                     |                                      ○                                       |                                     ○                                      |
| 2.9.1 and earlier       |                                     ×                                     |                                      ○                                       |                                     ○                                      |

The middleware versions for each are as follows.

| enebular-agent versions | [Node.js](https://nodejs.org/ja/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
| ----------------------- | --------------------------------------------------: | -----------------------------------------: | --------------------------------------------------------: |
| 2.10.0 and later        |                                             12.14.0 |                                     6.13.4 |                                                    0.18.6 |
| 2.9.1 and earlier       |                                               9.2.1 |                                      5.5.1 |                                                    0.18.6 |  |

### Support enebular function

| -                                      | v2.3 | v2.4 | v2.5 | v2.6 | v2.7 | v2.8 | v.2.15+ |
| -------------------------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ------- |
| Flow Deploy\*1                         | ●    | ●    | ●    | ●    | ●    | ●    | ●       |
| File Deploy                            | ●    | ●    | ●    | ●    | ●    | ●    | ●       |
| AI-Model Deploy                        |      |      |      |      | ●    | ●    | ●       |
| Flow Start/Stop\*2                     |      |      |      |      | ●    | ●    | ●       |
| Flow (containing Private Nodes) deploy |      |      |      |      | ●    | ●    | ●       |

\*1 Flow Deploy scheduling is possible with v2.5 and above

\*2 Flow Start/Stop scheduling is possible with v2.8 and above

## enebular-edge-agent {#enebular-edge-agent}

enebular-edge-agent is IoT agent software for enebular and designed for microcontrollers utilizing [ARM Ltd.](https://www.arm.com/)'s [Mbed OS](https://os.mbed.com/).

For detailed specifications, please contact support (support@enebular.com).

### Operating Environment {#enebular-edge-agentOperatingEnvironment}

#### Operating System{#enebular-edge-agentOperatingSystem}

- [mbed OS 5.10.4](https://github.com/ARMmbed/mbed-os/releases/tag/mbed-os-5.10.4) (ARM Ltd.)

#### Hardware{#enebular-edge-agentHardware}

The following hardware is supported in enebular-edge-agent 1.1.0 and above (except for 1.2.2).

- [enebular Reference Board RAVEN](./../Board/RAVEN.md) (Uhuru Corporation)

The following hardware is supported in enebular-edg-agent 0.9.0 to 1.0.1 and 1.2.2 and above.

- ARM® Cortex™-M4 or higher, RAM: 256 KB or higher, Flash: 1 MB or higher microcontroller and wireless network enabled microcontroller board.

※ Please contact our support (support@enebular.com) for compatible microcontroller boards.

#### Communication{#enebular-edge-agentCommunication}

- IEEE 802.11 b/g/n (only 2.4GHz is supported for IEEE 802.11n)
- WPA/WPA2

### Support enebular function

| -                  | v1.3 | v1.4+ |
| ------------------ | ---- | ----- |
| Flow Deploy\*1     | ●    | ●     |
| Flow Start/Stop\*2 |      | ●     |

\*1 Flow Deploy scheduling is not supported

\*2 Flow Start/Stop scheduling is not supported

## enebular Reference Board Configuration Tool{#eRB-Config.Tool}

| OS         | CPU                    | Memory       | Other                 |
| ---------- | ---------------------- | ------------ | --------------------- |
| Windows 10 | Core i5 2.90GHz and up | 8.0GB and up | .NET Framework v4.6.1 |

## Enebular Infomotion Tool {#EnebularInfomotionTool}

The web browsers supported by enebular-infomotion-tool are as follows.

| Web Browser    | Version                                                                              | OS          |
| -------------- | ------------------------------------------------------------------------------------ | ----------- |
| Chrome         | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac |
| Firefox        | [57.0 or later](https://www.mozilla.com/firefox/releases/)                           | Windows/Mac |
| Safari         | Coming soon                                                                          | Mac         |
| Microsoft Edge | Coming soon                                                                          | Windows     |

### Npm Version {#NpmVersion}

nodejs >= 6 and npm 5.2+

### Possible Issues {#PossibleIssues}

If a permission error occur the following solutions may solve it.

1.  Give permission to current user to global node_modules in /usr/local/lib/ node_modules. Once persmission given retry global install. MacOSX: <https://support.apple.com/kb/PH25287?locale=en_US> Windows: <https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc754344(v=ws.11)>

2.  Install nvm to handle node and npm installations. (recommended) MacOSX: <https://github.com/creationix/nvm>
    Windows: <https://github.com/coreybutler/nvm-windows>

3.  Change npm's Default Directory <https://docs.npmjs.com/getting-started/fixing-npm-permissions> see Option Two.
