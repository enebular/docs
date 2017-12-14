---
lastUpdated: 2017-12-14
---

# InfoMotion ダッシュボード

DataSource の作成と InfoType のアップロードが完了したら、InfoMotioin ダッシュボード が作成できます。

enebular の管理画面の Create InfoMotion から作成できます。

- `name`：名前
- `description`：説明
- `default previllege`：デフォルトのアクセス権（詳しくは [Access](../Access/index.md)を ご覧ください）
- `category`：カテゴリー

![](/_asset/images/InfoMotion/enebular-developers-create-dashboard.png)

「Add graph」を押すとグラフ作成を行うサイドバーが出てきます。以下項目を埋めましょう。

- `name`：名前
- `type`：グラフのタイプ（infomotion-toolで作成したもの）
- `datasource`：利用する DataSource
- グラフ固有のスキーマ設定

![](/_asset/images/InfoMotion/enebular-developers-create-infomotion.png)

項目を埋めたら Add graph で作成後、プラスボタンでダッシュボードに追加できます。

![](/_asset/images/InfoMotion/enebular-developers-display-infomotion.png)

## ダッシュボードの操作

ダッシュボードでいくつかの操作ができます。

- `save` - ダッシュボードの配置を保存します。
- `filters` - データにフィルターをかけることができます。
- `share` - ダッシュボードを外部に貼り付けることができます。詳しくは [Share InfoMotion](../Deploy/ShareInfoMotion.md) をご覧ください。

![](/_asset/images/InfoMotion/enebular-developer-dashboard-options.png)

## グラフの操作

グラフに対してもいくつかの操作ができます。

- `download data` - グラフのデータを json 形式でダウンロードできます。
- `share infomotion` - グラフをシェアできます。
- `filter` - データにフィルターをかけることができます。
- `edit` - グラフの設定を変更できます。
- `remove` - ダッシュボードからグラフを削除します。

![](/_asset/images/InfoMotion/enebular-developers-infomotion-options.png)
