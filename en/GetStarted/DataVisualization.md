---
lastUpdated: 2018-07-10
---

# Getting Started 

By using InfoMotion, you can visualize data.

This tutorial covers the following. 

- Discovering and Forking a flow 
- Discovering and Forking a graph (InfoType) 
- Visualising Flow data in an InfoMotion 

## Import a Flow 

Enebular allows users to publish and fork Assets. At the right top part of the window click on `Discover`. 

![](https://i.gyazo.com/f09039ce123a069bc9f64bb5d448a963.png)

Select Flow and search `getting-started`. 

![](https://i.gyazo.com/42a1ba777fed735c911e19a20aa79fe9.png)

Click fork to open the fork modal.

![](https://i.gyazo.com/478da140685e515ad49efb1eca79906a.png)

Select the project to import to and the Default asset role. (For now select superdev)

![](https://i.gyazo.com/aaa149b249e745c3ce31a00288199459.png)

Go back to your project dashboard to see the new asset you just forked. 

![](https://i.gyazo.com/05daf3cb4bf1ae80d9496b2050df46ca.png)

The imported Flow should look like this. 

![](https://i.gyazo.com/33793823646d34d7cb48a086cf308da3.png)

The flow is set up in a way that all the user needs to 
edit in the flow is datasource credentials. before we deploy the flow lets register a datasource. 

## Creating a Datasource

Below are the current real time databases used in InfoMotion.
See documentation for simple registration and and set up configurations. 

*The following configurations are for testing usage only and not recommended for production. 

[Milkcocoa-v2  DataSource](./DatasourceMilkcocoa-v2.md)

- Registration

[Firebase DataSource](./DatasourceFirebase.md)

- Registration
- Authentication
- Set up DataBase

[Pubnub  DataSource](./DatasourcePubnub.md)

- Registration

Once registered we are ready to edit the flow. 

## Editing and Deploying the Flow 

With a registered real time datasource we can now insert the correct credentials and deploy the flow. 

Each datasource has different credential requirements. 
The `getting-started` flow has 3 datasouces set up for you to choose. Feel free to remove the nodes you do not need. 

Set up one of the following datasources.

###Milkcocoa

**Credentials needed for milkcocoa.**

- app_id
![](https://i.gyazo.com/89f6f5f40985fc594831af0456367232.png)

**Inputs in node editor**

Double click the milkcocoa node and set a new milkcocoa id in 
`Add new milkcocoa`. 

![](https://i.gyazo.com/f5af057aa276e5d682f76dcac9b6d975.png)

Input app id, click add then done to set node. 

![](https://i.gyazo.com/01fc6b4b0768b97ddef7df865fc4ef89.png)

###Firebase 

**Credentials needed for Firebase.**

At the overview page click on `Add firebase to your web app`. 
![](https://i.gyazo.com/dd183169ebc84379c477c8fb72764d86.png)

databaseURL will be used in the Flow.

![](https://i.gyazo.com/de45518f53087053af1009f39adde653.png)

**Inputs in Flow**

Double click the firebase node and click on the pencil icon to edit a new firebase. 

![](https://i.gyazo.com/006b6bb363326917a6bf4106b22fc568.png)

Insert your databaseURL, click update and done to set node. 
Leave authtype to none just for this example. 

![](https://i.gyazo.com/a9a322d51267a8a7965c0ed952b9d9fe.png)

###Pubnub

**Credentials in Pubnub**

In your project select the keyset you wish you use. 

![](https://i.gyazo.com/e5321091e2e1c324beac80d6791cd5be.png)

Scroll down to `storage and playback`, switch it on, set retention to 3 days and click on save changes.

![](https://i.gyazo.com/5f48ae0bd7004165bf9022e37786abf2.png)

The Subscribe key and Publish keys will be used in the flow.
![](https://gyazo.com/646f91acd38afb2567714cec871e221a)

**Inputs in Flow**

Double click the pubnub out node and edit the keys by clicking on the pencil icon. 

![](https://i.gyazo.com/d486f8c51cd6ec49859043d897b9182b.png)

Insert the Publish and Subscribe key, click add and done to set the node.

![](https://i.gyazo.com/023ead4c57285096cf54d5d92ca56125.png)

Repeat this with the pubnub in node. 

![](https://gyazo.com/579dd025db613934a417b13c30f788bb)

Once the correct credentials are inserted click the `Deploy` button. To check if data is being pushed click the `debug` tag. 
The debug log should be updated every 10 seconds (intervals set by the inject node).

Image of debug log 

![](https://i.gyazo.com/f1e0fdf675a74450ef8ebfc3c18c04df.png) 

With data being pushed to a database we can create an datasource (endpoint) for infomotion to use.

***Note 1**: The free version of enebular automatically sleeps if there is no access for 30 minutes. At present only the free version is available.

***Note 2**: If the flow editor is left open and unused for an extended period of time, an attempt to deploy may result with it failing with "Unauthorized". If this happens please reload.

## Registering a DataSource for InfoMotion

We will next add datasources to our project for InfoMotion to visualise. At your project dashboard select `Data Source` on the left tab then click on the plus button to open the datasource modal. 

![](https://gyazo.com/d68eced9c32162389418a0eb3d27f379) 

Give the datasource a name and correct credentials.
Click on save to save. Now the datasource is ready for InfoMotion to use. 

![](https://i.gyazo.com/679f69e11be2eec5a9ea1c77f979b631.png)

## Import an InfoType

Enebular allows users to publish and fork Assets. At the right top part of the window click on `Discover`. 

Select InfoType and search `barchart`. 

![](https://i.gyazo.com/8e444675d12f0471c9f7cb907f8f8672.png) 

Click fork to open the fork modal. 

![](https://i.gyazo.com/30e54dc512adbfad891845aa9f647d45.png)

Select the project to import to. 

![](https://i.gyazo.com/930bc90dcd5304a3960e3fb121c0d18a.png)

Go back to your project dashboard to see the new asset you just forked. 

![](https://i.gyazo.com/acd97ef8cdf4969689897438b73f7447.png)

##  Creating an InfoMotion

Here we'll create an InfoMotion using a DataSource and an InfoType. Press the "+" at the bottom right to open the dialog box.

![](https://i.gyazo.com/7841284aa8720e3b47956d26ebbd5848.png)

Give the InfoMotion a title. For the InfoMotion's default access permissions, just set it to `superdev` this time. Select whatever you like for the "category" at the bottom.

![](https://i.gyazo.com/4ec89d65f12b4ad742d35afe07b615cc.png)

Once you've created it you'll be taken to the InfoMotion dashboard screen.

![](/_asset/images/enebular-developers-infomotion-dashboard-before.png)

Open the sidebar with "Add Graph". A list of the graphs shown on the dashboard is shown in the sidebar. In this procjet no graphs have been added yet. 

![](https://i.gyazo.com/7e2931dde8a443b6483764480e78cc64.png)

Click on `New Graph` to open the the creation modal. 
By default the Type will be set to `barchart` and DATASOURCE to `test-datasource`. 
The Label corresponds to x axis set as `country` and Value to the y axis `value`. These are set by default.
Edit the name as you like then `create graph`. 

![](https://i.gyazo.com/2f833299dcd5aee2caf822710ef3e830.png)

"test-graph" will now be added to the list. 

![](https://i.gyazo.com/b4af5de8b0ca9dfdf0f16cbe5fc9c3da.png) 

If you click the plus icon to the left of test-graph it will be added to the dashboard. If data is not displayed you may have no data being stored. Select a daterange to a date when data was stored. 

![](https://i.gyazo.com/912da26730a1951e717d0e23a6554124.png)

To resize the graph drag its bottom right corner then press "Save" to save the save layout.

![](https://i.gyazo.com/10ff5017c847cfcc93ba566d35725fcb.png) 

## Well Done!

With that, we've been able to go from creating a data flow right through to displaying a graph that uses the data.

While in this tutorial we displayed a simple pre-made bar graph, you can also create, upload and use your own InfoMotion Type. For details, please refer to the [InfoMotion Type Creation Tutorial](/developers/infomotion-type-tutorial).