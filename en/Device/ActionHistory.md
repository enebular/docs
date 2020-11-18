# Action History {#Action History}

Action History displays a history of the Actions you performed.
This function is only available for Enterprise Plan project.

An Action can be any of the following:

- Flow Deploy
- File Deploy
- AI Deploy
- Start Flow
- Stop Flow
- Start Remote M.
- Stop Remote M.

Deploying a Flow to a multiple devices is considered one Action.
So deploying a Flow to 3 devices you selected from the Device List is one Action.

A single Action History Item shows the summary of the Action performed with the following information.

- Action Type
- Asset Name (Only for Deploy-related Actions)
- Asset Version (Only for Deploy-related Actions)
- Target Count
- Status
- Connection Name
- Triggered By
- Requested Time
- Scheduled Time
- Status Last Updated Time

**Status**

| Status     | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| Successful | When an Action executed on multiple devices are all Successful      |
| Failed     | When an Action executed on multiple devices have at least 1 Failure |
| Processing | When an Action executed on multiple devices is not complete         |

## Action History Detail

Clicking on a single Action History Item will transition the page to the Action History Detail page. This is useful when you perform an Action on multiple targets/devices and want to know the result of each individual target/device.

The Action History Detail page provides the following information:

- Device Name
- Status
- Requested Time
- Status Last Updated Time
- Summary of the Action
  - Action Type
  - Asset Name (Only for Deploy-related Actions)
  - Asset Version (Only for Deploy-related Actions)
  - Connection Name
  - Connection Type
  - Triggered By
  - Device Count
  - Success
  - Failed
  - Processing

Deployment can be repeated with Redeploy feature (includes Flow, File, AI Model deploy; Flow Start / Flow Stop cannot be performed again) by clicking `Redeploy` button .
An opened dialog allows you to see all Deployment Targets and status of the previous deployment to this device.
You can change selected targets for new Deployment which would be performed after clicking `Redeploy` button inside a dialog.

**Status**

| Status          | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| Requested       | When an Action is requested for devices |
| Deploy Pending  | When a Deploy request is pended |
| Deploying       | When a Flow deploy, File deploy, or AI deploy request is being executed |
| Deployed        | When a Flow deploy, File deploy, or AI deploy request is executed successfully |
| Deployed Failed | When a Flow deploy, File deploy, or AI deploy request is failed |
| Executed        | When a Start Flow or Stop Flow request is executed successfully |
| Success         | When a Start Remote M. or Stop Remote M. requrst is executed successfully |
| Failed          | When a Start Flow, Stop Flow, Start Remote M. or Stop Remote M. request is failed |
| Overridden      | When another Action is executed while an Action is being executed |

# Scheduled Actions {#Scheduled Actions}

From the Action History page, on the top right, click on `Scheduled` to transition to the Scheduled Actions page.

You can create a Scheduled Action from the Devices page.

Actions that are scheduled to execute will appear here. When it is time for the Scheduled Action to execute, it will automatically be removed from the Scheduled Actions page, and added into the Action History page.

A single Scheduled Action Item provides the following information:

- Action Type
- Asset Name (Only for Deploy-related Actions)
- Asset Version (Only for Deploy-related Actions)
- Scheduled Time
- Device Count
- Connection Name
- Triggered By
- Requested Time
- An option to cancel the Scheduled Action \*1

\*1 A Scheduled Action can only be cancelled when the current time is at least 5 minutes before the Scheduled Time of execution.

## Scheduled Action Detail

Clicking on a single Scheduled Action Item will transition the page to the Scheduled Action Detail page. This is useful when you schedule an Action on multiple targets/devices and want to know the details of each target/device.

The Scheduled Action Detail page provides the following information:

- Device Name
- Status
- Requested Time
- Summary of the Action
  - Action Type
  - Scheduled Time
  - Asset Name (Only for Deploy-related Actions)
  - Asset Version (Only for Deploy-related Actions)
  - Connection Name
  - Connection Type
  - Triggered By
  - Device Count

**Status**

| Status     | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| Scheduled  | When an Action is scheduled |