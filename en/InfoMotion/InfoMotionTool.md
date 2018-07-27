---
lastUpdated: 2018-04-13
---

# InfoMotion Tool

In order to create an InfoType the infomotion-tool must be installed. 

For ready to use sample InfoTypes see [Sample InfoTypes](./SampleInfoTypes.md) 

The infomotion-tool allows the developer to run, test and edit InfoMotions locally. Once the InfoType is completed intomotion-tool packages the scripts to be uploaded to enebular. 

## Installing infomotion-tool 

```
npm install @uhuru/enebular-infomotion-tool-v2 -g
```

* Requirements for running InfoMotion-tool
`nodejs >= 6 and npm 5.2+`

If a permission error occur the following solutions may solve it. 

1) Give permission to current user to global node_modules in /usr/local/lib/ node_modules. Once persmission given retry global install. 

MacOSX: https://support.apple.com/kb/PH25287?locale=en_US 

Windows: https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc754344(v=ws.11) 

2) Install nvm to handle node and npm installations. (recommended) 
MacOSX: https://github.com/creationix/nvm  
Windows: https://github.com/coreybutler/nvm-windows 

3) Change npm's Default Directory https://docs.npmjs.com/getting-started/fixing-npm-permissions see `Option Two`. 

## Commands 

```
eit create [graph name]  = Creates an InfoType with the [graph name] 
eit run [graph name]     = Runs [graph name] on localhost:3000 
eit run [graph name] -l  = Runs livereload [graph name] on localhost:3000 
eit package [graph name] = Creates files to upload on enebular
eit help                 = help
```

## Creating a graph

```
eit create myfirstgraph
```

`create` builds the following files

- `datasource.json`
- `plugin.css`
- `plugin.js`
- `plugin.json`
- `README.md`

![](https://i.gyazo.com/ced32c7e2b9e11ec9b6f25d8a98149e4.png)

### datasource.json

*This file is for testing.*

This file allows you to connect your infomotion to datasources
for local browser tests.

The adapter types are

- `milkcocoa` (v2) (v3 coming soon)
- `pubnub`
- `firebase`
- `apigateway`
- `random`
- `mock`

#### Milkcocoa adoptor

Using [Milkcocoa](https://mlkcca.com) datasource.
Replace the specified values with your app details.

```json
{
  "adaptor": "milkcocoa",
  "apikey": "YOUR_API_KEY",
  "apisecret": "YOUR_API_SECRET",
  "appId": "YOUR_APP_ID",
  "dataStore": "YOUR_DATASTORE",
  "id": "milkcocoa",
  "title": "milkcocoa",
  "name": "milkcocoa"
}
* If no apikey or secret leave blank.
```

#### Pubnub adaptor

Using [Pubnub](https://www.pubnub.com/) as a datasource.
Replace the specified values with your app details.

```json
{
  "adaptor": "pubnub",
  "pubnub": {
    "publishKey": "YOUR_PUBLISH_KEY",
    "subscribeKey": "YOUR_SUBSCRIBE_KEY",
    "ssl": true,
  },
  "chanel" : "YOUR_CHANNEL",
  "count" : 100
  "appId": "pubnub",
  "id": "pubnub",
  "title": "pubnub",
  "name": "pubnub"
}
```

#### Firebase adaptor 

Using [Firebase](https://firebase.google.com/) as a datasource.
Replace the specified values with your app details.

```json
{
  "adapter": "firebase",
  "firebase": {
    "apiKey": "YOUR_API_KEY",
    "authDomain": "YOUR_AUTH_DOMAIN",
    "databaseURL": "YOUR_DATABASE_URL",
    "projectId": "YOUR_PROJECT_ID",
    "storageBucket": "YOUR_STOREAGE_BUCKET",
    "messagingSenderId": "YOUR_MESSAGE_SENDER_ID"
  },
    "limit": 100,
    "ref": '/test',
    "title": "firebase",
    "name": "firebase"
}
```


### API Gateway Adaptor

Using [AWS API Gateway](https://aws.amazon.com/) as a datasource.
Replace the specified values with your app details.

```json
{
  "apiKey": "YOUR_API_KEY",
  "endpoint": "YOUR_ENDPOINT",
  "id": "apigateway",
  "projectId": "YOUR_PROJECT_ID",
  "title": "apigateway",
  "adaptor": "apigateway"
}
```

#### Random adaptor

Random is given as a default datastore and generates sets of the following data schema.

```json
{
  "adaptor": "random",
  "id": "random",
  "title": "random",
  "name": "random"
}
```

```javascript
{
  country: String,
  value: Number
}
```

#### Mock Adaptor

Mock adapter allows for an array of data to be passed to the InfoMotion
for quick testing. Live and Daterange picker return this same piece of data.

```json
{
  "adaptor": "mock",
  "id": "mock",
  "title": "mock",
  "name": "mock"
  "data": [{"id": "a", "value": 1}, {"id": "b", "value": 21}, {"id": "c", "value": 512}]
}
```

#### plugin.css

Styling for the InfoMotion.

#### plugin.js

This file contains the main logic for the InfoMotion.
D3.js (version 3.0.0) is globally installed by default.
See [API Reference](/en/InfoMotion/APIReference.html) for more details.

#### plugin.json

The plugin.json is created to supply the InfoMotion with sample data to preview the visualization.

`sampleSettings` is a defualt setting to the InfoMotion.
`sampleData` is a data set that's passed to InfoMotion to visualize.

```json
{
  "defaultSettings": {
    "label" : "country",
    "value": "v"
  },
  "sampleData": [
    {
      "country": "JP",
      "value": 1
    },
    {
      "country": "CN",
      "value": 2
    }
  ]
}
```

## InfoType templates

The default graph is `DataLogger` InfoMotion.
`Data Logger` simply logs data to the screen.

Here are available templates.

```
eit create [graph name] -t barchart
eit create [graph name] -t linechart
eit create [graph name] -t piechart
```

# InfoType dependancies

Each graph has it's own dependancies. To install them you will have to use npm install. Once installed you can continue on to pacaking and running the graph.

```bash
cd [graph name]
npm install
Check the InfoTypes read.me for more details.
```

## Packaging

Packaging is needed when
- An InfoType is created (`eit create`)
- Before uploading an InfoType to Enebular

Once the InfoType is ready to be uploaded to enebular run the command.

```bash
eit package [graph name]
```

This will create a target folder containing three files.

- `plugin.js`
- `plugin.css`
- `plugin.json`

## Running locally in the browser

The `run [graph name]` command and open http://localhost:3000 after `eit package`.

```
eit run [graph name]
```

The `run [graph name] -l` command runs scripts in live reload mode. 
Editing then saving a file will automatically restart the server. 

```
eit run [graph name] -l
```

![](/_asset/images/InfoMotion/enebular-developers-build.png)

Continue to [Upload InfoType](./UploadInfoType.md) to upload the InfoType to enebular.
