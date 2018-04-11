---
lastUpdated: 2018-03-28
---

# Getting Started

このチュートリアルでは、以下のことを行います。

*   Projectの作成
*   Milkcocoa (※) を利用したFlowの作成
*   作成したFlowのデータを使用したグラフ（InfoMotion）の作成

※ [Milkcocoa](https://mlkcca.com) とは、IoTデバイス・スマートフォン・PC間で簡単にリアルタイムなデータのやり取りが出来るようになるクラウドプラットフォームです。

## Projectの作成

enebular を始めるには、まず Project を作成します。ログイン後の画面にある Create Project からプロジェクトを作成します。

![](https://i.gyazo.com/1e90909b5ecefe56ff1934aa41e5a7b9.png)

適当な title を入力して、作成します。

![](/_asset/images/enebular-developers-createprojectmodal.png)

![](https://i.gyazo.com/69a5b817e8681349f45373eb7aead486.png)

## 新規Flowの作成

Project を作成したら、まず Flow を作成しましょう。作成した Project を選択して Project の管理画面に移動します。

![](https://i.gyazo.com/e521afd4d489291aa774fe9429cf3321.png)

右下の + を押すと Asset を作成するモーダルが開きます。

Asset Type は `flow` を選択して、Flow のタイトルをつけます。Flow へのデフォルトのアクセス権（default role to asset）は今回はとりあえず `superdev` に設定してください。一番下の category は何でも良いです。

![](https://i.gyazo.com/257abde3b17b7d2bab924b2d0ad32ac8.png)

Continue を押すと作成が完了します。

作成が完了すると、Flow の詳細ページに移動します。

![](https://i.gyazo.com/7cb9b53259022696e7cc47e4fa81d89b.png)

Edit Flow を押すと、Node-RED の編集画面が立ち上がります。

![](/_asset/images/enebular-developers-nodered-before.png)

## データフローの編集・デプロイ

編集画面にて、左に並んでいる Node(APIの名前がついているボックス)をシートに置いて、Node 同士を繋いでデータフローを作成します。作成したら、右上の **Deploy** を押すとデプロイできます。

![](https://i.gyazo.com/2dd11f23a605ec41b73d413176d206c2.png)

図のフローは、10秒に1回、[Milkcocoa](https://mlkcca.com) のデータストアに、ランダムな7種類のID（`dataid`）をラベルとした 0〜50 のランダムな値（`v`）を保存するものです。

下記の図を参考に、フローを作成ください。**inject node** で10秒ごとにフローが実行されるよう設定し、**function node** で プロパティを設定し、**milkcocoa node** で保存先である Milkcocoa のアプリ情報（`app_id`）・データストア情報（`datastore`）・認証情報（`API Key`、`API Secret`）を設定します。

![](/_asset/images/enebular-developers-milkcocoaflow.png)

function node のコードは以下です。

```
var newMes = {};

newMes.payload = {};
newMes.payload.v = Math.floor(Math.random()*50 + 1);
newMes.payload.dataid = 'data-'+Math.floor(Math.random()*7 + 1);

return newMes;
```

milkcocoa node の **Data Store** は `tutorial`、**Operation** は `Push` です。

なお、この Flow を作成する前に、Milkcocoa の[チュートリアルページのMilkcocoaを使う準備をする](https://mlkcca.com/tutorial/page2.html)を参考に、アプリを作成して `app_id` と、Milkcocoa 管理画面内の「認証」タブから作成出来る`API Key`と`API Secret`を控えておいて下さい。

**※注1**：無料版の enebular では、デプロイ後 30 分アクセスがなければ自動的にスリープします。現在、無料版のみ提供しています。

**※注2**：Flow の編集画面を開いたまま放置すると、Deploy 時に「Unauthorized」と失敗するようになりますので、その場合はリロードして下さい。


## DataSource の登録

データプローのデプロイが完了したら、データの可視化をしましょう。

可視化をする前に、用語として以下を理解しておいて下さい。

* InfoMotion: 実際に見るグラフダッシュボードのことです。InfoType と DataSource を組み合わせて作成します。「Infographic よりも動きがあるもの」という意味で、Info と Motion を組み合わせた造語です。
* InfoType: グラフの種類（円グラフや棒グラフなど）のことです。
* DataSource: グラフに表示するデータです。現在、データを受け取る種類に `apiGateway` と `milkcocoa` があり、今回は `milkcocoa` を使用します。

では、最初にサイドバーの DataSource タブから DataSource の登録をします。右下の + から DataSource 作成モーダルを開きます。

![](https://i.gyazo.com/f63357415d983465b637c81dbf4014d3.png)

「Select DataSource Type」で「milkcocoa」を選択し、必要な情報を入力します。Node-RED Editor 内の milkcocoa node で指定した`App Id`、`DataStore`、`API Key`、`Secret Key`(API Secret)　を入力します。Save をクリックして保存します。

![](https://i.gyazo.com/7b0b7eebebe0828e564fdcb2863a47b9.png)

## InfoType のアップロード

DataSource の登録が終わったら、InfoType をアップロードします。今回はサンプルの棒グラフを使います。

<ul>
  <li><a href="/_asset/sample/sample-bar-chart.zip" target="_blank">サンプル InfoType のダウンロード(zip形式)</a></li>
</ul>

ダウンロードが終わったら、サイドバーの InfoType タブをクリックします。

![](https://i.gyazo.com/1d6ba758c53ff94c66a9545fd83aa859.png)

右下の + からモーダルを開きます。ファイルをドロップできるエリアがあるので、ダウンロードした zip ファイルの中身をドラックアンドドロップします。

![](https://i.gyazo.com/5b461780e0d2afe6758d87ecb7ae7801.png)

`category` は好きなものを選択して Upload ボタンをクリックします。

![](/_asset/images/enebular-developers-upload-infotype.png)

アップロードが終わったら、以下のようなプレビュー画面が表示されます。

![](https://i.gyazo.com/a8b352503ecbfaa14e75c48f032f5636.png)

アップロードが成功したことを確認したので、パンくずからプロジェクト画面に戻り、サイドバーの InfoMotion タブをクリックします。

##  InfoMotionの作成

DataSource と InfoType を使って InfoMotion を作成しましょう。右下の + を押してモーダルを開きます。

![](https://i.gyazo.com/7841284aa8720e3b47956d26ebbd5848.png)

InfoMotion のタイトルをつけます。InfoMotion へのデフォルトのアクセス権（default role to asset）は今回はとりあえず `superdev` に設定してください。一番下の category は何でも良いです。

![](https://i.gyazo.com/4ec89d65f12b4ad742d35afe07b615cc.png)

作成したら、InfoMotion のダッシュボード画面に移動します。

![](/_asset/images/enebular-developers-infomotion-dashboard-before.png)

Add Graph でサイドバーを開きます。このサイドバーには、ダッシュボードで表示するグラフのリストが表示されます。

![](/_asset/images/enebular-developers-infomotion-add-graph.png)

グラフを登録してみましょう。Create Graph を押します。

![](https://i.gyazo.com/20840d9afa6a2b70d1b5894f95ba107b.png)

NAME は適当に入力して、 TYPE は さきほどアップロードした InfoType の `barchart`、 DATASOURCE は さきほど作成した DataSource の `test-datasource` が選択されているかと思います。

label は x軸、value は y軸なので、 label に `dataid` を、value に `v` を設定します（LabelNames は今回省略します）。

![](/_asset/images/enebular-developers-infomotion-create-graph-filled.png)

Create Graph を押すと、test-graph がリストに追加されます。

![](/_asset/images/enebular-developers-infomotion-graphs.png)

test-graph の左にあるプラスアイコンを押すと、ダッシュボードに追加されます。（グラフが表示されない場合は、右上の日付範囲を変えてみてください）

![](/_asset/images/enebular-developers-infomotion-dashboard.png)

パネルの右下をひっぱって横に伸ばして、 Save を押すとレイアウトが保存されます。

![](/_asset/images/enebular-developers-infomotion-dashboard-full.png)


## Well Done!

これで無事、データフローの作成から、そのデータを使ったグラフの表示まで一通りできました。

今回は、データを用意されたシンプルな棒グラフで表示しましたが、自身でInfoMotion Typeを作成してアップロードして使用することも出来ます。詳しい方法については、[InfoMotion Type作成のチュートリアル](/developers/infomotion-type-tutorial)をご覧下さい。
