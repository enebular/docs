---
lastUpdated: 2018-08-09
---

###Create a Flow  {#Create a Flow}

The Milkcocoa datastore will be used to push data.
At your enebular project create a new Flow. 

![CreateFlow-createFlow](./../../../../img/InfoMotion/DataSource/Milkcocoa-v2/CreateFlow-createFlow.png)

Click the `Edit Flow` button 

In the flow editor arrange the nodes as follows. 

Inject -> function -> milkcocoa(output) -> debug 

![CreateFlow-flow](./../../../../img/InfoMotion/DataSource/Milkcocoa-v2/CreateFlow-flow.png)

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

![CreateFlow-functionNode](./../../../../img/InfoMotion/DataSource/Milkcocoa-v2/CreateFlow-functionNode.png)


Next double click the Milkcocoa node to open the `edit milkcocoa out node`. 

![CreateFlow-milkcocoaSettingNode](./../../../../img/InfoMotion/DataSource/Milkcocoa-v2/CreateFlow-milkcocoaSettingNode.png)

Click on the pencil icon and enter the `app_id` of your milkcocoa project. 
You can leave `API Key` and `API Secret` empty for this simple example and 
click `add` to set it. 

![CreateFlow-setAppId](./../../../../img/InfoMotion/DataSource/Milkcocoa-v2/CreateFlow-setAppId.png)


Set the `Data Store` to "test" and `operation` to Push then click done to set the node. 

![CreateFlow-milkcocoaNode](./../../../../img/InfoMotion/DataSource/Milkcocoa-v2/CreateFlow-milkcocoaNode.png)


Double click the inject/timestamp and set `repeat` to `interval` for every 5 seconds. 
Click done to set the node. 

![CreateFlow-injectNode](./../../../../img/InfoMotion/DataSource/Milkcocoa-v2/CreateFlow-injectNode.png)


Now with all nodes ready click `Deploy` to execute the nodes. 


If you can see data being logged in `debug` then the nodes are executing correctly. 

![CreateFlow-debugLog](./../../../../img/InfoMotion/DataSource/Milkcocoa-v2/CreateFlow-debugLog.png)

You can also double check by going to mlkcca.com  and checking your projects datastore.
Search the store name and click `リスト表示（更新）` to refresh the store list. 

![CreateFlow-store](./../../../../img/InfoMotion/DataSource/Milkcocoa-v2/CreateFlow-store.png)
