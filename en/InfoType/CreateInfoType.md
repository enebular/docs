#InfoType

An Infomotion is a graph with a connecting datasource helps
users visualize data. 

----- image 1 ----- 

You can either use the pre made infotypes in enebular or 
create your own. 
This page explains the procedure from creation to upload. 

#Creating an InfoType

### Installing `infomotion-tool`

To create an InfoType you must first install the infomotion-tool globally.

```bash
$ sudo npm install infomotion-tool -g
```

The commands are listed below.

```bash 
eit create [graph name]  = Sets up necessary infotype files 
eit run [graph name]     = Fires up a server to run locally on your browser 
eit package [graph name] = Creates a package ready for upload to enebular 
eit help                 = displays help 
``` 

[For more detials on `infomotion-tool` see here.]() 

## Creating a graph 

First we create a project called `myFirstGraph` 
`$ eit create myfirstgraph` 

----- File Dir Image ------ 

Plugin.js holds the main logic of an InfoType 

##Testing locally 

Test of InfoType in browser

eit run So you can test the behavior in the browser.

```bash
$ cd myfirstgraph
$ eit run
$ open http://localhost:3000
```

For more details on how to edit plugin.js correctly please refer to the [API Refernce.]() 

D3.js is set as a default variable to create graphs. 


Building InfoType (packaging) 

All plugins must be packaged before uploaded to Enebular. 

```bash 
# creates plugin.ccs and plugin.js minified files in build  
eit package 
```


##Upload InfoType

To upload an InfoType go to to any project and select "InfoType". 

---- Up load iamge ---- 

An InfoType is required to have 3 files. 
plugin.js, plugin.css and plugin.json. 
Once uploaded and successful, it will be added to the InfoType list. 
the plugin.json will give sample data for the INfoType to use, 

##Using InfoType 

In order for an InfoType to be fully functional a datasource is needed. 

We will use Milkcocoa as a datastore.
For more information on Milkcocoa please visit the Milkcocoa website
[https://mlkcca.com/tutorial/page2.html]() 

##Creating a data flow 

Once a milkcocoa app has been registered we can create 
「New Flow」.
The milkcocoa node requires the following to work.

----- node red flow ---- 

##Milkcocoa node settings 

* **App ID**:`app_id`
* **API Key**: `API Key`
* **API Secret**: `API Secret`
* **Data Store**: `type-tutorial`
* **Operation**: `Push`

##Function node settings 

```bash
var newMes = {};

newMes.payload = {};
newMes.payload.dataid = Math.floor(Math.random()*7 + 1);
newMes.payload.v = Math.floor(Math.random()*50 + 1);
newMes.payload.v2 = Math.floor(Math.random()*50 + 1);

return newMes;
``` 

##timestamp node 

Set timestamp node intervl for every 10 seconds.
once all nodes are filled and connected click Deploy to start the flow.


##Datasourceを追加

Click「DataSource」and create dataSource using milkcocoa 
After all inputs are filled save the data source. 

---- DATA SOURCE IMAGE ----

## Making an infomotion 

Now with dataSource created select「Create InfoMotion」. 
Enebular will load the dashbaord.

---- DASHBOARD IMAGE ---- 

Clicking add graph displays the 
infomotions available to the dashboard.

---- MODAL IMAGE ----

once filed out add graph and click the plus to dsplay on the dashboard. 



