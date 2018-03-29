---
lastUpdated: 2018-03-29
---

# Connecting DataSource

A DataSource is a data connection used by an InfoMotion (Graph). 
Registering a DataSource is necessary to use InfoMotion. 
A Flow can save data to a DataSource. 

![](/_asset/images/InfoMotion/datasources/aboutdatasource.png) 

In enebular, you can create & edit DataSource. 

![](/_asset/images/InfoMotion/datasources/datasource.png) 


Available datasources for InfoMotion:
`Milkcocoa-v2`,`Milkcocoa-v3`, `Pubnub`, `Firebase`, `API Gateway`.

## Milkcocoa

See [Sample Flow](../Flow/FlowExampleMilkcocoa.md) to get started with a simple data flow with Milkcocoa or see https://mlkcca.com/ to get started with milkcocoa. 

![](/_asset/images/InfoMotion/datasources/milkcocoa.png) 

* App Id 
* DataStore 
* API Key 
* Secret Key: API Secret 

To set a DataSource click Save. 

## Milkcocoa-v3 

see http://v3.mlkcca.com to get get started with milkcocoa-v3 or try a simple example at [Milkcocoa-v3  DataSource](./DatasourceMilkcocoa-v3.md)

![](/_asset/images/InfoMotion/datasources/milkcocoa-v3.png)

* Title 
* App Id 
* DataStore 
* API Key 
* Secret Key: API Secret (optional)

To set a DataSource click Save. 

## Firebase 

See https://firebase.google.com/ to get started with firebase or try a simple example at [Firebase DataSource](./DatasourceFirebase.md)

![](/_asset/images/InfoMotion/datasources/firebase.png)

* Title
* Api Key
* Auth Domain
* Database URL
* Project Id
* Storage Bucket
* Messaging Sender Id
* Ref (include all slashes)
* Limit (default 100)

To set a DataSource click Save. 

## Pubnub 

See http://pubnub.com/ to get started with firebase or try a simple example at [Pubnub  DataSource](./DatasourcePubnub.md)

![](/_asset/images/InfoMotion/datasources/pubnub.png)

* Title 
* Publish Key 
* Subsribe Key 
* Channel 
* Count (default 100) 

To set a DataSource click Save. 

## API Gateway (Not Applicable with livemode) 

See [API Gateway DataSource](./DatasourceAPIGateway.md) to get started with a simple data API with API Gateway.

![](/_asset/images/InfoMotion/datasources/apigateway.png)

* Endpoint
	* API Gateway endpoint to set
* API Key
	* API Key for the API Gateway

Cick Save to set the DataSource.

## Using a DataSource 

Registered DataSources can be used by an InfoMotion. 

![](/_asset/images/InfoMotion/datasources/usingdatasource.png)

Continue to [InfoMotion Dashboard](./CreateInfoMotion.md) to create dashboard.
