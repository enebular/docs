---
lastUpdated: 2019-01-04
---

# Editing Access Permissions {#Editing Access Permissions}

The following covers enebular's project and asset access permissions.

## User Types {#User Types}

First, let's go over the user types. There are the following three types of users.

- Project Owner
- Project Admin
- Project Collaborator
- Outside Collaborator

![assetPriviliege](./../../img/Config/Access-assetPriviliege.png)

The **Project Owner** is the project manager. They can edit project members and manage access to all of the assets in a project.

The **Project Admin** can invite other collaborators into the project. A Project Admin is automatically admin for all of the assets in a project.

A **Project Collaborator** is a project member. They can access all of the assets in a project.

An **Outside Collaborator** is a member linked to one asset. They can access that one particular asset.

The creator of a project automatically becomes the project owner.

Project collaborators can be invited from the "Access" page which can be navigated to from "Access" in the project sidebar (You can only invite those who are signed up to enebular).

![projectMembers](./../../img/Config/Access-projectMembers.png)

Outside collaborators can be invited from the "Access" page which can be navigated to from the "Access" tab in the flow details screen (You can only invite those who are signed up to enebular).

![Access-invite](./../../img/Config/Access-invite.png)

## About Asset Privileges {#About Asset Privileges}

There are up to 4 basic privileges that come with assets: `read`, `edit`, `deploy`, `publish`.

|            | read | edit | deploy | publish |
| :--------- | :--- | :--- | :----- | :------ |
| flow       | o    | o    | o      | o       |
| file       | o    | o    | o      | -       |
| infomotion | o    | o    | -      | -       |
| infotype   | o    | o    | -      | o       |

The Project Owner, Project Admin, and Project Collaborators who create Assets automatically have all privileges plus an additional privilege `delete`.

| privilege | description                                                                                  |
| :-------- | :------------------------------------------------------------------------------------------- |
| read      | user can read the asset                                                                      |
| edit      | user can edit the asset                                                                      |
| deploy    | user can deploy the asset                                                                    |
| publish   | user can publish the asset to share it publicly in [Discover](https://enebular.com/discover) |
| delete    | user can delete the asset                                                                    |

(`edit`, `deploy`, `publish` automatically comes with the `read` privilege.)

Asset privilege can be set on the "Access" page which can be navigated to from the "Access" tab in the flow details screen.

![Access-role](./../../img/Config/Access-role.png)

The "default privilege" is automatically assigned to members when invited as a project collaborator.

Outside collaborators are assigned `read` by default when invited regardless of the "default privilege".
