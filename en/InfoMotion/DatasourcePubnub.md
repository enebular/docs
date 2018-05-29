---
lastUpdated: 2018-04-13
---

# Creating a Pubnub DataSource 

In this section a Pubnub DataSource will be created. 
Enebular flow editor will be used to push data to the DataSource. 

###Registration

Register at https://www.pubnub.com/.
Once you are registered and logged in at the main dashboard click on create a new app. 

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-app-list.png) 

Create the application. 

![](/_asset/images/InfoMotion/datasources/pubnub/create-app.png) 

The new application will be added to the list. 

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-new-app-list.png) 


Click on the new project.

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-dashboard.png) 


Pubnub offers by default Demo Keyset. 
We will need these keys to push data to a datastore. 
Click on the Demo Keyset to view the keys. 

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-keys.png) 


Data pushed to Pubnub will have to be saved. 
In the Demo Keyset scroll down to storage and playback.  
Turn the switch on and set the Retention to 1 day or more. Make sure you click on save to set this settings.  

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-storage-playback.png) 


###Create a Flow 

The Pubnub datastore will be used to push data to. 
At your enebular project create a new Flow. 

![](/_asset/images/InfoMotion/datasources/pubnub/create-flow.png)

Click the `Edit Flow` button 

![](/_asset/images/InfoMotion/datasources/pubnub/edit-flow.png)


In the flow editor arrange the nodes as follows. 
inject -> function -> pubnub(in) 
pubnub(out) -> debug 

![](/_asset/images/InfoMotion/datasources/pubnub/flow.png)

Double click the function node to open the `edit function node` modal. 

Use the following script as the Function.

```javascript
var data = {
	value:{
    country:['JP','USA','CN'][Math.floor(Math.random()*3)],
    value: Math.floor(Math.random()*10),
    created:Date.now()
	},
	timestamp:Date.now()
}

msg.payload = data; 
return msg;
```

![](/_asset/images/InfoMotion/datasources/pubnub/function-node.png)

For the pubnub out node you will need to inseart your 
pubnub keys from your pubnub project app. Click on the pencil icon to edit keys. 

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-out-node.png)

Copy the publish and subscribe key from your pubnub app. 
Then click on update. 

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-out-node-keys.png)


For this example use "test" as the channel to push data to. Click done to continue. 

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-out-node-complete.png)


Set the pubnub in node with the same keys as the out node. 

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-in-node-complete.png)


Click on the pencil icon to enter pubnub keys to update keys. 

![](/_asset/images/InfoMotion/datasources/pubnub/pubnub-in-node-keys.png)

Double click the inject/timestamp and set `repeat` to `interval` for every 5 seconds. 
Click done to set the node. 

![](/_asset/images/InfoMotion/datasources/pubnub/timestamp-node.png) 


Now with all nodes ready click Deploy to execute the nodes.

If you can see data being logged in debug then the nodes are executing correctly.

![](/_asset/images/InfoMotion/datasources/pubnub/debug.png) 


###Create a Data Source 

In the same enebular project click `Data Source` and the plus button to add a 
`Data Source`. 

![](/_asset/images/InfoMotion/datasources/pubnub/datasource.png) 


Set the `title` as you like. The `Publish` and `Subscribe` keys are required fields. 
The `channel` should be set to "test". `Publish` and `Subscribe` from your pubnub app. 
Leave count to 100 for now then click save to continue. 

![](/_asset/images/InfoMotion/datasources/pubnub/settings.png) 


Now your Data Source is ready to be used on an infotype see 
[Sample infotypes](./SampleInfoTypes.md) to downoad a graph, 
[Upload an InfoType](./UploadInfoType.md) to upload a graph to enebular, 
and [CreateInfoMotion](/.CreateInfoMotion.md) to create an InfoMotion dashboard. 
