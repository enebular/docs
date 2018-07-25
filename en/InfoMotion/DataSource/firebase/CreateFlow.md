###Create Firebase Flow 

At your flow editor create the following. 

(If firebase is not installed please install `node-red-contrib-firebase`.)

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