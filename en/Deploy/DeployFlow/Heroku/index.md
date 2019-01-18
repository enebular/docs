---
lastUpdated: 2019-01-09
---

# Deploying to Heroku {#Deploying to Heroku}

This page covers Heroku deploys. A Heroku deploy is the ability to deploy a flow created in enebular to an enebular Node-RED on Heroku.

## Creating the Flow to Send to Heroku {#Creating the Flow to Send to Heroku}

![Heroku-index-createflow](./../../../../img/Deploy/Heroku-index-createflow.png)

First, create a new flow from "Assets".

![image](../../../_asset/images/Deploy/DeployFlow/Heroku/deploy-deployflow-heroku_02.png)

Create the flow you want to send to Heroku, and then deploy it to save it.

![Heroku-index-deploybutton](./../../../../img/Deploy/Heroku-index-deploybutton.png)

## Deploy Settings {#Deploy Settings}

Configure your flow deployment by clicking on Deploy.

![otherEnvDeploy](./../../../../img/GetStarted/FlowDeployment-otherEnvDeploy.png)

Click on the "Add Connection".

![addConnection](./../../../../img/GetStarted/FlowDeployment-addConnection.png)

Select "Heroku" for "Select Connection Type".

Input a "Connection Name". Get the "Heroku API Token" from the Heroku settings screen.

![selectHeroku](./../../../../img/GetStarted/FlowDeployment-selectHeroku.png)

## Creating an app with the Heroku Button {#Creating an app with the Heroku Button}

![accountSettings](./../../../../img/GetStarted/FlowDeployment-accountSettings.png)

Go to "Account" on the "Manage Account" page.

![account](./../../../../img/GetStarted/FlowDeployment-account.png)

Go to the API Key section and display the API Key with "Reveal".

![revealApikey](./../../../../img/GetStarted/FlowDeployment-revealApikey.png)

Copy the API Key into "Heroku API Token" and click "Save".

![inputAPIkey](./../../../../img/GetStarted/FlowDeployment-inputAPIkey.png)

Click created connection.

![createdConnection](./../../../../img/GetStarted/FlowDeployment-createdConnection.png)

We can create a Heroku app from the "Deploy to Heroku" button on the bottom.

![herokuButton](./../../../../img/GetStarted/FlowDeployment-herokuButton.png)

## Creating an app with the Heroku Button {#Creating an app with the Heroku Button}

Use the Heroku button to create the app. This step can be skipped for those who have already created one.

![loginHeroku](./../../../../img/GetStarted/FlowDeployment-loginHeroku.png)

After clicking on the Heroku button, if not logged in, log in with the Heroku login screen that appears.

![herokuSetting](./../../../../img/GetStarted/FlowDeployment-herokuSetting.png)

Heroku The Heroku app settings will be displayed.

![appName](./../../../../img/GetStarted/FlowDeployment-appName.png)

## Deploy Settings {#Deploy Settings}

![userName](./../../../../img/GetStarted/FlowDeployment-userName.png)

Set the USERNAME and PASSWORD to be used for login after the enebular Node-RED has been created.

![deployApp](./../../../../img/GetStarted/FlowDeployment-deployApp.png)

After confirming the settings press the "Deploy" button. ¥

After confirming the settings click the "Deploy" button. If you haven't added your credit card information to heroku before, the following modal will show up.
Using the Enebular app is free so one needs to not worry about Enebular charging.

![creditCard](./../../../../img/GetStarted/FlowDeployment-creditCard.png)

After registering the credit card, heroku will start setting up the app.

![creatingHeroku](./../../../../img/GetStarted/FlowDeployment-creatingHeroku.png)

The app is being created...

![doneCreated](./../../../../img/GetStarted/FlowDeployment-doneCreated.png)

Once it has been created click the "View" button to check it.

![agentOnHeroku](./../../../../img/GetStarted/FlowDeployment-agentOnHeroku.png)

You'll be asked to provide the USERNAME and PASSWORD to log into the enebular Node-RED, so enter those that you set above.

## Deploying {#Deploying}

With the connection saved and Heroku selected as a "Connection Type", a list of the apps on the Heroku account should be displayed. From here, select the Heroku application you just created and press "Deploy".

![appList](./../../../../img/GetStarted/FlowDeployment-appList.png)

Wait a moment for the "Deploy Added" to be displayed to confirm the app has been deployed.

If you check the Heroku app you will be able to see that the flow has been deployed.

![openApp](./../../../../img/GetStarted/FlowDeployment-openApp.png)

Check the Heroku app to see if the flow has been deployed.

![confirmDeployed](./../../../../img/GetStarted/FlowDeployment-confirmDeployed.png)