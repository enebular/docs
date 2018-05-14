---
lastUpdated: 2018-04-11
---

# License Manager

The License Manager allows you to purchase Licenses that are required to monitor the **logs** and **status** of devices deployed to AWS IoT. This feature is current only supported for Enterprise Plan. Please contact **sales@uhuru.jp** for more info.

Setting up enebular-agent is a prerequisite to getting started. The agent can be downloaded from <a href="https://github.com/enebular/enebular-runtime-agent" target="_blank">GitHub</a>. More info can be found [here](../Deploy/DeployFlow/AWSIoT/index.md).

## License Phases

A License has 4 types of status.

1.  Issued
2.  Registered
3.  Reserved
4.  Deleted

## Issuing a License

On the top right, click on the Purchase button. Currently you can only select Device Monitoring for the License Type. 1 License can only be used with 1 device, so if you want to monitor 4 devices, choose 4 Licenses.

Once you have purchased a License you will receive a License key. The status of the License will be **issued**.

## Registering a License

When the status of a License is **issued**, you can **register** it to a Device. Registering a License activates the monitoring capabilities.

Click on an **issued** License, to register a License. Similar to [deploying a flow](../Deploy/index.md), you choose a connection you created from for example AWS IoT. Select a device to register the License. Your device with enebular-agent running does not have to be turned on to register. Once registered, your License status will become **registered**.

If your device was turned off when registering, just turn it on to activate monitoring. If your device was turned on when registering, your device will automatically activate monitoring.

## Reserving a License

This feature is only using for installation enebular edge agent.
On the top right, click on the Reserve button. Purchasing License is a prerequisite to reserve it.
Once reserved, your License status will become **reserved**.

## Deleting a License

From License Manager, if a License's status is **registered**, you can click on the **unsubcribe** button to delete the License. When you delete a License the License's relationship with the device you registered to is removed, which means you lose monitoring capabilities. It is not possible to re-register a License.

## Monitoring

**Logs** and **Status** of the device can be monitored. It can be viewed under **Device List** from the sidebar.

The device **logs** several things in AWS IoT's case.

1.  The logs from Node-Red. This includes the console log from the **debug** node. Make sure to check the option, **debug tab and console**.
2.  Logs from enebular-agent itself

**Status** shows if the device is **connected** or **disconnected**.
