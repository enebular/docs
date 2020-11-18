# Project {#Project}

**Project** とは文字通りプロジェクトの単位です。[Introduction](../INDEX.md) でも触れたように、アセットやデバイスの管理ができます（画像内でデバイスがプロジェクトに含まれていないのは、デプロイされている実際の場所が外部のサービスの環境であるためです）。

![enebular overview](../../img/Projects/index-projectOverview.png)

サインイン後の画面でプロジェクト一覧を確認できます。
`Create Project` からプロジェクトを作成できます。

![create project](../../img/Projects/index-createProject.png)

各列の説明を以下に示します。

| 項目名 | 説明 |
| --- | --- |
| Project | プロジェクトの名前を表示します。 |
| Owner | Project Owner のユーザー名を表示します。 (注1)|
| Type | 設定されているプランを表示します。 (注2) |
| IP Restrictions | IP アドレスによるアクセス制限が有効か無効かを表示します。 (注3) |
| Last Updated | プロジェクトの設定を更新した年月日と時刻を表示します。 |

- 注1: Project Owner については [アクセス権の編集](../Config/Access.md)をご覧ください。
- 注2: プランについては [enebular の料金・プラン](https://www.enebular.com/ja/plan/)をご覧ください。
- 注3: IP アドレスによるアクセス制限については [IP アドレスによる Project のアクセス制限](../Project/IPAccessControl.md)をご覧ください。

プロジェクトを選択すると、プロジェクトの管理画面に移動します。

![select project](../../img/Projects/index-selectProject.png)

プロジェクトの管理画面には以下のようなページがあります。

## Assets {#Assets}

プロジェクト内で管理するコンテンツです。

- [Flows](../Flows/Introduction.md): Node-RED で作成したデータフロー
- [Files](../Files/Introduction.md): Asset として登録したファイル
- [AI Models](../AIModels/Introduction.md):  機械学習・ディープラーニングのモデル
- [InfoMotions](../InfoMotion/Introduction.md): データの可視化を行うグラフダッシュボード
- [InfoTypes](../InfoMotion/InfoTypeIntroduction.md): InfoMotion で利用するグラフのタイプ
- [Published Assets](../Discover/UnpublishAssets.md): 公開されたアセットの一覧リスト

### Assets 検索 {#Assets 検索}

アカウントに紐づく Asset を、ページ右上部の検索ボックスから検索することが出来ます。
検索結果はプロジェクトの管理画面に一覧表示されます。

検索ボックスからは Asset 名で検索することが可能です。

![select project](../../img/Projects/index-searchAssets.png)

## Devices {#Devices}

プロジェクト内で管理するデバイスです。ここでいうデバイスとは Asset がデプロイされているデバイスを指します。

- [Devices](../Device/DeviceList.md): デバイスの一覧
- [Licenses](../Device/LicenseManager.md): 有料機能を利用するためのライセンス管理
- [Action History](../Device/ActionHistory.md): 実行した Action の履歴

## Config {#Config}

プロジェクトに関する設定です。

- [Connections](../Config/Connections.md): 外部サービスとの連携先（コネクション）を管理
- [Data Sources](../InfoMotion/CreateDataSource.md): グラフに利用するデータソースの登録
- [Access](../Config/Access.md): プロジェクトのアクセスコントロール管理
- [Settings](../Project/Settings.md): プロジェクトの設定