---
lastUpdated: 2018-02-01
---

# Editing Access Permissions

The following covers enebular's project and asset access permissions.

## User Types

First, let's go over the user types. There are the following three types of users.

- Project Owner
- Project Collaborator
- Outside Collaborator

![](../_asset/images/enebular-developers-aboutaccess.png)

The **Project Owner** is the project manager. They can edit project members and manage access to all of the assets in a project.

A **Project Collaborator** is a project member. They can access all of the assets in a project.

An **Outside Collaborator** is a member linked to one asset. They can access that one particular asset.

The creator of a project automatically becomes the project owner.

Project collaborators can be invited from the "Access" page which can be navigated to from "Access" in the project sidebar (You can only invite those who are signed up to enebular).

![](https://i.gyazo.com/de4082a2bf03d51d473dbb1e9bf5f78b.png)

Outside collaborators can be invited from the "Access" page which can be navigated to from the "Access" tab in the flow details screen (You can only invite those who are signed up to enebular).

![](https://i.gyazo.com/cc774e8f901c3629f2c79098172dba61.png)

## About Asset Privileges

Next, permissions called "Asset privileges" can be configured for each of the assets of the three user types.

- owner: view / edit / deploy / add members
- superdev: view / edit / deploy
- developer: view / edit
- operator: view / deploy
- user: view

Asset privileges can be set on the "Access" page which can be navigated to from the "Access" tab in the flow details screen.

The permissions can be changes by selecting the "Role" for the member.

![](https://i.gyazo.com/b6ba9650ebedf08291983c7e472146e0.png)

The "default privilege" is that automatically assigned to members when invited as a project collaborator.

![](https://i.gyazo.com/5d2970b4226d5633c2e81f7abc5f721f.png)

Outside collaborators are assigned `user` by default regardless of the "default privilege".
