---
lastUpdated: 2017-12-01
---

# Get Started

This tutorial contains the following. 

- Create a Project
- Creating Flow using Milkcocoa
- Creating a graph (InfoMotion) using data of a Flow

## Create a Project

A Project can have multiple **Assets**.
The current Assets are **Flows** and **InfoMotions**.

![](/_asset/images/enebular-developers-aboutproject.png) 

After logging in create a project by clicking Add project. 

![](/_asset/images/enebular-developers-createproject.png)

Enter a title and submit. 

![](/_asset/images/enebular-developers-createprojectmodal.png)

![](/_asset/images/enebular-developers-projects.png)

## Creating Flow 

Next create a Flow after creating a Project. Select the Project and go to the project management screen. 

![](/_asset/images/enebular-developers-projectdashboard.png) 

Clicking Create Asset opens a modal to create Asset. 

![](/_asset/images/enebular-developers-createassetmodalbefore.png)

Select Asset Type `flow` and give the title of Flow. The access to Flow can be set to `admin` (default role to asset).

![](/_asset/images/enebular-developers-createassetmodal.png) 

Click continue to complete the creation and move to the Flow page. 

![](/_asset/images/enebular-developers-flowdashboard.png) 

Edit Flow opens a Node-RED edit screen. 

![](/_asset/images/enebular-developers-nodered-before.png) 

## Edit / deploy data flow 

On the editing screen, 
select the desired nodes from the left side of the window 
and connect the nodes to create a flow. 
When ready click **Deploy** to deploy the flow. 

![](https://i.gyazo.com/2dd11f23a605ec41b73d413176d206c2.png) 

This flow shows a data store of [Milkcocoa (cloud service)](//mlkcca.com)  every 10 seconds, with seven random IDs (`dataid`) as random labels 0 to 50 and stores it as values ​​(`v`). 

Please refer to the images below to create a flow. 
Configure the flow to run every 10 seconds with **timestamp node**, set the properties with **function node**, and **milkcocoa node** will store information to Milkcocoa with the application id (`app_id `) · Data store information to (`datastore`) · Authentication information with (`API Key`,` API Secret`). 

![](/_asset/images/enebular-developers-milkcocoaflow.png) 

The code below is for the function node. 

```
var newMes = {};

newMes.payload = {};
newMes.payload.v = Math.floor(Math.random()*50 + 1);
newMes.payload.dataid = 'data-'+Math.floor(Math.random()*7 + 1);

return newMes;
```

Set the milkcocoa **Data Store** as `tutorial` and **Operation** as` Push`. 

Before creating this Flow, refer to Milkcocoa's [Prepare to use Milkcocoa on the tutorial page](https://mlkcca.com/tutorial/ page 2. Html), create an app and with `app_id`. `API Key` and` API Secret` which can be created from the "Authentication" tab in the Milkcocoa administration screen. 

***Note 1**: The free version of enebular sleeps 30 minutes after deployment if there is no access. Currently, only free version is provided. 

***Note 2**: (In the free version) Trying to deply a flow after a an idle 30 minutes will result in an "Unauthorized" error. 

## Registering a DataSource 

Next the deployed flows data will be visualized. 

Before visulaizing a DataSource the following should be understood. 

* InfoMotion: 
An InfoMotion is a visualization/graph on a dashbaord. 
The visualization is based on the data of a DataSource. 
InfoMotion gives Movement to Information using the two components `InfoType` and `DataSource`.
* InfoType: The type of graph (pie chart, bar graph, etc.). 
* DataSource: Data to be displayed on the graph. 
The current datasource adapters are ` apiGateway` ,` milkcocoa` and ` pubnub` . The following example will be using `milkcocoa`. 

Register the DataSource from the DataSource tab on the sidebar. 
Open the DataSource creation modal from Create DataSource. 

![](/_asset/images/enebular-developers-datasource.png)

Select "milkcocoa" in "Select DataSource Type" and enter the necessary information. Enter `App Id`,` DataStore`, `API Key` and ` Secret Key` (API Secret) specified by the milkcocoa node in Node-RED Edtior then save. 

![](https://i.gyazo.com/7b0b7eebebe0828e564fdcb2863a47b9.png) 

## Uploading an InfoType 

After registering the DataSource, upload the InfoType. 
This example will use a sample bar graph. 

<ul> 
  <li><a href="/_asset/sample/sample-bar-chart.zip" target="_blank">sample InfoType download(zip file)</a></li> 
</ul>

When the download is complete, click the InfoType tab in the sidebar. 

![](/_asset/images/enebular-developers-asset-infotype.png) 

Upload Opens a modal from InfoType. Drag and drop or select the contents of the downloaded zip file. 

![](https://i.gyazo.com/5b461780e0d2afe6758d87ecb7ae7801.png) 

Select a `category` and click Upload.

![](/_asset/images/enebular-developers-upload-infotype.png)

Once uploaded click the InfoMotion tab in the sidebar. 

##  Creating an InfoMotion 

Create InfoMotion using DataSource and InfoType. 
Press Create Infomotion to open the modal. 

![](/_asset/images/enebular-developers-asset-infomotion.png) 

Give the title of InfoMotion. The default access right to InfoMotion (default role to asset) is set to `admin`.

![](/_asset/images/enebular-developers-asset-infomotion-modal.png) 

The graph can then be used in the InfoMotion dashboard screen. 

![](/_asset/images/enebular-developers-infomotion-dashboard-before.png) 

Click Add Graph to open a graph sidebar. This sidebar displays a list of graphs to display in the dashboard. 

![](/_asset/images/enebular-developers-infomotion-add-graph.png)

Register a graph by clicking Create Graph.

![](/_asset/images/enebular-developers-infomotion-create-graph.png)

Input a NAME, select a TYPE `bar-chart` (previously uploaded InfoType). 
DataSource is` test-datasource` of the DataSource we (previously created datasource). 

Since label is the x axis and value is the y axis, set `dataid` to label and value to` v` (LabelNames are omitted in this example). 

![](/_asset/images/enebular-developers-infomotion-create-graph-filled.png)

Create a Graph to add test-graph to the list.

![](/_asset/images/enebular-developers-infomotion-graphs.png)

If you click the plus icon to the left of test-graph, it will be added to the dashboard.

![](/_asset/images/enebular-developers-infomotion-dashboard.png) 

To resize the graph drag the right bottom corner then click save the save layout. 

![](/_asset/images/enebular-developers-infomotion-dashboard-full.png)


## Well Done!

We were able to create a data flow and a graph with data. 

In This example we used a simple bar chart, but you can create and upload an InfoMotion Type yourself. For details, please refer to [InfoMotion Type Creation Tutorial](/developers/infomotion-type-tutorial).
