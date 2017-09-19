# Get Started

このチュートリアルでは、以下のことを行います。

*   Projectの作成
*   Milkcocoaを利用したFlowの作成
*   作成したFlowのデータを使用したグラフ（InfoMotion）の作成

## Projectの作成

enebular を始めるには、まず Project を作成します。**Project** とは文字通りプロジェクトの単位です。Project は、データフローである **Flow** 、データの可視化を行うグラフである **InfoMotion** や、**InfoMotion** をパネル上で並べた **InfoDash** などの **Asset** を複数持つことが出来ます。

![](/public/images/developers/enebular-developers-aboutproject.png)

Add Project からプロジェクトを作成します。

![](/public/images/developers/enebular-developers-createproject.png)

## 新規Flowの作成

Projectを作成したら、まずFlowを作成しましょう。作成したProjectを選択してProjectの管理画面に移動した後、Create Asset を押すとモーダルが開きます。

![](/public/images/developers/enebular-developers-projectdashboard.png)

Asset Type は `flow` を選択、適当なアイコンを選択して、Flow のタイトルをつけます。

![](/public/images/developers/enebular-developers-createassetmodal.png)

下部には、アクセス権を設定するラジオボタンがあるので、`admin` に設定してください。Continue を押すと作成が完了します。

![](/public/images/developers/enebular-developers-createassetaccess.png)

作成が完了すると、Flow の詳細ページに移動します。Edit Flow を押すと、Node-REDの編集画面が立ち上がります。この編集画面でデータフローを編集してFlowを作成します。

![](/public/images/developers/enebular-developers-flowdashboard.png)

## データフローの編集・デプロイ

編集画面にて、左に並んでいるNode(APIの名前がついているボックス)をシートに置いて、Node同士を繋いでデータフローを作成します。作成したら、右上の“Deploy”を押すとデプロイできます。

![](/public/images/developers/enebular-developers-nodered.png)

図のフローは、10秒に1回、[Milkcocoa（クラウドサービス）](//mlkcca.com)のデータストアに、ランダムな7種類のID（`dataid`）をラベルとした0〜50のランダムな値（`v`）を保存するものです。

下記の図を参考に、フローを作成ください。**timestampノード**で10秒ごとにフローが実行されるよう設定し、**functionノード**で`dataid`と`v`の値を設定し、**milkcocoaノード**で保存先であるMilkcocoaのアプリ情報（`app_id`）・データストア情報（`datastore`）・認証情報（`API Key`、`API Secret`）を設定します。

![](/public/images/developers/enebular-developers-milkcocoaflow.png)

functionノードのコードは以下です。

```
var newMes = {};

newMes.payload = {};
newMes.payload.dataid = Math.floor(Math.random()*7 + 1);
newMes.payload.v = Math.floor(Math.random()*50 + 1);

return newMes;
```

milkcocoaノードの**Data Store**は`tutorial`、**Operation**は`Push`です。

なお、このFlowを作成する前に、Milkcocoaの[チュートリアルページのMilkcocoaを使う準備をする](https://mlkcca.com/tutorial/page2.html)を参考に、アプリを作成して`app_id`と、Milkcocoa管理画面内の「認証」タブから作成出来る`API Key`と`API Secret`を控えておいて下さい。

**※注1**：無料版のenebularでは、デプロイ後30分アクセスがなければ自動的にスリープします。現在、無料版のみ提供しています。

**※注2**：Flowの編集画面を開いたまま放置すると、Deploy時に「Unauthorized」と失敗するようになりますので、その場合はリロードして下さい。

## データの可視化（Datasourceの登録とInfoMotionの作成）

データプローのデプロイが完了したら、データの可視化をしましょう。

可視化をする前に、用語として以下を理解しておいて下さい。

*   InfoMotion: いわゆるグラフです。「Infographicよりも動きがあるもの」という意味で、InfoとMotionを組み合わせた造語です。
*   Datasource: グラフに表示するデータです。現在、データを受け取る種類に`apiGateway`と`milkcocoa`があり、今回はMilkcocoaを使用します。

では、最初にサイドバーの DataSource タブから DataSource の登録をします。Create DataSourceボタンからモーダルを開きます。

![](/public/images/developers/enebular-developers-datasource.png)

「Select Datasource Type」で「milkcocoa」を選択し、必要な情報を入力します。STEP3のデータフローで指定した`app_id`、`datasotre`、`API Key`、`API Secret`を入力します。「SAVE」ボタンをクリックして保存します。

![](/public/images/developers/enebular-developers-createdatasource.png)

Datasourceの登録が終わったら、InfoMotionを作成しましょう。「CREATE GRAPH...」ボタンから作成し、作成されたDatasourceをクリックして詳細画面へ移動します。

![](/public/images/developers/enebular-developers-createinfomotion.png)

今回は、デフォルトで用意されているInfoMotion Type（※）である棒グラフ（`core-barchart`）を使用します。
※InfoMotion Typeとは、グラフの種類（いわゆる棒グラフや円グラフ）のことを差します。

下図のように設定します。`DATASOURCE`には、さきほど登録したDatasourceを設定します。さらに、棒グラフには`label`（x軸）と`value`（y軸）となるkeyを設定します。今回はデータのIDを`dataid`、値を`v`としたので、それぞれを`label`、`value`に設定します。

![](/public/images/developers/enebular-developers-infomotionsettings.png)

作成されたグラフをクリックすると、グラフへ移動します。

![](/public/images/developers/enebular-developers-infomotiongraph.png)

## Well Done!

今回は、データを用意されたシンプルな棒グラフで表示しましたが、自身でInfoMotion Typeを作成してアップロードして使用することも出来ます。詳しい方法については、[InfoMotion Type作成のチュートリアル](/developers/infomotion-type-tutorial)をご覧下さい。
