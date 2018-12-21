---
lastUpdated: 2018-08-09
---


# Create Data Source 

In the same enebular project click `Data Source` and the plus button to add a 
`Data Source`. 

![CreateDataSource-datasource](./../../../../img/InfoMotion/DataSource/Firebase/CreateDataSource-datasource.png)

The keys for the settings can be found in your firebase web settings. 

![CreateDataSource-settings](./../../../../img/InfoMotion/DataSource/Firebase/CreateDataSource-settings.png)

Check adding new one.

![CreateDataSource-newOne](./../../../../img/InfoMotion/DataSource/Firebase/CreateDataSource-newOne.png)

## Input Items

Get the fllowing items by snipet.

* Api Key
* Auth Domain
* `Database URL
* Project Id
* Storage Bucket
* Messaging Sender Id

Click `Project Overview` and `Add Firebase to your web app`.

![Setup-firebaseKeys-en](./../../../../img/InfoMotion/DataSource/Firebase/Setup-firebaseKeys-en.png)


The `Ref` is the child path you set in the flow editor. 
The ref can also be seen in your firebase database as the collection name. The `Ref` must also include a `/`, for this example we have set the `Ref` as `/test`.

![CreateFlow-firebaseNode](./../../../../img/InfoMotion/DataSource/Firebase/CreateFlow-firebaseNode.png)

## Create InfoMotion

Now your DataSource is ready to be used on an infotype see 
[Sample infotypes](./../../SampleInfoTypes.md)to downoad a graph, 
[Upload an InfoType](./../../UploadInfoType.md) to upload a graph to enebular, 
and [Create InfoMotion](./../../CreateInfoMotion.md) to create an InfoMotion dashboard
