# Getting Started

enebular gives users the option to deploy flows to enebular-edge-agent. Available for both editor on web and enebular editor (need to use desktop mode).

This tutorial is for RAVEN which is a reference board of enebular-edge-agent.

Through this step by step tutorial, you can run a flow that switches a USER LED light off and on, and view a deployment log on enebular. (Required time 30 minutes)

See [here](./../Board/RAVEN.md) to know RAVEN's hardware components. 

Please prepare accounts and projects in enebular in advance. (This flow is described in detail in GettingStarted> [Introduction](./../GetStarted/Introduction.md))

**\*Wireless LAN setting is currently available only from windows OS.**

## Table of Contents

1. [Wireless LAN Settings](#network)
1. [Create Flow](#import)
1. [Deploy Flow](#deployFlow)
1. [Check execution log](#logs)

## Setting up the wireless LAN {#network}

1. Connect to the PC's USB port using the enclosed USB cable.
1. **enebular Reference Board Configuration Tool**（**eRB Config. Tool**）click [Here](https://download.enebular.com/eRB-Config-Tool/eRBConfigTool.msi) to download and install.
1. Start the device in `configuration mode`. Press RESET SW and hold the USER SW after rebooting, it will be in 'settings mode'. Make sure the USER LED is lit in red.
    - See [here](./../Board/RAVEN.md#parts) to know USER SW, RESET SW and USER LED of RAVEN
1. **Configure the wireless LAN with eRB Config. Tool**. For details, see the [Configuration](./Configuration.md) page.
1. When settings is completed, restart the device.
1. The `USER LED` blinks on and off approximately every 0.1 seconds during connecting to a wireless LAN. *1
    - The `USER LED` turns off when it has established a wireless LAN connection.
    - If the `USER LED` continues to blink and RAVEN doesn't connect to a wireless LAN network, check below:
        - Is it available for the wireless LAN network environment?
        - Is the correct SSID and password set to RAVEN?

*1 It's available after the release enebular-edge-agent 1.3.0. Before the version , the `USER LED` remains turning off. See [here](./Configuration.md#version) to get enebular-edge-agent version.

### Create Flow{#import}

1. Create a new asset with `type: flow`.
      ![GettingStarted-create-asset](./../../img/EnebularEdgeAgent/GettingStarted-create-asset.png)

1. Press Edit Flow to open the Flow Editor.
      ![GettingStarted-create-editFlow](./../../img/EnebularEdgeAgent/GettingStarted-create-editFlow.png)

1. Open the menu from "Ξ" in the upper right and select "Import" > "Clipboard".
      ![GettingStarted-import-menu](./../../img/EnebularEdgeAgent/GettingStarted-import-menu.png)

1. Please copy the JSON data from the following and save it on the clipboard.

```json
[{"id":"5c08cdab.fe76c4","type":"inject","z":"90d9de00.d40e1","name":"","topic":"","payload":"","payloadType":"date","repeat":"3","crontab":"","once":false,"onceDelay":0.1,"x":110,"y":100,"wires":[["4c620395.fa935c"]]},{"id":"4c620395.fa935c","type":"switch","z":"90d9de00.d40e1","name":"","property":"led","propertyType":"flow","rules":[{"t":"true"},{"t":"else"}],"checkall":"true","repair":false,"outputs":2,"x":250,"y":100,"wires":[["9610c50d.5df558"],["36f9ebd9.df86c4"]]},{"id":"9610c50d.5df558","type":"digitalout","z":"90d9de00.d40e1","board":"RAVEN","pin":"ULED","value":"false","si":false,"name":"","x":420,"y":60,"wires":[["730feba8.5a1a24"]]},{"id":"36f9ebd9.df86c4","type":"digitalout","z":"90d9de00.d40e1","board":"RAVEN","pin":"ULED","value":"true","si":false,"name":"","x":420,"y":140,"wires":[["39806cf9.b31c54"]]},{"id":"730feba8.5a1a24","type":"change","z":"90d9de00.d40e1","name":"","rules":[{"t":"set","p":"led","pt":"flow","to":"false","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":590,"y":60,"wires":[[]]},{"id":"39806cf9.b31c54","type":"change","z":"90d9de00.d40e1","name":"","rules":[{"t":"set","p":"led","pt":"flow","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":590,"y":140,"wires":[[]]}]
```  
If you want to create a flow yourself, please refer to [Create flow](#createFlow) in the Appendix of this page.

1. A text box will appear displaying flow data. Paste the previous JSON data then Press the "Load" button.
      ![GettingStarted-import-paste](./../../img/EnebularEdgeAgent/GettingStarted-import-paste.png)

1. Since the flow is loaded, please click on the desired position and place the flow. Press Deploy at the top right.
      ![GettingStarted-import-done](./../../img/EnebularEdgeAgent/GettingStarted-import-done.png)

The flow in the editor is only a dummy and can't test the actual USER LED light.

- If you want to know flow's detail, please refer to [Flow Detail](#expalainFlow) in the Appendix of this page.

## Deploy flow {#deployFlow}

Before continuing, turn the device on by using a the USB port. See [here](./../Board/RAVEN.md#parts) about USB port of RAVEN.  

1. Go to your flow overview screen and press "DeployFlow". (If a preview is not displayed, please reload the page.)
      ![GettingStarted-deploy-button](./../../img/EnebularEdgeAgent/GettingStarted-deploy-button.png)

1. Select the connection you requested when you purchased. (You didn't request it will be `raven`.)  
Please contact **support@enebular.com** if you can't find out your connection.  
      ![GettingStarted-deploy-connection](./../../img/EnebularEdgeAgent/GettingStarted-deploy-connection.png)

1. Find out your RAVEN on the `Endpoint Name`. It is printed as a barcode on the back of your RAVEN.  
Scroll down and press Deploy.
      ![GettingStarted-deploy-execute](./../../img/EnebularEdgeAgent/GettingStarted-deploy-execute.png)

1. The deployment is complete and the USER LED should start blinking.  
      ![GettingStarted-deploy-done](./../../img/EnebularEdgeAgent/GettingStarted-deploy-done.png)


## Confirmation of execution log {#logs}

You can check enebular eedge agent's execution log from enebular.com
The log is transmitted first in 30 seconds after device startup, and then every 5 minutes thereafter.

1. Select `Device List` from the Project screen.
      ![GettingStarted-logs-project](./../../img/EnebularEdgeAgent/GettingStarted-logs-project.png)

1. Select your connection.   
      ![GettingStarted-logs-connection](./../../img/EnebularEdgeAgent/GettingStarted-logs-connection.png)

1. The Device List will be displayed. Press log-icon of the device whose log you want to view.
      ![GettingStarted-logs-deciceList](./../../img/EnebularEdgeAgent/GettingStarted-logs-deviceList.png)

1. The execution log is displayed.
      ![GettingStarted-logs-done](./../../img/EnebularEdgeAgent/GettingStarted-logs-done.png)

For more information, see [Logs](./../Device/Logs.md#enebular-edge-agent).

## Well Done!

You can now deploy USER LED blinking flow to enebular-edge-agent and check the logs from enebular.

By combining the enebular-edge-agent with a commercially available Grove sensor, anyone can make simple IoT devices.
Since there are restrictions on the nodes that can be used, please refer to the page of [Nodes](./Nodes.md) and create a flow.

## Appendix

### FlowDetail{#explainFlow}

![GettingStarted-import-done](./../../img/EnebularEdgeAgent/GettingStarted-import-done.png)

This flow executes in 5 second cycle.

In `Digitalout Node` cannot see the state of USER LED.
So, this node uses `Flow Context` in `Change Node`.
`Flow Context` is different from `msg`. This value remains after flow executing.

`Digitalout Node` lights up USER LED and `Change Node` saves state of USER LED. 
When flow execute next time, it changes flow operation by state of USER LED

### Create a Flow {#createFlow}

This section assumes that the project has already been created in enebular.

- This tutorial introduces the procedure of creating flows used in import.

1.  Create a new asset with `type: flow`.
    ![GettingStarted-create-asset](./../../img/EnebularEdgeAgent/GettingStarted-create-asset.png)

1.  Press Edit Flow to open the Flow Editor.
    ![GettingStarted-create-editFlow](./../../img/EnebularEdgeAgent/GettingStarted-create-editFlow.png)

1.  Refer to the image below for node placement.
    ![GettingStarted-create-putNodes](./../../img/EnebularEdgeAgent/GettingStarted-create-putNodes-en.png)
    The following nodes are used. The digitalout node is in the EEA category.

        	- inject
        	- switch
        	- digitalout 2
        	- change 2

1) Make inject node ① "repeat" the `specified time interval` and set the 'time interval' to `3 seconds` and press "Finish". ![GettingStarted-create-inject](./../../img/EnebularEdgeAgent/GettingStarted-create-inject-en.png)

1) Switch node ② sets "property" to `flow.led` and condition 1 to`is true`.
   ![GettingStarted-create-switch](./../../img/EnebularEdgeAgent/GettingStarted-create-switch-en.png)

1) Press the lower left corner! [+ Add](./../../img/EnebularEdgeAgent/GettingStarted-create-add.png) to add the condition. Please set condition 2 to `other` and press "Finish".
   ![GettingStarted-create-switchAddRule](./../../img/EnebularEdgeAgent/GettingStarted-create-switchAddRule-en.png)

1) Set digitalout node ③ to `RAVEN`, set 'Pin' to`USER LED` and 'Value' to `false` and press "Finish".
   ![GettingStarted-create-digitalout1](./../../img/EnebularEdgeAgent/GettingStarted-create-digitalout1-en.png)

1. Change node ④ should be set to substitute 'false' for `flow.led`. Press "Finish".
   ![GettingStarted-create-change1](./../../img/EnebularEdgeAgent/GettingStarted-create-change1-en.png)

1. Set digitalout node ⑤ to 'RAVEN`for' Board ', set`Pin' to`USER LED` and 'Value' to `true` then press "Finish".
   ![GettingStarted-create-digitalout2](./../../img/EnebularEdgeAgent/GettingStarted-create-digitalout2-en.png)

1. Change node ⑥ should be set to substitute "false"> `false` for`flow.led` then press "Finish".
   ![GettingStarted-create-change2](./../../img/EnebularEdgeAgent/GettingStarted-create-change2-en.png)

1. Since one mouth has been added to the right side of the switch node ②, change the link of the digitalout node ⑤ there and press Deploy on the upper right.
   ![GettingStarted-create-switchOut](./../../img/EnebularEdgeAgent/GettingStarted-create-switchOut-en.png)

We have created a flow to complete the enebular-edge-agent. Continue the tutorial from [Deploy Flow](#deployFlow).
The editor contains a dummy flow therefore can not check the blinking of the USER LED.
