---
lastUpdated: 2017-12-01
---

# アクセス権の編集

enebular の Project や Asset のアクセス権についてのドキュメントです。

## ユーザーの種類

まずはユーザーの種類について把握しましょう。以下の 3 種類のユーザーがいます。

- Project Owner
- Project Admin
- Project Collaborator
- Outside Collaborator

![](../_asset/images/enebular-developers-aboutaccess.png)

**Project Owner** は、Project の管理者です。Project のメンバーの編集、その Project に属するすべての Asset のアクセス管理ができます。

**Project Admin** は、Project に他のメンバーを招待することができます。Project Admin になると、自動的に Project に属するすべての Asset の admin になります。

**Project Collaborator** は、Project のメンバーです。その Project に属するすべての Asset にアクセスができます。

**Outside Collaborator** は、ひとつの Asset に紐付いたメンバーです。ひとつの Asset に対してアクセスできます。

Project Owner は Project の作成者が自動的に Project Owner になります。

Project Collaborator は Project のサイドバーの Access から行くことができる Access ページで Invite できます（Invite できるのは、enebular に登録したメールアカウントのみです）。

![](https://i.gyazo.com/de4082a2bf03d51d473dbb1e9bf5f78b.png)

Outside Collaborator は Flow の詳細画面の Access タブから行くことができる Access ページで Invite できます（Invite できるのは、enebular に登録したメールアカウントのみです）。

![](https://i.gyazo.com/cc774e8f901c3629f2c79098172dba61.png)

## Asset privilege について

そして、3 種類のユーザーにはそれぞれの Asset に対して Asset privilege という権限を設定できます。

- owner: 閲覧・編集・デプロイ・削除・メンバーの追加
- admin: 閲覧・編集・デプロイ・削除・メンバーの追加
- superdev: 閲覧・編集・デプロイ
- developer: 閲覧・編集
- operator: 閲覧・デプロイ
- user: 閲覧

Asset privilege は Flow の詳細画面の Access タブから行くことができる Access ページで設定できます。

メンバーの Role の部分を選択することで権限を変更できます。

![](https://i.gyazo.com/b6ba9650ebedf08291983c7e472146e0.png)

default privilege は Project Collaborator を Invite した際に、そのメンバーに自動的に与えられる権限です。

![](https://i.gyazo.com/5d2970b4226d5633c2e81f7abc5f721f.png)

なお Outside Collaborator は、default privilege に関わらずデフォルトで user 権限が与えられます。
