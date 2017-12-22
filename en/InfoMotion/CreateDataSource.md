---
lastUpdated: 2017-12-15
---

# Connecting DataSource

A datasource is a connetion to a database repository.
	
A typical project has three components Flow, DataSource and InfoMotion. 
- Flow collects data and pushes the data to a database.
- Datasorce contains the connection to the database.
- InfoMotion gets data via the datasource connection to visualize.

![](/_asset/images/enebular-developers-aboutdatasource.png)

In enebular, you can create & edit DataSource.

![](/_asset/images/enebular-developers-datasource.png)

`Milkcocoa`, `API Gateway`, `Pubnub` are the available datasources for InfoMotion.

## Milkcocoa

See [Sample Flow](../Flow/FlowExampleMilkcocoa.md) to get started with a simple data flow with Milkcocoa.

![](/_asset/images/InfoMotion/enebular-developers-datasource2.png)

* App Id
* DataStore
* API Key
* Secret Key: API Secret

## API Gateway

See [API Gateway DataSource](./DatasourceAPIGateway.md) to get started with a simple data API with API Gateway.

![](/_asset/images/InfoMotion/enebular-developers-datasource-apigateway.png)

* Endpoint
* API Key

## Pubnub

coming soon.

Continue to [InfoMotion Dashboard](./CreateInfoMotion.md) to create dashboard.
