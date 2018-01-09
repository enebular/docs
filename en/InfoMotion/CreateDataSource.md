---
lastUpdated: 2017-12-15
---

# Connecting DataSource

A DataSource is a data connection used by an InfoMotion (Graph). 
Registering a DataSource is necessary to use InfoMotion. 
A Flow can save data to a DataSource. 

![](/_asset/images/enebular-developers-aboutdatasource.png) 

In enebular, you can create & edit DataSource. 

![](/_asset/images/enebular-developers-datasource.png) 

`Milkcocoa`, `API Gateway`, `Pubnub` are the available datasources for InfoMotion.

## Milkcocoa

See [Sample Flow](../Flow/FlowExampleMilkcocoa.md) to get started with a simple data flow with Milkcocoa. 

![](/_asset/images/InfoMotion/enebular-developers-datasource2.png) 

* App Id 
	* An App Id of a Milkcocoa project 
* DataStore 
	* A DataStore to save in a Milkcocoa App 
* API Key 
	* A key for the App Id 
* Secret Key: API Secret 
	* A Secret for the App Id 

To set a DataSource click Save. 

![](https://i.gyazo.com/1fe28e143e56eaa179ba463d5469b1b9.png)

## API Gateway

See [API Gateway DataSource](./DatasourceAPIGateway.md) to get started with a simple data API with API Gateway.

![](/_asset/images/InfoMotion/enebular-developers-datasource-apigateway.png)

* Endpoint
	* API Gateway endpoint to set
* API Key
	* API Key for the API Gateway

Cick Save to set the DataSource.

![](https://i.gyazo.com/bc19b7fbd7338fc99961b36b0b8d1835.png)

## Using a DataSource 

Registered DataSources can be used by an InfoMotion. 

![](https://i.gyazo.com/be55d7ae149fe186fb5d57ed391b2da6.png)

## Pubnub

coming soon.

Continue to [InfoMotion Dashboard](./CreateInfoMotion.md) to create dashboard.
