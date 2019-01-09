---
lastUpdated: 2018-11-29
---

# enebular editor {#enebular editor}

## Overview {#Overview}

The enebular editor is a tool for your PC(Win/Mac) to edit and deploy flows to: `AWS IoT`, `Pelion Device Management`, `AWS Lambda`, `Heroku`

## Modes {#Modes}

The enebular editor has 2 modes: `Desktop`, `Remote`.

### Desktop {#Desktop}

For editing flows where node support is limited to nodes that can interact with PC/Browser APIs.
enebular editor loads the flow from the app itself.

Desktop Mode runs on port `1888`.

### Remote {#Remote}

For editing flows on linux devices (i.e. Raspberry Pi) with [enebular-runtime-agent 2.3.0](https://github.com/enebular/enebular-runtime-agent/releases) and above installed.
Certain nodes such as Raspberry Pi sensor nodes only work on devices. Since Desktop mode does not support such nodes, Remote mode is required to correctly load such nodes.
A valid AwS IoT / Pelion Device Management connection is required
For Pelion Device Management, [enebular-runtime-agent-cloud-connector 2.3.0](https://github.com/enebular/enebular-runtime-agent-mbed-cloud-connector/releases) is required
**enebular editor** loads the flow editor from **enebular-runtime-agent** remotely

## Requirements {#Requirements}

- An available enebular account
- Your PC must be connected to network
- [Node 10.14.2 LTS](https://nodejs.org/en/)

## How to install {#How to install}

### For Windows {#For Windows}

1. Download [installer](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/win/enebular+editor+Setup+0.9.0.exe).

1. Run the installer

### For Mac {#For Mac}

1. Download [installer](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/mac/enebular+editor-0.9.0.dmg).

1. Run the installer

1. Run **enebular editor**.
