---
lastUpdated: 2019-01-09
WIP: true
---

# AWS Lambda deployment {#AWS Lambda deployment}

Deploying a flow from Enebular directly is only temporarily.
For constant deployment AWS lambda can be used.

## Creating a new flow {#Creating a new flow}

First we create a new flow.

![createFlow](./../../../../img/Deploy/Lambda/createFlow.png)

Create a flow and click on [Edit Flow] to launched the Node-RED edit screen.

![editFlow](./../../../../img/Deploy/Lambda/editFlow.png)

Edit the data flow on this edit screen and create a flow.

## Edit data flow {#Edit data flow}

To confirm the operation, create a flow that returns a Lambda Request to a Lambda Response.

![lambdaNode](./../../../../img/Deploy/Lambda/lambdaNode.png)

In the left palette, Lambda Request is in the input group and Lambda Response is in the output group.

![lambdaFlow](./../../../../img/Deploy/Lambda/lambdaFlow.png)

Click on [Deploy] in the upper right of the window to save.

## Deploying to AWS Lambda  {#Deploying to AWS Lambda }

When saving is completed, go to the [Deploy] page from the flow menu.

![deployPage](./../../../../img/Deploy/Lambda/deployPage.png)

Click on [Deploy] to view the deploy screen.

![deployPage2](./../../../../img/Deploy/Lambda/deployPage2.png)

Select Lambda.

![deployPage3](./../../../../img/Deploy/Lambda/deployPage3.png)

Press [New] to open the [Create Connection] modal.
From here move to the AWS console to setup connection settings.

![deployPage4](./../../../../img/Deploy/Lambda/deployPage4.png)

### Create an IAM user to use AWS Lambda from enebular {#Create an IAM user to use AWS Lambda from enebular}

Create an Access Key ID, Secret Access Key for accessing AWS Lambda from enebular.

Go to IAM in AWS and click on Users.

![iam](./../../../../img/Deploy/Lambda/iam-en.png)

Go to the [Add User] screen.
Create a name and check [Programmatic access] for [Access type].

![iam2](./../../../../img/Deploy/Lambda/iam2-en.png)

On the access authority screen, select [Attach existing policy directly], select the policy named [AWSLambdaFullAccess] then go to [Next:Review].

![iam3](./../../../../img/Deploy/Lambda/iam3-en.png)

Check the confirmation screen for any mistakes and Click on [Create user].

![iam4](./../../../../img/Deploy/Lambda/iam4-en.png)

Once complete, download the CSV file containing the access key ID and secret access key (note that it can only be downloaded at this moment).

![iam5](./../../../../img/Deploy/Lambda/iam5-en.png)

### Create ARN role used by AWS Lambda {#Create ARN role used by AWS Lambda}

Create an ARN role for flows deployed in Lambda.

To access a IAM go to [role] in menu.

![role](./../../../../img/Deploy/Lambda/role-en.png)

Go to [Create Role] and Select Lambda for AWS service and continue to [Next:Permissions].

![role2](./../../../../img/Deploy/Lambda/role2-en.png)

Click on [AWSLambdaFullAccess] to set up access privileges.

![role3](./../../../../img/Deploy/Lambda/role3-en.png)

Finally, give it a name and click [Create role].

![role4](./../../../../img/Deploy/Lambda/role4-en.png)

Now you can enter the necessary information in enebular to create a connection.

![connection](./../../../../img/Deploy/Lambda/connection-en.png)

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
        - ![role5](./../../../../img/Deploy/Lambda/role5-en.png)

Once saved, a form appears in which you enter the information of the Lambda function as follows.

![functionForm](./../../../../img/Deploy/Lambda/functionForm.png)
- Function Name
  - An easy-to-understand name (hyphens can not be used)
- Timeout
  - 60
- Memory Size
  - 128

Enter the above values ​​and click [Deploy] to deploy.

![functionForm2](./../../../../img/Deploy/Lambda/functionForm2.png)

Please wait her for a while as it may take upto 1 to 2 minutes.

![deploying](./../../../../img/Deploy/Lambda/deploying.png)

Once deployment is complete, you can see what was deployed with Deployment History.

![deployed](./../../../../img/Deploy/Lambda/deployed.png)

## Confirmation by AWS Lambda console {#Confirmation by AWS Lambda console}

Check the Lambda page in AWS to confirm deployment.
There should be a function name with a new time of deployment.
Try testing it by clicking on [Test].

![confirm](./../../../../img/Deploy/Lambda/confirm-en.png)

An Event setting screen will appear click on [Create]

![confirm2](./../../../../img/Deploy/Lambda/confirm2-en.png)

At the following screen click test to start the test.

![confirm3](./../../../../img/Deploy/Lambda/confirm3-en.png)

If you can see the following screen the test was correct.

![confirm4](./../../../../img/Deploy/Lambda/confirm4-en.png)
