---
lastUpdated: 2018-10-29
---

###Create a Flow 

The Pubnub datastore will be used to push data to. 
At your enebular project create a new Flow. 

![CreateFlow-createFlow](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-createFlow.png)

Click the `Edit Flow` button 

![CreateFlow-flow](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-flow.png)


In the flow editor arrange the nodes as follows. 
inject -> function -> pubnub(in) 
pubnub(out) -> debug 

![CreateFlow-flow](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-flow.png)

Double click the function node to open the `edit function node` modal. 

Use the following script as the Function.

```javascript
var data = {
	ts:Date.now(),
	category:['A','B','C','D'][Math.floor(Math.random()*4)],
    value: Math.floor(Math.random()*10)
}

msg.payload = data; 
return msg;
```

![CreateFlow-functionNode](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-functionNode.png)

For the pubnub out node you will need to inseart your 
pubnub keys from your pubnub project app. Click on the pencil icon to edit keys. 

![CreateFlow-pubnubOutNode](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-pubnubOutNode.png)

Copy the publish and subscribe key from your pubnub app. 
Then click on update. 

![CreateFlow-pubnubOutNodeKeys](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-pubnubOutNodeKeys.png)


For this example use "test" as the channel to push data to. Click done to continue. 

![CreateFlow-pubnubOutNodeComplete](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-pubnubOutNodeComplete.png)


Set the pubnub in node with the same keys as the out node. 

![CreateFlow-pubnubInNodeComplete](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-pubnubInNodeComplete.png)


Click on the pencil icon to enter pubnub keys to update keys. 

![CreateFlow-pubnubInNodeKeys](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-pubnubInNodeKeys.png)

Double click the inject/timestamp and set `repeat` to `interval` for every 5 seconds. 
Click done to set the node. 

![CreateFlow-injectNode](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-injectNode.png)


Now with all nodes ready click Deploy to execute the nodes.

If you can see data being logged in debug then the nodes are executing correctly.

![CreateFlow-debug](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-debug.png)
