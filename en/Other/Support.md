---
lastUpdated: 2018-01-30
---

# Operating Environments

## enebular (Web Management Screen)

The web browsers supported by enebular are as follows.

| Web Browser | Version | OS |
| --- | --- | --- |
| Chrome | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac  |
| Firefox | [57.0 or later](https://www.mozilla.com/firefox/releases/) | Windows/Mac |
| Safari | 11.0 or later | Mac |
| Microsoft Edge | - | Windows |

The above browsers are recommended for use with enebular. Please contact support if an issue occurs such as something not displaying correctly or a function not working correctly.

## enebular-agent (Flow Execution Environment)

The supported device execution environments for deploying flows are as follows.

### Recommended Hardware

The enebular-agent runs on Linux.
The following are examples of recommended hardware for inexpensive gateway environments which run Linux.

| Product | Version  |
| --- | --- | 
| Raspberry PI3 Model B | [Version 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) |
| OpenBlocks | Support planned |

### Requirements

* Network Interface (ethernet or WiFi)
    * For WiFi, IEEE802.11a/b/g etc is assumed, but anything where an IP network connection from Linux can be used is OK.
* SD-Card
* RAM
* Flash Memory

## Operating System

The enebular-agent runs on [Debian GNU/Linux](https://www.debian.org/).
For the recommended Raspberry PI hardware, use the Debian based [Raspbian OS](https://www.raspbian.org/).

### Raspberry PI3

The following operating systems are supported for use with the Raspberry PI3.

- [Raspbian Stretch base](http://archive.raspbian.org/raspbian/dists/stretch/) (9.0)
- [Raspbian Jessie base](http://archive.raspbian.org/raspbian/dists/jessie/) (8.0)

The middleware versions for each are as follows.

|  | [Node.js](https://nodejs.org/en/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
| --- | --- | --- | --- |
| streach base (9.0) | 8.9.0 | 5.5.1 | 0.17.5 |
| jessie base (8.0) | 8.9.0 | 5.5.1 | 0.17.5 |

### Linux (VirtualBox)

For Linux, the following operating systems are supported.

* [Debian GNU/Linux 9 Stretch](https://www.debian.org/releases/stretch/)
* [Debian GNU/Linux 8 Jessie](https://www.debian.org/releases/jessie/)

The middleware versions for each are as follows.

|  | [Node.js](https://nodejs.org/en/download/releases/) | [npm](https://github.com/npm/npm/releases) | [Node-RED](https://github.com/node-red/node-red/releases) |
| --- | --- | --- | --- |
| Linux 9 Stretch | 9.2.1 | 5.6.0 | 0.17.5 |
| Linux 8 Jessie | 9.2.0 | 5.5.1 | 0.17.5 |
