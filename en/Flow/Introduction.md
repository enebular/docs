---
lastUpdated: 2018-01-24
---

# Flows

Flows are a feature of enebular where you use the Flow Editor based on the <a href="https://nodered.jp/" target="_blank">Node-RED</a> tool (which is designed to connect hardware, APIs and online services) to process data in order to make the DataSource suitable for use with InfoMotion. Flows can also be utilized for uses outside of processing DataSource data.

![](/_asset/images/enebular-developers-aboutflow.png)

Note that as shown in the image below, while it is possible to deploy flows within Node-RED, here the purpose of this is to save the flow, and when doing this the flow execution will stop after a few minutes.

![](https://i.gyazo.com/bfb9c0e25ad5e4a372a149336bdef8b8.png)

To have the flow run for an extended period of time, it must be [deployed to another service](../Deploy/index.md).

[Created flows](./CreateFlow.md) can be checked on enebular.

![](https://i.gyazo.com/df15e18b0f61680b23773a7d8ca4ae6c.png)

Selecting a flow will take you to the flow details screen.

![](https://i.gyazo.com/7cb9b53259022696e7cc47e4fa81d89b.png)

## Overview

You can edit the flow information and publish flows from the overview. The flow information is useful as an aid for users to understand what kind of flow it is once it has been published, so we recommend providing as much information as possible.

![](https://i.gyazo.com/7cb9b53259022696e7cc47e4fa81d89b.png)

Please see [Publish Flow](./PublishFlow.md) for details on publishing flows.

## Deploy

You can deploy flows to specific services here.

![](https://i.gyazo.com/176869beb11cdec73fe02c8c09c4288f.png)

Please see [Deploying](../Deploy/index.md) for detailed information on deploying.

## Devices

You can see a list of devices that have been deployed to with external services here.

![](https://i.gyazo.com/9f26dd5fa222389b4b90cb2eea5a1df7.png)

## Access

You can edit flow access permissions here.

![](https://i.gyazo.com/6b4babe394ae110c62ba181718849c0b.png)

Please see [Access Control](../Access/index.md) for more details.

## Settings

You can change the name and description of the flow and delete the flow here.

![](https://i.gyazo.com/9e8637beeeb0d53009f4eb71d046291a.png)
