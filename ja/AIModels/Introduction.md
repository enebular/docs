# AI Models {#AI Models}

**AI Models** とは、機械学習・ディープラーニングのモデルをエッジデバイスにデプロイできる機能です。モデルのデプロイ後に Node-RED フローから操作することができます。モデルの実行・停止・削除は enebular 上で行えます。

### Prerequisites {#Prerequisites}

**AI Models** 機能を使用するためには、以下の条件を満たしている必要があります。

1. enebular-agent:
   enebular-agent のバーションが 2.7.0 以上で、デバイスの設定が完了していること。

2. License:
   AI Models は有料機能のため、動作させるデバイスにライセンスが登録されていること。

3. AI project:
   AI Model のフォルダ（model files, weight files, data）が `.zip` 形式で圧縮されていること。

4. Docker:
   複数の AI Model を 1 つのデバイスにデプロイしても、競合せずに動作させることができます。これは Docker を用いたコンテナによる分離を行なっているためです。enebular-agent には Docker が含まれていないため、ユーザは予め個別にインストールしておく必要があります。
   Docker は コンテナを実行するために root 権限を必要とします。そのため、インストール後の作業として、Dockerをインストールしてからroot 権限で “docker” UNIXグループに enebular-agent の実行ユーザを追加する必要があります。さらに詳しい情報は[この](https://docs.docker.com/install/linux/linux-postinstall/)リンクを参照してください。
  

## Registering AI models {#Registering AI models }

デバイスに機械学習・ディープラーニングモデルをデプロイする前に、AI Model をアップロードする必要があります。

AI Model の登録に関しては、[Registering AI models](RegisteringAiModel.md)を参考にしてください。

## AI Models Listing {#AI Models Listing}

Asset のメニューから登録した **AI Model** を閲覧することができます。AI Model １つを選択すると個別の詳細画面に遷移します。

## Management options {#Management options}

AI Model の個別ページから以下のメニューを選択することができます。

### Overview {#Overview}

`Overview` では登録したモデルの詳細情報・設定値を閲覧できます。詳細は[Registering AI models](RegisteringAiModel.md)を確認してください。

モデルの設定値の編集、モデルのデプロイが可能です。

AI Models のデプロイの仕組みにつきまして、[Deploying AI models](DeployAiModel.md)を参照してください。

### Version {#Version}

AI Models のバージョン管理ができます。Enterprise Plan プロジェクトでのみ利用可能です。

AI Model のバージョン管理の詳細については、[Version Control AI Models](VersionControlAiModel.md)を参照してください。

### Deploy {#Deploy}

モデルのデプロイ履歴を閲覧できます。
モデルのデプロイを行うことも可能です。

### Access {#Access}

モデルへのアクセス権限を設定することができます。

### Settings {#Settings}

モデルの名称・説明を編集できます。モデルを削除することも可能です。

## Device Model Management {#Device Model Management}

デバイスの詳細画面からモデルの管理が可能です。

プロジェクトメニューから **Device List** を選択し、デバイスを選択すると、デバイスの情報が表示されます。
モデルのステータスとモデルの実行・停止・削除は **Manage Models** から可能です。

## AI Model access from Flows {#AI Model access from Flows}

フローが AI Model と通信することができます。

詳細は[Accessing model From Flows](AccessAiModelFromFlow.md)を参照してください。
