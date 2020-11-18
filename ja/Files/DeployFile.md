---
lastUpdated: 2019-01-22
---

# ファイルのデプロイ {#Deploying Files}

enebular にアセットとして登録したファイルを有料デバイスにデプロイすることができます。ここではそのデプロイ方法について説明します。

## 対象デバイス {#Supported Devices}

以下の条件を満たしているデバイスのみにファイルをデプロイ出来ます。

- 有料デバイスであること
- デバイスが接続中であること
- デバイスにバージョン 2.3.0 以降の enebular-agent がインストールされていること

## デプロイ方法 {#Deployment Steps}

まずは、プロジェクトのメニューから **Files** を選択して登録済みファイルアセットの一覧を表示します。

![File List](./../../img/File/File-list.png)

ファイル一覧からデプロイしたいファイルを選択すると、ファイルの **Overview** が表示されます。

![File List](./../../img/File/File-overview.png)

**Deploy** ボタンをクリックし、表示される Connection 一覧から、デプロイしたいデバイスのある Connection を選択してください。

※Connection をまだ登録していない場合、[Flow デプロイの説明](../Deploy/index.md)を参考にして登録してください。

![File List](./../../img/File/DeployFile-connection.png)

Connection に登録されているデバイスの一覧が表示されます。デプロイしたいデバイスを選択して **Deploy** ボタンをクリックします。

![File List](./../../img/File/DeployFile-device.png)

デプロイ処理が始まり、ファイルの **Deployment History** が表示されます。デバイスへのデプロイ状態を確認できます。

デプロイ処理が無事に完了すると、**Deploy Status** 欄で **Deployed** が表示されます。
