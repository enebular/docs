# Connecting Data Source {#ConnectingDataSource}

A Data Source is a data connection used by an InfoMotion (Graph).
Registering a Data Source is necessary to use InfoMotion.
A Flow can save data to a Data Source.

![](../_asset/images/InfoMotion/datasources/aboutdatasource.png)

In enebular, you can create & edit Data Source.

![](../_asset/images/InfoMotion/datasources/datasource.png)

Available data sources for InfoMotion:

- [Pubnub](./DataSource/Pubnub/CreateDataSource.md)
- [Firebase](./DataSource/Firebase/CreateDataSource.md)
- [API Gateway](./DataSource/APIGateway/CreateDataSource.md)
- [NEC BaaS](./DataSource/NEC-BaaS/CreateDataSource.md)

A Data Source connection can be checked once created.
Results are displayed in the Connected column.
Currently the data sources that can be checked

- Firebase
- PubNub

The results of the connection test are represented by 4 icons which each signifies a connection status.

- \- : Indicates that it cannot be checked
  (API Gateway and NEC BaaS).

- Green: Indicates that it can connect to the Data Source and retrieve data from the Data Source.

- Yellow: It was able to connect to the Data Source, but it could not retrieve data. This may be due to incorrect `ref`, `channel` or an empty database.

- Red: Indicates that it could not connect to the Data Source.

For more details hover over the connection icon.
