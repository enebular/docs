---
lastUpdated: 2018-4-24
---

# Creating a Milkcocoa-v2 DataSource 

In this section a Milkcocoa-v2 DataSource will be created. 
Enebular flow editor will be used to push data to the DataSource. 

###Registration

Register at https://mlkcca.com/. 
Once you are registered and logged in at dashboard click on `新しいアプリを作る)`　

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/app-list.png) 


Name the application. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/name-app.png) 

The new applicaiotn will be added to the list. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/new-app-list.png) 

For this example we will only use the `app_id`. 
Authentication (`認証`) is set to public by default. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/app-dashboard.png) 


###Create a Flow 

The Milkcocoa datastore will be used to push data.
At your enebular project create a new Flow. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/create-flow.png)

Click the `Edit Flow` button 

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

###Create a Data Source 

In the same enebular project click `Data Source` and the plus button to add a 
`Data Source`. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/data-source.png) 


Set the `title` as you like. The `app_id` and `DataStore` are required fields. 
In this case we can leave `API Key` and `Secret Key` empty. 
The `DataStore` should be set to "test" and `App Id` from your milkcocoa app. 
Click save to continue. 

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/settings.png) 


###Access Control Allow Origin 

For milkcocoa to be used locally it must be 
served from a http server. 

For node.js users we recommend you use a simple npm module [http-server](https://www.npmjs.com/package/http-server) to serve your index.html locally. 

Or simply use 
`python -m SimpleHTTPServer 8000` in the terminal at your root directory to run the index.html.
For information on pythons SimpleHTTPServer see 
https://docs.python.org/2/library/simplehttpserver.html. 

Now your Data Source is ready to be used on an infotype see 
[Sample infotypes](./SampleInfoTypes.md) to downoad a graph, 
[Upload an InfoType](./UploadInfoType.md) to upload a graph to enebular, 
and [Create InfoMotion](./CreateInfoMotion.md) to create an InfoMotion dashboard. 
