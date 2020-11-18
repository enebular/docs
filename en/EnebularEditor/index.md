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

For editing flows on linux devices (i.e. Raspberry Pi) with enebular-agent 2.3.0 and above installed.
Certain nodes such as Raspberry Pi sensor nodes only work on devices. Since Desktop mode does not support such nodes, Remote mode is required to correctly load such nodes

A valid AwS IoT / Pelion Device Management connection is required
For Pelion Device Management.

The enebular editor remotely opens the `enebular-agent` flow editor. For more information on the remote mode of enebular editor, see [Load flow in remote mode](../EnebularAgent/Developer-Mode.md).

When connecting the enebular editor to the enebular-agent, the enebular-agent must be running in developer mode.

## Requirements {#Requirements}

- An available enebular account
- Your PC must be connected to network
- [Node 12.18.1 LTS](https://nodejs.org/en/)

## How to install {#How to install}

### For Windows {#For Windows}

1. Download [installer](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/win/enebular+editor+Setup+1.0.2.exe)

1. Run the installer

### For Mac {#For Mac}

1. Download [installer](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/mac/enebular+editor-1.0.2.dmg)

1. Run the installer

## How to uninstall {#How to uninstall}

### For Windows

1. Click **Start** button then go to **Settings**.
1. Click **Apps**.
1. Select **enebular editor**.
1. Click **Uninstall**.

### For Mac

1. Open Application on Finder.
1. Find and right-click on enebular editor.
1. Click Move to Trash on the menu.
