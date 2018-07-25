###Create a Pubnub Flow 

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