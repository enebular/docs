###Create a Milkcocoa Flow 

In the flow editor arrange the nodes as follows. 

Inject -> function -> milkcocoa(output) -> debug 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/flow.png)

Double click the function node to open the `edit function node` modal. 
Use the following script as the Function

```javascript
var data = {
    country:['JP','USA','CN'][Math.floor(Math.random()*3)],
    value: Math.floor(Math.random()*10),
    created:Date.now()
}

msg.payload = data; 
return msg;
```

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/function-node.png)


Next double click the Milkcocoa node to open the `edit milkcocoa out node`. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/edit-milkcocoa-node.png) 

Click on the pencil icon and enter the `app_id` of your milkcocoa project. 
You can leave `API Key` and `API Secret` empty for this simple example and 
click `add` to set it. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/set-app-id.png) 


Set the `Data Store` to "test" and `operation` to Push then click done to set the node. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/milkcocoa-node-settings.png) 


Double click the inject/timestamp and set `repeat` to `interval` for every 5 seconds. 
Click done to set the node. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/timestamp-node.png) 


Now with all nodes ready click `Deploy` to execute the nodes. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/deploybutton.png) 


If you can see data being logged in `debug` then the nodes are executing correctly. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/debug-log.png) 

You can also double check by going to mlkcca.com  and checking your projects datastore.
Search the store name and click `リスト表示（更新）` to refresh the store list. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/store.png) 