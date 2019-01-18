---
lastUpdated: 2019-01-11
---

# Operating Environments {#Operating Environments}

## enebular {#enebular}

The web browsers supported by enebular are as follows.

| Web Browser    | Version                                                                              | OS          |
| -------------- | ------------------------------------------------------------------------------------ | ----------- |
| Chrome         | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac |
| Firefox        | [57.0 or later](https://www.mozilla.com/firefox/releases/)                           | Windows/Mac |
| Safari         | Coming soon                                                                          | Mac         |
| Microsoft Edge | Coming soon                                                                          | Windows     |

The above browsers are recommended for use with enebular. Please contact support if an issue occurs such as something not displaying correctly or a function not working correctly.

## enebular-agent {#enebular-agent}

enebular-agent is IoT agent software for enebular and designed for Linux OS gateways. The environments are as follows.

For detailed specifications, please contact support (support@enebular.com).

### Recommended Hardware {#Recommended Hardware}

The enebular-agent runs on Linux.
The following are examples of recommended hardware for inexpensive gateway environments which run Linux.

| Product               | Version                                                                           |
| --------------------- | --------------------------------------------------------------------------------- |
| Raspberry PI3 Model B | [Version 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) |
| OpenBlocks            | Coming soon                                                                       |

### Requirements {#Requirements}

- Network Interface (ethernet or WiFi)
  - For WiFi, IEEE802.11a/b/g etc is assumed, but anything where an IP network connection from Linux can be used is OK.
- SD-Card
- RAM
- Flash Memory

### Operating System {#Operating System}

The enebular-agent runs on [Debian GNU/Linux](https://www.debian.org/).
For the recommended Raspberry PI hardware, use the Debian based [Raspbian OS](https://www.raspbian.org/).

#### Raspberry PI3

The following operating systems are supported for use with the Raspberry PI3.

- [Raspbian Stretch base](https://archive.raspbian.org/raspbian/dists/stretch/) (9.0)
- [Raspbian Jessie base](https://archive.raspbian.org/raspbian/dists/jessie/) (8.0)

The middleware versions for each are as follows.

|                    | [Node.js](https://nodejs.org/en/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
| ------------------ | --------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------- |
| streach base (9.0) | 9.2.1                                               | 5.5.1                                      | 0.18.6                                                    |
| jessie base (8.0)  | 9.2.1                                               | 5.5.1                                      | 0.18.6                                                    |

#### Linux (VirtualBox)

For Linux, the following operating systems are supported.

- [Debian GNU/Linux 9 Stretch](https://www.debian.org/releases/stretch/)
- [Debian GNU/Linux 8 Jessie](https://www.debian.org/releases/jessie/)

The middleware versions for each are as follows.

|                 | [Node.js](https://nodejs.org/en/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
| --------------- | --------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------- |
| Linux 9 Stretch | 9.2.1                                               | 5.5.1                                      | 0.18.6                                                    |
| Linux 8 Jessie  | 9.2.1                                               | 5.5.1                                      | 0.18.6                                                    |

## enebular-edge-agent {#enebular-edge-agent}

enebular-edge-agent is IoT agent software for enebular and designed for microcontrollers utilizing [ARM Ltd.](https://www.arm.com/)'s [Mbed OS](https://os.mbed.com/).

For detailed specifications, please contact support (support@enebular.com).

### Operating Environment {#Operating Environment}

#### Operating System

- [mbed OS 5.10.4](https://github.com/ARMmbed/mbed-os/releases/tag/mbed-os-5.10.4) (ARM Ltd.)

#### Hardware

The following hardware is supported in enebular-edge-agent 1.1.0.

* [enebular Reference Board RAVEN](./../Board/RAVEN.md) (Uhuru Corporation)

#### Communication

- IEEE 802.11 b/g/n (only 2.4GHz is supported for IEEE 802.11n)
- WPA/WPA2

### Known Issues {#Known Issues}

* When Wi-Fi is disconnected, in rare cases, even if the Wi-Fi environment recovers, it may remain disconnected and communications may not be restored
    * Restart to recover 

## enebular Reference Board Configuration Tool{#eRB-Config.Tool}

| OS | CPU | Memory | Other |
| --- | --- | --- | --- |
| Windows 10 | Core i5 2.90GHz and up | 8.0GB and up | .NET Framework v4.6.1 |


## Enebular Infomotion Tool {#Enebular Infomotion Tool}

The web browsers supported by enebular-infomotion-tool are as follows.

| Web Browser    | Version                                                                              | OS          |
| -------------- | ------------------------------------------------------------------------------------ | ----------- |
| Chrome         | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac |
| Firefox        | [57.0 or later](https://www.mozilla.com/firefox/releases/)                           | Windows/Mac |
| Safari         | Coming soon                                                                          | Mac         |
| Microsoft Edge | Coming soon                                                                          | Windows     |

### Npm Version {#Npm Version}

nodejs >= 6 and npm 5.2+

### Possible Issues {#Possible Issues}

If a permission error occur the following solutions may solve it.

1. Give permission to current user to global node_modules in /usr/local/lib/ node_modules. Once persmission given retry global install. MacOSX: https://support.apple.com/kb/PH25287?locale=en_US Windows: https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc754344(v=ws.11)

2. Install nvm to handle node and npm installations. (recommended) MacOSX: https://github.com/creationix/nvm
   Windows: https://github.com/coreybutler/nvm-windows

3. Change npm's Default Directory https://docs.npmjs.com/getting-started/fixing-npm-permissions see Option Two.
