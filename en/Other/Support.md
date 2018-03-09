---
lastUpdated: 2018-01-31
---

# Operating Environments

## enebular {#enebular}

The web browsers supported by enebular are as follows.

| Web Browser | Version | OS |
| --- | --- | --- |
| Chrome | [63.0 or later](https://chromereleases.googleblog.com/search/label/Desktop%20Update) | Windows/Mac  |
| Firefox | [57.0 or later](https://www.mozilla.com/firefox/releases/) | Windows/Mac |
| Safari | Coming soon | Mac |
| Microsoft Edge | Coming soon | Windows |

The above browsers are recommended for use with enebular. Please contact support if an issue occurs such as something not displaying correctly or a function not working correctly.

## enebular-agent {#enebular-agent}

enebular-agent is IoT agent software for enebular and designed for Linux OS gateways. The environments are as follows.

For detailed specifications, please contact support (support@enebular.com).

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

## enebular-edge-agent {#enebular-edge-agent}

enebular-edge-agent is IoT agent software for enebular and designed for microcontrollers utilizing [ARM Ltd.](https://www.arm.com/)'s [Mbed OS](https://os.mbed.com/).

For detailed specifications, please contact support (support@enebular.com).

### Operating Environment

#### Operating System

* [Mbed OS 5.6.6](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.6.6) (ARM Ltd.)

#### Hardware

The following hardware is supported in enebular-edge-agent 0.9.1.

* [FRDM-K64F](https://www.nxp.com/products/processors-and-microcontrollers/arm-based-processors-and-mcus/kinetis-cortex-m-mcus/k-seriesperformancem4/k2x-usb/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (only 2.4GHz is supported for IEEE 802.11n)
* WPA/WPA2

### Known Issues

* When using a BME280 node, it may not operate correctly if the flow size is large.
* An Inject node can set only a Timestamp for the Payload and Repetition of the Interval.
* Excessive deployment within a span of one minute may cause failure of flow initialization.
    * The device will stop in case of a flow initialization failure. To resolve this, reboot the device by pressing the reset button.