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