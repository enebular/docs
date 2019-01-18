---
lastUpdated: 2019-01-09
WIP: true
---

# AWS Lambda deployment

Deploying a flow from Enebular directly is only temporarily.
For constant deployment AWS lambda can be used.

## Creating a new flow

First we create a new flow.

![](https://i.gyazo.com/43daa8adfa160e0db4723a6cb62ec6aa.png)

Create a flow and click on [Edit Flow] to launched the Node-RED edit screen.

![](https://i.gyazo.com/53824241d584d099aa810e6b3cbab645.png)

Edit the data flow on this edit screen and create a flow.

## Edit data flow

To confirm the operation, create a flow that returns a Lambda Request to a Lambda Response.

![image](../../../_asset/images/Deploy/DeployFlow/lambda/deploy-deployflow-lambda_03.png)

In the left palette, Lambda Request is in the input group and Lambda Response is in the output group.

![](https://i.gyazo.com/b474a682aefc4cef62650b0e883f354c.png)

Click on [Deploy] in the upper right of the window to save.

## Deploying to AWS Lambda  {#Deploying to AWS Lambda}

When saving is completed, go to the [Deploy] page from the flow menu.

![](https://i.gyazo.com/6d8611cac4c92473225ebfca7ded8c57.png)

Click on [Deploy] to view the deploy screen.

![](https://i.gyazo.com/88e68c4779864cf8c6f24f6262575e4b.png)

Select Lambda.

![](https://i.gyazo.com/edc9714f15afec8911f67f31cf7141bd.png)

Press [New] to open the [Create Connection] modal.
From here move to the AWS console to setup connection settings.

![](https://i.gyazo.com/3478881bcdb98b1319141df71eed2dd8.png)

### Create an IAM user to use AWS Lambda from enebular

Create an Access Key ID, Secret Access Key for accessing AWS Lambda from enebular.

Go to IAM in AWS and click on Users.

![](https://i.gyazo.com/a36079814c6663851f0c93b82b1ea589.png)

Go to the [Add User] screen.
Create a name and check [Programmatic access] for [Access type].

![](https://i.gyazo.com/6280a25da09312e3bbbef9bae5eedd0d.png)

On the access authority screen, select [Attach existing policy directly], select the policy named [AWSLambdaFullAccess] then go to [Next:Review].

![](https://i.gyazo.com/913d013b1a9f32b0f6a2698e5a12ec32.png)

Check the confirmation screen for any mistakes and Click on [Create user].

![](https://i.gyazo.com/f54408921e545524629b666da55fccff.png)

Once complete, download the CSV file containing the access key ID and secret access key (note that it can only be downloaded at this moment).

![](https://i.gyazo.com/7d99dbaf67c0c9faf1b9de4c50adabd9.png)

### Create ARN role used by AWS Lambda

Create an ARN role for flows deployed in Lambda.

To access a IAM go to [role] in menu.

![](https://i.gyazo.com/b5286ed7c5c0f7a80ab4375f87c0ff2b.png)

Go to [Create Role] and Select Lambda for AWS service and continue to [Next:Permissions].

![](https://i.gyazo.com/85435143d5fea6b3e90805de5cd4c388.png)

Click on [AWSLambdaFullAccess] to set up access privileges.

![](https://i.gyazo.com/e1a69b8bb472eb97011523b140856b4a.png)

Finally, give it a name and click [Create role].

![](https://i.gyazo.com/c6264921396b43008c6a0a87002ceaf0.png)

Now you can enter the necessary information in enebular to create a connection.

![](https://i.gyazo.com/bb59cf50a2ae8726bd03f2a4d2f8437a.png)

- Connection Name
  - A simple name
- AWS Access Key ID
  - Copied from downloaded CSV file
- AWS Secret Access Key
  - Copied from downloaded CSV file
- Region
  - ap-northeast-1 (depending on your location)
- IAM Role ARN
  - Confirmation ARN of the created role
    - ![](https://i.gyazo.com/a435ff36c4fd877589b9036783780d70.png)

Once saved, a form appears in which you enter the information of the Lambda function as follows.

![](https://i.gyazo.com/d89fd1efd0a174c8b223c1367c9557e6.png)

- Function Name
  - An easy-to-understand name (hyphens can not be used)
- Timeout
  - 60
- Memory Size
  - 128

Enter the above values ​​and click [Deploy] to deploy.

![](https://i.gyazo.com/1cc9f0b2f920449f42f0911c31ff326d.png)

Please wait her for a while as it may take upto 1 to 2 minutes.

![](https://i.gyazo.com/34b178154e86ccf151a88351f83db6c6.png)

Once deployment is complete, you can see what was deployed with Deployment History.

![](https://i.gyazo.com/f4d810f405533c474b85d3660156de3e.png)

## Confirmation by AWS Lambda console

Check the Lambda page in AWS to confirm deployment.
There should be a function name with a new time of deployment.
Try testing it by clicking on [Test].

![](https://i.gyazo.com/32d1a956bcdc491b2357b06b95324ced.png)

An Event setting screen will appear click on [Create]

![](https://i.gyazo.com/531f6e2427313a76b675a23ee3e0ff12.png)

At the following screen click test to start the test.

![](https://i.gyazo.com/e3d0756b594c0aeb4de73568e27b2d0c.png)

If you can see the following screen the test was correct.

![](https://i.gyazo.com/27ebe0ae26f0f7fb68380508c44f0a25.png)
