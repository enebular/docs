---
lastUpdated: 2017-01-30
---

# Deploying to AWS IoT

Flows created on enebular can be deployed to AWS IoT.

## Creating a Flow

For this example, make a flow like the following.

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_02.png)

Once the flow is ready, deploy it to save it.

![](https://i.gyazo.com/bfb9c0e25ad5e4a372a149336bdef8b8.png)

Once it has been saved, press "Deploy" on the flow's "Deploy" tab.

![](https://i.gyazo.com/16c258270a9b0f0d609fce45da7df221.png)

This will take you do the "Deploy Flow" screen. Choose `AWS IoT` for "Select Connection Type" and wait.

![](https://i.gyazo.com/80831b57617fda2ae76ad4f26d3f88c1.png)

## Creating the Configuration on AWS IoT

We'll create a configuration on AWS IoT to use this time.

### Creating a Thing

Select "Manage > Things" from the menu and press "Register a thing".

![](https://i.gyazo.com/653f48dfa7b14c3c6e670dbf7862a8be.png)

Press "Create a single thing".

![](https://i.gyazo.com/261575293420845b96a58acbcd4a119a.png)

Give it an appropriate name and move to the next step.

![](https://i.gyazo.com/93bdb0ab9e12d49456adfdd5e4dc87ab.png)

### Creating the Certificates

Press the "Create certificate" of One-click certificate creation.

![](https://i.gyazo.com/4d975a2aee62da86c79625a706e17a7f.png)

Download all of the files and activate it.

![](https://i.gyazo.com/f75929d1eefab6e8a499e85b41434d64.png)

The activation will complete.

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_11.png)

### Creating the New Policies

Select "Secure > Policies" from the menu and press "Create a policy".

![](https://i.gyazo.com/360b1075f4ee5dfd1019c322b5d1e37e.png)

Specify an easy to understand name.

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_14.png)

Next we add a statement.

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_15.png)

Specify the policy statements as shown below.

* Action
    * iot:*
* Resource ARN
    * *

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_16.png)

This policy statement configuration provides a wide degree of access to allow for the tests here. Once you're ready, please fine tune the policy.

Press the create button to save the policy.

![](https://i.gyazo.com/7bb0ea26adc7f408941c76caf484185f.png)

## Attaching the Policy to the Certificates

As things are now the policy and certificates are not tied together, so we will attached them here. Move to the details screen of the thing you created just before, and select the certificate from the security section in the menu.

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_18.png)

Select "Attach policy" from the "Actions" menu at the top right.

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_19.png)

Attach the policy you created just before.

![image](/_asset/images/Deploy/DeployFlow/AWSIoT/deploy-deployflow-awsiot_20.png)

Once that completes, you can confirm that the certificate is tied to the policy and thing.

![](https://i.gyazo.com/a21acb6987f7f823cfbd6f5cdf42babf.png)

![](https://i.gyazo.com/1947b0e395d51dd4067d50fbc172f2eb.png)

## Creating an IAM User for AWS IoT

In order to use AWS IoT from enebular, create an Access Key ID and Secret Access Key.

In the "Users" section of the IAM menu, press "Add user".

![](https://i.gyazo.com/5365a9c626c6fb82f15aa7450be25b1e.png)

In the details section, set an easy to understand name and enable "Programmatic access".

![](https://i.gyazo.com/2dac145aaa109bd6b59e7f02a2c81880.png)

For the permissions, select "Attach existing policies directly", then select the "AWSIoTFullAccess" policy and move to the next step.

![](https://i.gyazo.com/2ba4485a00fa21bcd11cdfab04070af3.png)

Finally confirm there are no mistakes.

![](https://i.gyazo.com/b55f423d3380f02e52ad3957f68bb7a1.png)

Once completed, download the CSV file that contains the Access Key ID and Secret Access Key (note that this is the only chance to download it).

![](https://i.gyazo.com/43887a5e4d39397ac005d05f571082a5.png)

## Update the Flow with the AWS IoT Settings

We return to the AWS IoT settings screen from before and update the AWS IoT settings.

![](https://i.gyazo.com/80831b57617fda2ae76ad4f26d3f88c1.png)

Press "New" to the right of "Select Connection". Enter the required information and create the connection.

![](https://i.gyazo.com/b79f9f1beaa467c1b54638afb79c1ee7.png)

* Connection Name
    * Any alphameric characters
* AWS Access Key ID
    * Copy from the downloaded CSV file
* AWS Secret Access Key
    * Copy from the downloaded CSV file
* Region
    * The part before the `amazonaws.com` section of the AWS IoT Endpoint URL (below)
* AWS IoT Endpoint URL
    *  This can be seen in the "Interact" section of the thing menu (refer to the image below)

![](https://i.gyazo.com/e1f3d7ab36d625ec31bbb1e122cdd367.png)

When you select the created connection the registered things are displayed.

![](https://i.gyazo.com/21ff895a55f684d63b318ef565ba7f41.png)

The thing will still be disconnected. Here, 'disconnected' means that the AWS IoT thing hasn't been deployed to yet or it is actually disconnected.

Let's now leave the enebular side and prepare a device setup on a PC.

## Device (Agent) Setup

Here we set up a device. Note that the wrapper device code base that receives commands from the device manager and carries out the appropriate operations is referred to the **agent** here.

The agent can be downloaded from <a href="https://github.com/enebular/enebular-awsiot-agent" target="_blank">GitHub</a>.

Build the core enebular-agent module.

```
cd agent
npm run build
```

Install the Node-RED instance.

```
cd ../node-red
npm install
```

Install the AWS IoT port's modules and build it.

```
cd ../ports/awsiot
npm install
npm run build
```

There is an 'example' module under the AWS IoT port's directory that is just a simple wrapper of the actual AWS IoT port module. Go to its directory and install its modules. If you check the example's `package.json` file, you can see that it is setting the environment variable that specifies the Node-RED directory.

```
cd example
npm install
```

Copy the AWS IoT Thing certificate files you downloaded just before to the `certs` directory in the example folder.

![](https://i.gyazo.com/2990d00298630a3ccfdffe7827131287.png)

Update the example's `config.json` file with the connection details (including the correct paths of the certificate files).

```json
{
  "host": "<THING SHADOW REST API ENDPOINT>",
  "port": 8883,
  "clientId": "<THING NAME>",
  "thingName": "<THING NAME>",
  "caCert": "./certs/VeriSign-Class 3-Public-Primary-Certification-Authority-G5.pem",
  "clientCert": "./certs/<THING CERT>",
  "privateKey": "./certs/<THING PRIVATE KEY>",
  "topic": "aws/things/<THING NAME>/shadow/update"
}
```

### Running

Once the above setup has been completed, enebular-agent can be started from the example directory with the `npm run start` command.

By default enebular-agent will not log to the console, however this can be enabled by setting the `DEBUG` environment variable to either `info` or `debug`.

```
DEBUG=info npm run start
```

Log messages similar to the following should be displayed.

![](https://i.gyazo.com/c2cbd942f6f12c1236703593a14dc94b.png)


If enebular-agent successfully starts and connects to AWS IoT, it will display the following log message.

```
internal: aws-iot: Connected to AWS IoT
```

Once that message is displayed, the device can be used with enebular.

## Deploying the Flow

We're now ready to deploy the flow. Move back to the screen below.

![](https://i.gyazo.com/21ff895a55f684d63b318ef565ba7f41.png)

When you select the check-box on the left and press "Deploy" the deploy will complete. If the "Deploy Status" has tick mark in the deploy history, then it has succeeded.

![](https://i.gyazo.com/698d8cecdc353a76b9f3b84788abfa5d.png)

You'll also be able to see the device side log updating.

![](https://i.gyazo.com/e2e15ad09331937ff8585c14276d6c65.png)

![](https://i.gyazo.com/bed3a72a00a9cb68244d52014d273281.jpg)

While `unauthenticated` will be displayed, this is just because a license hasn't been purchased. Purchasing a license is not required for the flow to run, but by purchasing a license status and log monitoring becomes available.

When running the agent core you can specify various configuration options. For the AWS IoT port, this can be seen in the `ports/awsiot/src/index.js` source code. For all of the configuration options that the agent core supports, refer to the `agent/src/index.js` source code file.
