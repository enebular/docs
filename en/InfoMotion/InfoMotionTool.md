#InfoMotion Tool

In order to create an InfoMotion the infomotion-tool must be installed.
The infomotion-tool allows the developer to run, test and edit InfoMotions locally. Once the InfoMotion is completed intomotion-tool packages the scripts to be uploaded to enebular.

#Installing infomotion-tool

```
#Installing globally。
sudo npm install infomotion-tool -g
```

#Commands

```
Usage

eit create [graph name]  = Creates an InfoType with the [graph name]
eit run [graph name]     = Runs [graph name] on localhost:3000
eit package [graph name] = Creates files to upload on enebular
eit help                 = help
```

Creating a graph
-----

```
eit create myfirstgraph
```

`create` builds the following files

`datasource.json`,
`package.json`,
`plugin.css`,
`plugin.js`,
`plugin.json`,

![](/_asset/images/InfoMotion/enebular-developers-about-infomotion-files.png)

#### datasource.json

This file allows you to connect your infomotion to datasources.
You can use one adapter per infomotion.

The adapter types are
`random`, `mock`, `milkcocoa`,`pubnnub`,`ajax` and `apigateway`

For `random`, `milkcocoa`,`ajax` and `apigateway` use the following.
Replace `milkcocoa` with any other adapter just listed.

```
  {
    "adaptor": "milkcocoa",
    "apikey": "api123",
    "apisecret": "secret123",
    "appId": "appId123",
    "dataStore": "test",
    "id": "milkcocoa",
    "title": "milkcocoa",
    "name": "milkcocoa"
  }
  * If no apikey or secret leave blank.
```

For `pubnub`

```
  {
    "adaptor": "pubnub",
    "pubnub": {
                "publishKey": "",
                "subscribeKey": "",
                "ssl": true,
            },
    "chanel" : "sampleChannel",
    "count" : 100
    "appId": "pubnub",
    "id": "pubnub",
    "title": "pubnub",
    "name": "pubnub"
   }
```

For `random`

Random is give as a default datastore and generates sets of the following data schema.

```
{
	country:String,
	value:Number
}
```

For Mock Adapter

Mock adapter allows for an array of data to be passed to the InfoMotion
for quick testing. Live and Daterange picker return this same piece of data.

```javascript
[
    {
        "adaptor": "mock",
        "apikey": "",
        "apisecret": "",
        "appId": "",
        "dataStore": "mock",
        "id": "mock",
        "title": "mock",
        "name": "mock"
        "data": [{"id": "a", "value": 1}, {"id": "b", "value": 21}, {"id": "c", "value": 512}]
    }
]
```

#### package.json

A usual package json for node.js for package handling.
For more information see [NPM](https://docs.npmjs.com/files/package.json).

#### plugin.css

Stying for the InfoMotion.

#### plugin.js

This file contains the main logic for the InfoMotion.
D3.js is globally installed by default.
See [API Reference](/en/InfoMotion/APIReference) for more details.

#### plugin.json

The plugin.json is created to supply the InfoMotion with sample data to preview the visualization.
`sampleSettings` is a defualt setting to the InfoMotion.
`sampleData` is a data set that's passed to InfoMotion to visualize.

```
{
	"sampleSettings":{
	},
	"sampleData":[
	]
}
```

#InfoType templates

The default graph is `DataLogger` InfoMotion.
`Data Logger` simply logs data to the screen.

Here are available templates that are be pre-made.

```
eit create myfirstgraph -t barchart
eit create myfirstgraph -t linechart
eit create myfirstgraph -t piechart
eit create myfirstgraph -t map
```

#Running locally in the browser

The `run` command

```
cd myfirstgraph
eit run
open http://localhost:3000
```

#Packaging

Once the InfoMotion is ready to be uploaded to Enebualr run the command.

```bash
eit package
```

This will create a target folder containing three files.
`plugin.js`, `plugin.css` and `plugin.json`.

![](/_asset/images/InfoMotion/enebular-developers-build.png)

Continue to [Upload InfoMotion]() to upload the InfoMotion to enebular.
