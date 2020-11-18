# How to Recreate Heroku Applications to Correspond with the Removal of Heroku mLab MongoDB Add-on

## Preface

Heroku applications created in enebular version 2.25.3 or below will not operate correctly from November 10, 2020. Heroku applications need to be recreated in enebular version 2.25.4 or above. 

Heroku applications created in enebular version 2.25.3 or below use mLab MongoDB Add-on to store credentials. The Add-on will be deleted from Heroku on November 10, 2020, and Heroku applications will not operate correctly thereafter. 

enebular version 2.25.4 is modified to use Heroku PostgreSQL Add-on instead of mLab MongoDB Add-on. 

## How to Check Whether Recreation of a Heroku Application is Necessary 

The way to check if the Heroku application you are using was created in or below enebular version 2.25.3 is as follows. 

1. How to Display [the list of Heroku applications](https://dashboard.heroku.com/apps). 
1. Click on the name of the application created in enebular and move on to the Heroku application dashboard. 
1. Click on `Settings` to display the Settings tab. 
1. Under Config Vars, choose `Reveal Config Vars`. Credential information will appear. 

Look for `AGENT_HEROKU_VERSION` in the credential information. If the value is 1.2.0 or above, the environment is set for use of PostgreSQL and there is no need to recreate an application. 

If the value of `AGENT_HEROKU_VERSION` is less than 1.2.0 or it does not exist, please recreate the Heroku application by using the following steps.

## How to Recreate a Heroku Application 

Please refer to “[Deploy to Heroku](./index.md)” and perform the following. Please follow the steps described in “Creating an app with the Heroku Button”. Deploy the same flow that was deployed to the previous Heroku application.

If you do not want to change the URL of the Heroku application, change the name of the existing Heroku application, or, delete the existing Heroku application and then create a new Heroku application by the name of the previous application. 

If your data have been stored on a Heroku application, **transfer the data** after recreating the Heroku application. The data storage method differs depending on the Add-on. Please perform data transfer after determining which procedure is appropriate. 

## Precaution 

When you access a Heroku application via a web browser and edit/save a flow, the flow would be saved only within the Heroku application. If there is a difference between a flow saved in enebular and a flow in the existing Heroku application, please perform flow migration separately using functions such as import/export provided in the Flow Editor. 
