# Create First InfoMotion

[DataSourceについて](../CreateDataSource.html) で DataSource が出来たら InfoMotion を作りましょう。

InfoMotion とは DataSource で取り出したデータをグラフで分かりやすく見えるようにする機能です。

## InfoType のアップロード

DataSource の登録が終わったら、InfoType をアップロードします。今回はサンプルの棒グラフを使います。

<ul>
  <li><a href="/public/sample/sample-bar-chart.zip" target="_blank">サンプル InfoType のダウンロード(zip形式)</a></li>
</ul>

ダウンロードが終わったら、サイドバーの InfoType タブをクリックします。

![](/public/images/developers/enebular-developers-asset-infotype.png)

Upload InfoType からモーダルを開きます。ファイルをドロップできるエリアがあるので、ダウンロードした zip ファイルの中身をドラックアンドドロップします。

![](https://i.gyazo.com/5b461780e0d2afe6758d87ecb7ae7801.png)


`category` は好きなものを選択して Upload ボタンをクリックします。

![](/public/images/developers/enebular-developers-upload-infotype.png)

アップロードが終わったら、サイドバーの InfoMotion タブをクリックします。

##  InfoMotionの作成

DataSource と InfoType を使って InfoMotion を作成しましょう。Create Infomotion を押してモーダルを開きます。

![](/public/images/developers/enebular-developers-asset-infomotion.png)

InfoMotion のタイトルをつけます。InfoMotion へのデフォルトのアクセス権（default role to asset）は今回はとりあえず `admin` に設定してください。一番下の category は何でも良いです。

![](/public/images/developers/enebular-developers-asset-infomotion-modal.png)

作成したら、InfoMotion のダッシュボード画面に移動します。

![](/public/images/developers/enebular-developers-infomotion-dashboard-before.png)

Add Graph でサイドバーを開きます。このサイドバーには、ダッシュボードで表示するグラフのリストが表示されます。

![](/public/images/developers/enebular-developers-infomotion-add-graph.png)

グラフを登録してみましょう。Create Graph を押します。

![](/public/images/developers/enebular-developers-infomotion-create-graph.png)

NAME は適当に入力して、 TYPE は さきほどアップロードした InfoType の `sample-bar-chart`、 DATASOURCE は さきほど作成した DataSource の `test-datasource` が選択されているかと思います。


label は x軸、value は y軸なので、 label に `dataid` を、value に `v` を設定します（LabelNames は今回省略します）。

![](/public/images/developers/enebular-developers-infomotion-create-graph-filled.png)

Create Graph を押すと、test-graph がリストに追加されます。


![](/public/images/developers/enebular-developers-infomotion-graphs.png)

test-graph の左にあるプラスアイコンを押すと、ダッシュボードに追加されます。

![](/public/images/developers/enebular-developers-infomotion-dashboard.png)

パネルの右下をひっぱって横に伸ばして、 Save を押すとレイアウトが保存されます。

![](/public/images/developers/enebular-developers-infomotion-dashboard-full.png)