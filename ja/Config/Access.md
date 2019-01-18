---
lastUpdated: 2019-01-04
---

# アクセス権の編集

enebular の Project や Asset のアクセス権についてのドキュメントです。

## ユーザーの種類

まずはユーザーの種類について把握しましょう。以下の 3 種類のユーザーがいます。

- Project Owner
- Project Admin
- Project Collaborator
- Outside Collaborator

![assetPriviliege](./../../img/Config/Access-assetPriviliege.png)

**Project Owner** は、Project の管理者です。Project のメンバーの編集、その Project に属するすべての Asset のアクセス管理ができます。

**Project Admin** は、Project に他のメンバーを招待することができます。Project Admin になると、自動的に Project に属するすべての Asset の admin になります。

**Project Collaborator** は、Project のメンバーです。その Project に属するすべての Asset にアクセスができます。

**Outside Collaborator** は、ひとつの Asset に紐付いたメンバーです。ひとつの Asset に対してアクセスできます。

Project Owner は Project の作成者が自動的に Project Owner になります。

Project Collaborator は Project のサイドバーの Access から行くことができる Access ページで Invite できます（Invite できるのは、enebular に登録したメールアカウントのみです）。

![projectMembers](./../../img/Config/Access-projectMembers.png)

Outside Collaborator は Flow の詳細画面の Access タブから行くことができる Access ページで Invite できます（Invite できるのは、enebular に登録したメールアカウントのみです）。

![Access-invite](./../../img/Config/Access-invite.png)

## Asset privilege について

そして、3 種類のユーザーにはそれぞれの Asset に対して Asset privilege という権限を設定できます。

- owner: 閲覧・編集・デプロイ・削除・Outside Collaborator の追加・削除・Project Collaborator の権限を変更
- admin: 閲覧・編集・デプロイ・削除・Outside Collaborator の追加・削除・Project Collaborator の権限を変更
- superdev: 閲覧・編集・デプロイ
- developer: 閲覧・編集
- operator: 閲覧・デプロイ
- user: 閲覧

Asset privilege は Flow の詳細画面の Access タブから行くことができる Access ページで設定できます。

メンバーの Role の部分を選択することで権限を変更できます。

![Access-role](./../../img/Config/Access-role.png)

default privilege は Project Collaborator を Invite した際に、そのメンバーに自動的に与えられる権限です。

![Access-default](./../../img/Config/Access-default.png)

なお Outside Collaborator は、default privilege に関わらずデフォルトで user 権限が与えられます。
