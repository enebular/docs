# IP Access Control {#IPAccessControl}

## Overview {#Overview}

This function allows to restrict access to a Project based on a specific set of IP addresses and reject access from others.

For example, this function can be used to grant access to a Project only for users from a specific company network.

## Description {#Description}

IP Access Control function restricts access from the following interfaces when it is activated.

enebular.com
enebular editor

If there is an attemp to access these interfaces from client IP addresses which are not authorized, the following will be shown.

- Projects page: Shows project names, but when a Project with restricted access is selected, enebular will show an error message.
- Assets page: Assets of Projects with restricted access will not be shown.

NOTE: If this function is enabled while the Projects page is open, IP address restriction will be activated at the time of screen transition, and then Projects with restricted access will no longer be accessible.

### Projects page

The status of IP Access Control of a Project is visible on the Projects page under the following column.

#### IP Restrictions

The status of IP Access Control of a Project is visible:

- Enabled: IP Access Control is enabled.
- Disabled: IP Access Control is disalbed.

## Constraints {#Constraints}

- This function can only be used on Projects under Enterprise Plan.
- Only IPv4 type of IP addresses are supported.
- Up to 32 IP Addresses are supported per Project.

## Applying for activating IP Access Control {#Application}

1. Click on the user name after signing into enebular, then click on "Support" in the menu shown to open the Support form.
1. Select the project from "Choose a Project"  to request IP Address Control for.
1. Enter your company name in "Company (optional)."
1. Enter "Requesting IP Address Control configuration" in "Subject."
1. Enter the following information in "Message."
    - Configuration type:
      - One of "New", "Update", "Terminate"
    - For "New"：IP addresses to grant access.
    - For "Update"：IP addresses previously configured, new IP Addresses..
    - For "Terminate": Enter "Requesting termination of IP Access Control." All IP addresses will be deleted.
1. Review all items to make sure all entries are entered correctly, and click on the Submit button.

NOTE: Please contact support@enebular.com for the questions on IP Address Control function.

## An Example

```
Choose a Project: Select the project name to enable the function.
Company (optional): Company Name
Subject: Requesting IP Address Control configuration
Message:
"New"
10.100.20.2,17.200.10.3

"Update" (Add IP address 242.33.1.33)
Previously configured IP Addresses:10.100.20.2,17.200.10.3
New IP Addresses:10.100.20.2,17.200.10.3,242.33.1.33

"Update" (Replace 17.200.10.3)
Previously configured IP Addresses:10.100.20.2,17.200.10.3
New IP Addresses:10.100.20.2,17.200.11.55

"Update" (Remove 17.200.10.3)
Previously configured IP Addresses: 110.100.20.2,17.200.10.3
New IP Addresses: 10.100.20.2

"Termination"
Requesting termination of IP Access Control.
```
