# Usage Information {#Usage Information}

You can view the enebular usage state of your account on "Usage Information". Click on the User menu on the top right and select "Usage Information".

Usage Information is the summary of all the usage of the following categories:

- Projects
- Licenses
- Flows
- Files
- AI Models
- InfoTypes
- Log Exports
- Private Nodes
- Published Private Nodes

Each category's stats are divided into 3 columns

- Current month
- Previous month
- Current State

Usage information is calculated for all projects where the user has an "Owner" or "Admin" privilege for the project.

It may take about an hour from the time of deployment for the result to be reflected on the Usage Information.

## Projects

Projects Usage consists of:

- Projects (Free) (Number of Free projects)
- Projects (Enterprise) (Number of Enterprise projects)

The "Current State" column displays the current number of existing Free or Enterprise projects.

Note: If a Project (Free) was created in the given month and was converted to Project (Enterprise) in that month, it would only be counted as 0 Project (Free) and 1 Project (Enterprise) for the given month; but if the Project (Free) was created in the previous month and was converted to Project (Enterprise) in the next month, it would be counted as 1 Project (Free) and 0 Project (Enterprise) in the previous month and 0 Project (Free) and 1 Project (Enterprise) in the given month.

## Licenses

License Usage consists of the following License Status:

- Issued (Number of Issued Licenses)
- Registered (Number of Registered Licenses)
- Deleted (Number of Deleted Licenses)

Usage is displayed for all the projects (All Projects) and for each project separately (Project Name).

The "Current State" column displays the current number of each License Status.

Note: If the same License was Issued, Registered and Deleted in the same month, it would be counted as 1 Issued, 1 Registered, 1 Deleted for that month. Assuming that is the only License in a Project, the Current State of the License would be 0 Issued, 0 Registered, 1 Deleted.

## Flows

Flow usage consists of:

- Count (Number of Flows)
- Deploy Count (Total number of successful Flow Deploys, which includes deploys from AWS IoT, Pelion, Heroku, and AWS Lambda)
- Data Transfer Out (Total amount of data transferred for successful Flow Deploys)
- Deploy to Devices (Number of successful Flow Deploys to devices which includes AWS IoT and Pelion)
- Scheduled Deploy to Devices (Number of successful deploys to devices which includes AWS IoT and Pelion, that were scheduled)
- Start Flow (Number of successful Start Flow actions)
- Stop Flow (Number of successful Stop Flow actions)
- Scheduled Start Flow (Number of successful Start Flow actions that were scheduled)
- Scheduled Stop Flow (Number of successful Stop Flow actions that were scheduled)

Usage is displayed for all the projects (All Projects) and for each project separately (Project Name).

The "Current State" column displays the current state of each stat.

## Files

File usage consists of:

- Count (Number of Files)
- Storage (Total amount of data storage used to store all files and all versions of each file)
- Deploy Count (Total number of successful File Deploys)
- Data Transfer Out (Total amount of data transferred for successful File Deploys)
- Deploy to Devices (Number of successful File Deploys to devices which includes AWS IoT and Pelion)
- Scheduled Deploy to Devices (Number of successful File Deploys to devices which includes AWS IoT and Pelion, that were scheduled)

Usage is displayed for all the projects (All Projects) and for each project separately (Project Name).

The "Current State" column displays the current state of each stat.

Note: Storage would be calculated based on maximum size of the File in that month, i.e. If the user updates a File with a new File with the smaller size, it would still calculate the storage based on the bigger size in that month and would count the new size only in the subsequent months.

## AI Models

AI Model usage consists of:

- Count (Number of AI models)
- Storage (Total amount of data storage used to store all AI models and all versions of each AI Model)
- Deploy Count (Total number of successful AI Model Deploys)
- Data Transfer Out (Total amount of data transferred for successful AI Deploys)
- Deploy to Devices (Number of successful AI Deploys to devices which includes AWS IoT and Pelion)
- Scheduled Deploy to Devices (Number of successful AI Deploys to devices which includes AWS IoT and Pelion, that were scheduled)

Usage is displayed for all the projects (All Projects) and for each project separately (Project Name).

