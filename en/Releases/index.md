---
lastUpdated: 2018-10-12
---

# enebular Release Notes {#enebular}

## Latest Release - 2.5.1 (October 12th, 2018)

## New

N/A

## Fixed

- Credential information and Connection information of the Flows stored in the database inside enebular have been encrypted.
- Fixed the issue which prevented filters in InfoMotion page from functioning.
- License Manager shows an error message when the user attempts to reserve a license using misconfigured connection. The issue that caused this error message to remain even after closing and reopening the form　has been fixed.
- Fixed the issue which caused enebular to show error messages after the user transfers the project's ownership to a different user instead of going back to the dashboard.
- Fixed the issue which caused the project to remain in the user's project list in the dashboard even after its owner excluded him/her from the project.
- Fixed the issue which required the user to refresh the dashboard in order to see the changes made to the assets' access privileges.
- A modification was made to show the English version of the Privacy Policy when the user opens the sign-in page with a browser configured English as its primary language.

## Changed

N/A

## Known Issues

- Opening the flow editor from a web browser shows Japanese texts even if the browser is configured to show English
- The shared page with InfoMotion embedded, the filter function can not be used

### Release History

- [2.5.1](./enebular/2.5.1.md) (October 12th, 2018)
- [2.5.0](./enebular/2.5.0.md) (September 25th, 2018)
- [2.4.4](./enebular/2.4.4.md) (September 7th, 2018)
- [2.4.3](./enebular/2.4.3.md) (August 20th, 2018)
- [2.4.2](./enebular/2.4.2.md) (August 10th, 2018)
- [2.4.1](./enebular/2.4.1.md) (August 3rd, 2018)
- [2.4.0](./enebular/2.4.0.md) (July 19th, 2018)
- [2.3.1](./enebular/2.3.1.md) (July 11th, 2018)
- [2.3.0](./enebular/2.3.0.md) (July 6th, 2018)
- [2.2.1](./enebular/2.2.1.md) (June 7th, 2018)
- [2.2.0](./enebular/2.2.0.md) (May 23rd, 2018)
- [2.1.2](./enebular/2.1.2.md) (April 16th, 2018)
- [2.1.1](./enebular/2.1.1.md) (April 3rd, 2018)
- [2.1.0](./enebular/2.1.0.md) (March 30th, 2018)
- [2.0.1](./enebular/2.0.1.md) (March 1st, 2018)
- [2.0.0](./enebular/2.0.0.md) (Jan 30th, 2018)

---

# enebular agent Release Notes {#enebular-agent}

## Latest Release - 2.2.0 (September 7th, 2018)

### New

- Added a one-step [install script](https://github.com/enebular/enebular-runtime-agent/blob/master/tools/install/README.md) for quick and easy setup of enebular-agent
- Added a tool to support simple AWS IoT Thing creation and setup
- Added ability to do simple startup registration to have enebular-agent start at boot-time on Debian (systemd) based systems
- Added ability to list all supported configuration options
- Added support for command line options in order to allow use of the new configuration options and subcommands

### Fixed

- Fixed an issue that caused enebular to report the connection status of AWS-IoT-connected enebular agent as "Connected" regardless of the *actual* connection status of the agent.
- Minor fix to enebular logging upload size handling
- mbed-cloud-connector
    - Add missing files that prevented it from being built
    - Removed invalid characters from readme

### Changed

- Updated the Node-RED version to 0.18.x
- Updates to allow better connection status tracking on AWS IoT
- Improved daemon usage support (syslog logging and process termination support)
- Improved process management (startup and shutdown) of the Node-RED instance
- Added quick setup explanation and further manual setup details to the readme files
- Added integration tests

### Known Issues

 N/A

### Recommended Hardware
The recommended hardware is as follows.
* Raspberry PI3 Model B

### Operating Environment

The recommended operating environments are as follows.

#### Raspberry PI3 Model B

##### Raspbian Stretch base (9.0)
* nodejs 8.9.0
* npm 5.5.1
* node-red 0.17.5

#### Raspbian Jessie base (8.0)
* nodejs 8.9.0
* npm 5.5.1
* node-red 0.17.5

#### Linux (VirtualBox)

##### Debian Jessie (8.9)
* nodejs 9.2.0
* npm 5.5.1
* node-red 0.17.5

##### Debian Stretch (9.1)
* nodejs 9.2.1
* npm 5.6.0
* node-red 0.17.5

## Release History

- [2.2.0](./enebular-agent/2.2.0.md) (Sept 7th, 2018)
- [2.1.0](./enebular-agent/2.1.0.md) (June 7th, 2018)
- [2.0.0](./enebular-agent/2.0.0.md) (Jan 30th, 2018)

---

# enebular edge agent Release Notes {#enebular-edge-agent}

## Latest Release - 1.0.1 (June 7th, 2018)

In 1.0.1 release, Updated Mbed Cloud Client to 1.3.1.1 General Availability (GA).

## New
N/A

## Fixed
* Network disconnected when running an agent for an extended period of time. This was due to the Wi-Fi module taking full control of the communication processing. Issue solved by updating Wi-Fi module's library.

## Changed
* Updated Mbed Cloud Client to 1.3.1.1 General Availability (GA)

## Known Issues

* * A BME280 node may not operate correctly if the flow size is too large.
* An inject node can set only a Timestamp for the Payload and Repetition of the Interval.

### Operating Environment

#### Operating System

* [Mbed OS 5.8.2](https://github.com/ARMmbed/mbed-os/tree/mbed-os-5.8.2) (ARM Ltd.)

#### Hardware

The following hardware is supported in enebular-edge-agent 1.0.1.

* [FRDM-K64F](https://www.nxp.com/products/processors-and-microcontrollers/arm-based-processors-and-mcus/kinetis-cortex-m-mcus/k-seriesperformancem4/k2x-usb/freedom-development-platform-for-kinetis-k64-k63-and-k24-mcus:FRDM-K64F) (NXP Semiconductors N.V.) + Stag Beetle Board (Uhuru Corporation)

#### Communication

* IEEE 802.11 b/g/n (only 2.4GHz is supported for IEEE 802.11n)
* WPA/WPA2

## Release History

* [1.0.1](./enebular-edge-agent/1.0.1.md) (June 7th, 2018)
* [1.0.0](./enebular-edge-agent/1.0.0.md) (May 18th, 2018)
* [0.10.0](./enebular-edge-agent/0.10.0.md) (Apr 27th, 2018)
* [0.9.1](./enebular-edge-agent/0.9.1.md) (Feb 28th, 2018)
* [0.9.0](./enebular-edge-agent/0.9.0.md) (Jan 30th, 2018)
