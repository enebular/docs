---
lastUpdated: 2018-02-01
---

# Getting Started

This tutorial covers the following.

- Creating a project
- Creating a flow using Milkcocoa*
- Creating a graph (InfoMotion) that uses the flow's data

*[Milkcocoa](https://mlkcca.com) is a cloud platform that enables simple realtime data exchange between IoT devices, smartphones and PCs.

## Creating a Project

To start using enebular we first create a project. In the screen after logging in, create a project with "Create Project".

![](https://i.gyazo.com/1e90909b5ecefe56ff1934aa41e5a7b9.png)

Enter an appropriate title and create the project.

![](/_asset/images/enebular-developers-createprojectmodal.png)

![](https://i.gyazo.com/69a5b817e8681349f45373eb7aead486.png)

## Creating a Flow

With the project added let's now create a flow. Select the project to go to the project management screen.

![](https://i.gyazo.com/e521afd4d489291aa774fe9429cf3321.png)

Press the "+" at the bottom right to open the asset creation dialog box.

Select `flow` for the asset type and give the flow a title. For the flow's default access permissions, this time just set it to `superdev`. The category at the bottom can be set to anything appropriate.

![](https://i.gyazo.com/257abde3b17b7d2bab924b2d0ad32ac8.png)

Press "Continue" to complete the creation.

Once created you'll be taken to the flow details page.

![](https://i.gyazo.com/7cb9b53259022696e7cc47e4fa81d89b.png)

Press "Edit Flow" to open the Node-RED editor.

![](/_asset/images/enebular-developers-nodered-before.png)


## Editing and Deploying the Data Flow

In the editor, you create a data flow by placing the nodes lined up on the left (the boxes with API names) onto the sheet and then connecting those nodes. Once the flow is ready, you deploy it by pressing **Deploy** at the top right.

![](https://i.gyazo.com/2dd11f23a605ec41b73d413176d206c2.png)

The flow in the diagram stores a random number between 0 and 50 (`v`) with a random selection from seven ID types (`dataid`) to a [Milkcocoa](https://mlkcca.com) data store every 10 seconds.

Create the flow by referring to the diagram below. Set the flow to run every 10 seconds with the **timestamp node**, set the properties in the **function node**, and in the **milkcocoa node** set the destination Milkcocoa app information (`app_id`), the data store information (`datastore`) and authentication information (`API Key`, `API Secret`).

![](/_asset/images/enebular-developers-milkcocoaflow.png)

The code for the function node is as follows.

```
var newMes = {};

newMes.payload = {};
newMes.payload.v = Math.floor(Math.random()*50 + 1);
newMes.payload.dataid = 'data-'+Math.floor(Math.random()*7 + 1);

return newMes;
```

The milkcocoa node's **Data Store** is `tutorial` and its **Operation** is `Push`.

Before creating this flow, refer to the Milkcocoa tutorial page [Preparing to use Milkcocoa](https://mlkcca.com/tutorial/page2.html), create an app and make note of the `app_id`, and then also the `API Key` and `API Secret` from the  authentication tab in the Milkcocoa management screen.

***Note 1**: The free version of enebular automatically sleeps if there is no access for 30 minutues. At present only the free version is available.

***Note 2**: If the flow editor is left open and unused for an extended period of time, an attempt to deploy may result with it failing with "Unauthorized". If this happens please reload.


## Registering a DataSource

Once the data flow has been deployed, let's now visualize the data.

Before starting on the visualization, you'll need to know the following terminology.

* InfoMotion: This is the actual graph dashboard you see. It is created from a combination of a InfoType and a DataSource. The term itself is of course a combination of Info and Motion, based on it having more movement than an "Infographic".
* InfoType: The graph type (pie graph or bar graph etc).
* DataSource: The data to be displayed in the graph. At present there are two types of DataSource types - `apiGateway` and `milkcocoa`. This time we'll use `milkcocoa`.

First we register a DataSource from the DataSource section in the sidebar. Press the "+" at the bottom right to open the DataSource creation dialog box.

![](https://i.gyazo.com/f63357415d983465b637c81dbf4014d3.png)

Select "milkcocoa" for the "Select DataSource Type" and enter the required information.

Enter the `App Id`, `DataStore`, `API Key` and `Secret Key` (API Secret) you specified for the milkcocoa node in the Node-RED editor. Then press "Save" to save it.

![](https://i.gyazo.com/7b0b7eebebe0828e564fdcb2863a47b9.png)

## Uploading an InfoType

After registering the DataSource, upload the InfoType. We'll use a sample bar graph here.

<ul>
  <li><a href="/_asset/sample/sample-bar-chart.zip" target="_blank">Sample InfoType Download (zip)</a></li>
</ul>

Once the download is complete, click the InfoType tab in the sidebar.

![](https://i.gyazo.com/1d6ba758c53ff94c66a9545fd83aa859.png)

Press the "+" at the bottom right to open the dialog box. Drag the contents of the downloaded zip file into the drag and drop area.

![](https://i.gyazo.com/5b461780e0d2afe6758d87ecb7ae7801.png)

Select whatever `category` you like and then press the "Upload" button.

![](/_asset/images/enebular-developers-upload-infotype.png)

Once the upload completes a preview like the following will be displayed.

![](https://i.gyazo.com/a8b352503ecbfaa14e75c48f032f5636.png)

With that we've confirmed that the upload succeeded, so use the breadcrumbs to go back to the project screen and select the InfoMotion tab from the sidebar.

##  Creating an InfoMotion

Here we'll create an InfoMotion using a DataSource and an InfoType. Press the "+" at the bottom right to open the dialog box.

![](https://i.gyazo.com/7841284aa8720e3b47956d26ebbd5848.png)

Give the InfoMotion a title. For the InfoMotion's default access permissions, just set it to `superdev` this time. Select whatever you like for the "category" at the bottom.

![](https://i.gyazo.com/4ec89d65f12b4ad742d35afe07b615cc.png)

Once you've created it you'll be taken to the InfoMotion dashboard screen.

![](/_asset/images/enebular-developers-infomotion-dashboard-before.png)

Open the sidebar with "Add Graph". A list of the graphs shown on the dashboard is shown in the sidebar.

![](/_asset/images/enebular-developers-infomotion-add-graph.png)

We register a graph by pressing "Create Graph".

![](https://i.gyazo.com/20840d9afa6a2b70d1b5894f95ba107b.png)

Enter something appropriate for the NAME, the TYPE should be set to the `barchart` type of the InfoType you uploaded, and the DATASOURCE should be set to the `test-datasource` DataSource you created.

Since the label is the x axis and the value is the y axis, set `dataid` for the label and `v` for the value (LabelNames are omitted in this example).

![](/_asset/images/enebular-developers-infomotion-create-graph-filled.png)


Press "Create Graph" and "test-graph" will be added to the list.

![](/_asset/images/enebular-developers-infomotion-graphs.png)


If you click the plus icon to the left of test-graph it will be added to the dashboard (if it isn't displayed, please try changing the date range at the top right).

![](/_asset/images/enebular-developers-infomotion-dashboard.png)

To resize the graph drag its bottom right corner then press "Save" to save the save layout.

![](/_asset/images/enebular-developers-infomotion-dashboard-full.png)

## Well Done!

With that, we've been able to go from creating a data flow right through to displaying a graph that uses the data.

While in this tutorial we displayed a simple pre-made bar graph, you can also create, upload and use your own InfoMotion Type. For details, please refer to the [InfoMotion Type Creation Tutorial](/developers/infomotion-type-tutorial).