The "Current State" column displays the current state of each stat.

Note: Storage would be calculated based on maximum size of the AI Model in that month, i.e. If the user updates a AI Model with a new AI Model with the smaller size, it would still calculate the storage based on the bigger size in that month and would count the new size only in the subsequent months.

## InfoTypes

InfoType usage consists of:

- Count (Number of InfoTypes)
- Storage (Total amount of data storage used to store InfoTypes)

Usage is displayed for all the projects (All Projects) and for each project separately (Project Name).

The "Current State" column displays the current state of each stat.

Note: Storage would be calculated based on maximum size of the InfoType in that month, i.e. If the user updates a InfoType with a new InfoType with the smaller size, it would still calculate the storage based on the bigger size in that month and would count the new size only in the subsequent months.

## Log Exports

Log Exports usage consists of:

- Count
  Total number of times Log Export was executed
- Zip Size
  Total size of ZIP files generated as result of Log Export

Usage is displayed for all the projects (All Projects) and for each project separately (Project Name).

The "Current State" column displays the current state of each stat.

## Asset Imports/Exports

Log Imports/Exports usage consists of:

- Import Count
  Total number of times Asset Import was executed
- Import Zip Size
  Total size of ZIP files generated as a result of Asset Import (*)
- Export Count
  Total number of times Asset Export was executed
- Export Zip Size
  Total size of ZIP files generated as a result of Asset Export (**)

(*) Not added if no Assets were imported
(**) Not added if no Assets were exported

Usage is displayed for all the projects (All Projects) and for each project separately (Project Name).
The "Current State" column displays the current state of each stat.

## Private Nodes

Private Nodes Usage shows the deploy destination to which the flow with the private node was deployed. For the convenience of a simpler description, “deploying a flow using a private node” shall be referred to as “Deploy of a private node/private nodes” hereafter. 

A private node is shown in the format `<package name@package version>`. 

Private nodes usage consists of the following: 

-	Connection  
  Connection name of the deploy destination
-	Deploy Target  
  Name of deploy destination 
-	Current Month  
  Number of deployment made during the month to the deploy destination specified by Connection and Deploy Target
-	Previous Month  
  Number of deployment made during the previous month to the deploy destination specified by Connection and Deploy Target
-	Total  
  Total number of deployment made to the deploy destination specified by Connection and Deploy Target
-	Current State  
  Shows whether a Flow is currently deployed to the destination specified by Connection and Deploy Target
    - deployed: Private node is deployed.
    - not deployed: Private node is not deployed. 

The following deploy destinations will not be displayed. 
-	Deploy destinations to which private nodes have never been deployed. 
-	Deploy destinations to which private nodes have been deployed in the past but not currently (Current State is ‘not deployed’) and no deployment has been made in the previous or current month. 

## Published Private Nodes

Usage of Private nodes published on Discover (Published Private Nodes) consists of the following. 

A private node is shown in the format `<package name@package version>`. 

-	Import Count (Number of times a private node has been imported to a project) 
    - Current Month  
      Number of times a private node was imported during the current month
    - Previous Month  
      Number of times a private node was imported during the previous month
    - Current State  
      Number of projects to which a private node is imported at the time the screen is displayed (If a private node is deleted from a project, the number will be subtracted) 

-	Deploy Target Count (Number of destinations a private node has been deployed to)
    - Current Month  
      The number of unique deployment destinations to which private node has been deployed in the current month. Even if another flow that does not contain a private node is deployed to this destination, the count would not be decreased
    - Previous Month  
      The number of unique deployment destinations to which private node has been deployed in the previous month. Even if another flow that does not contain a private node is deployed to this destination, the count would not be decreased, the number will not be subtracted
    - Current State  
      The number of unique destinations to which a private node has already been deployed at the time the screen is displayed

-	Deploy Count (Number of times a private node has been deployed) 
    - Current Month  
      Number of times a private node is deployed during the current month
    - Previous Month  
      Number of times a private node was deployed during the previous month
    - Current State  
      Number of times a private node has been deployed since it was published on Discover up to the time the screen is displayed
