---
lastUpdated: 2018-04-13
---

# Creating a Firebase DataSource 

In this section a Firebase DataSource will be created. 
Enebular flow editor will be used to push data to the DataSource. 

###Registration  

Register at https://firebase.google.com/.
Once you are registerd and logged in click on add project. 

![](/_asset/images/InfoMotion/datasources/firebase/firebase-wellcome.png) 


Input a name for the project and your country/region then click CREATE PROJECT. 
When the new project is ready click CONTINUE. 

![](/_asset/images/InfoMotion/datasources/firebase/add-a-project.png) 


You will be directed to the project overview. Where at the top of the screen you will see
a "Get started here". Click on "Add firebase to your web app". 

![](/_asset/images/InfoMotion/datasources/firebase/get-started.png) 


A modal will pop up with configuration keys. These keys will be used later on with creating a flow and creating a data source. 

![](/_asset/images/InfoMotion/datasources/firebase/firebase-keys.png) 


###Authentication

Before we create a Flow we will need to set up authentications. 
In this example we will keep it simple with an Anonymous authentication. 

On your project sidebar click on authentication. 

![](/_asset/images/InfoMotion/datasources/firebase/authentication-sidebar.png) 


At the authentication screen click on SIGN-IN METHOD.

![](/_asset/images/InfoMotion/datasources/firebase/authentication.png) 


Select Anonymous, turn the enable switch on and click save. 

![](/_asset/images/InfoMotion/datasources/firebase/anonymous-enable.png) 


Anonymous should now be enabled.

![](/_asset/images/InfoMotion/datasources/firebase/anonymous-status-enabled.png) 

###Set up DataBase 

To set up a database click database on the side bar. 

![](/_asset/images/InfoMotion/datasources/firebase/database-sidebar.png) 


Click get started on Realtime Database. 

![](/_asset/images/InfoMotion/datasources/firebase/database.png) 


Select "Start in test mode" (This allows anyone to read or write to the database). Click enable to continue. 

![](/_asset/images/InfoMotion/datasources/firebase/database-security.png) 


###Create Flow 

Now with firebase ready lets create a flow to push data. 
In an enebular project go to flows and click on the add button at the bottom right side of the screen. 

![](/_asset/images/InfoMotion/datasources/firebase/flow-list.png) 


Enter a name and decription then click continue. 

![](/_asset/images/InfoMotion/datasources/firebase/create-flow.png) 


Click on `Edit Flow` to open the flow editor. 

![](/_asset/images/InfoMotion/datasources/firebase/edit-flow.png) 


(If firebase is not installed please install `node-red-contrib-firebase`.)

Create the following flow. 
inject -> function -> firebase modify -> debug 
![](/_asset/images/InfoMotion/datasources/firebase/flow.png) 


Double click the inject node and set the interval to 10 seconds. 
Click done when finished. 

![](/_asset/images/InfoMotion/datasources/firebase/inject-node.png) 


Double click the function node and set the function as below. 

![](/_asset/images/InfoMotion/datasources/firebase/function-node.png) 


```javascript
var data = {
        timestamp: Date.now(),
        value:{
            country:['JP','CN','USA'][Math.floor(Math.random()*3)],
            value: Math.floor(Math.random()*10),
            created:Date.now()
        }
      }
      
msg.payload = data;
return msg;
```

Double click the firebase node and set the inputs as follows. 

Click on the pencil to edit the firebase url and auth type then update. 
Firebase:
	firebase: `YOUR FIREBASE PROJECT ID`
	auth type: `none` 

![](/_asset/images/InfoMotion/datasources/firebase/firebase-config-node.png) 


Child path : `test`
Method : `Push`
value : `msg.payload`
name : (any name you want)

![](/_asset/images/InfoMotion/datasources/firebase/firebase-node.png) 


Now with all nodes set you can now click deploy. 
Check your debug log tab to see if data is being pushed correctly. 

![](/_asset/images/InfoMotion/datasources/firebase/debug-log.png) 


You can also check your firebase project database to see the data being saved.

![](/_asset/images/InfoMotion/datasources/firebase/firebase-project-database.png) 


###Create Data Source 

With data being pushed to firebase we can now set up a DataSource in enebular. 
In your enebular project go to datasource. 

![](/_asset/images/InfoMotion/datasources/firebase/firebase-project-database.png)


The keys for the settings can be found in your firebase web settings. The `Ref` is the child path you set in the flow editor. 
The ref can also be seen in your firebase database as the collection name. The `Ref` must also include a `/`, for this example we have set the `Ref` as `/test`.

![](/_asset/images/InfoMotion/datasources/firebase/datasource-settings.png)


You should new see a new DataSource created.

![](/_asset/images/InfoMotion/datasources/firebase/new-datasource.png)


Now your DataSource is ready to be used on an infotype see 
[Sample infotypes](./SampleInfoTypes.md)to downoad a graph, 
[Upload an InfoType](./UploadInfoType.md) to upload a graph to enebular, 
and [CreateInfoMotion](/.CreateInfoMotion) to create an InfoMotion dashboard. 