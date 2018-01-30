---
lastUpdated: 2017-01-27
---

# Deploying to Heroku

This page covers Heroku deploys. A Heroku deploy is the ability to deploy a flow created in enebular to an enebular Node-RED on Heroku.

## Creating the Flow to Send to Heroku

![](https://i.gyazo.com/194b5c56abc221193690461193e159a0.png)

First, create a new flow from "Assets".

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_02.png)

Create the flow you want to send to Heroku, and then deploy it to save it.

![](https://i.gyazo.com/bfb9c0e25ad5e4a372a149336bdef8b8.png)

## Deploy Settings

Following that we configure the deploy.

![](https://i.gyazo.com/16c258270a9b0f0d609fce45da7df221.png)

Once the flow has been created, move to the "Deploy" page from the menu at the top.

![](https://i.gyazo.com/b016e602e7e679ade922a9ed1546120d.png)

Select "Heroku" for "Select Connection Type".

![](https://i.gyazo.com/bf6f7c21b8ef82d8747e4bda706d2997.png)

After selecting "Heroku", we create a Heroku app from the "Deploy to Heroku" that appears in the right column.

## Creating an app with the Heroku Button

Use the Heroku button to create the app. This step can be skipped for those who have already created one.

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_07.png)

After pressing the Heroku button, log in with the Heroku login screen that appears if you weren't already logged in.

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_08.png)

The Heroku app settings will be displayed.

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_09.png)

Set an easy to understand name for the App name.

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_10.png)

Set the USERNAME and PASSWORD to be used for login after the enebular Node-RED has been created.

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_11.png)

After confirming the settings press the "Deploy" button.

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_12.png)

The app is being created...

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_13.png)

Once it has been created press the "View" button to check it.

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_14.png)

You'll be asked to provide the USERNAME and PASSWORD to log into the enebular Node-RED, so enter those that you set above.

## Deploy Settings

Once the Heroku app has been created we configure the deploy settings. Return to the previous screen and continue on with the configuration.

![](https://i.gyazo.com/de104b3c5331776e71db63c1ed4e2562.png)

Press "New".

![](https://i.gyazo.com/2377f74621a7ad3cd79d06691dac0031.png)

Assign an easy to understand name to the "Connection Name". The "Heroku API Token" can be seen on the Heroku settings screen.

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_17.png)

Press "Account Settings".

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_18.png)

Go to "Account" on the "Manage Account" page.

![image](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_19.png)

Go to the API Key section and display the API Key with "Reveal".

![](https://i.gyazo.com/8972e5c2fc9b08ffd88541cff90518fd.png)

Copy the API Key into "Heroku API Token" and press "Save".

## Deploying

With the connection saved and Heroku selected for the "Select Connection Type", a list of the apps on the Heroku account will be displayed.

![](https://i.gyazo.com/08a53d358e13c1115fc091cc6ed33802.png)

From here, select the Heroku application you just created and press "Deploy".

![](https://i.gyazo.com/e12c8bf818aec63ff674ff648916e8ab.png)

After wating for some time "Deploy Added" will be displayed once the deploy has finished.

![](https://i.gyazo.com/133531b98309d31e45957138a7784d1c.png)

If you check the Heroku app you will be able to see that the flow has been deployed.

![](/_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_02.png)
