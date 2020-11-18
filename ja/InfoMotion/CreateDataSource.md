# Data Sourceの作成 {#MakeDataSource}

Data Sourceとは、InfoMotion（グラフ）に表示する際に参照するデータ先です。

InfoMotionを利用するためにはData Sourceの登録が必要です。

FlowでData Sourceにデータを登録し、InfoMotionでは、Data Sourceに登録されたデータをビジュアライズするのが想定する使い方になります。

![](../_asset/images/InfoMotion/datasources/aboutdatasource.png) 

ダッシュボードのData Sourceタブから作成・編集ができます。

![](../_asset/images/InfoMotion/datasources/datasource.png) 

Data Sourceの種類には以下があります。詳細は各ページを参照してください。

- [Pubnub](./DataSource/Pubnub/CreateDataSource.md)
- [Firebase](./DataSource/Firebase/CreateDataSource.md)
- [API Gateway](./DataSource/APIGateway/CreateDataSource.md)
- [NEC BaaS](./DataSource/NEC-BaaS/CreateDataSource.md)

Data Sourceタブでは、Data Sourceに入力した値を使って実際にData Sourceに接続できるかどうかを確認し、結果をConnected列に表示します。確認できるData Sourceの種類はFirebaseとPubNubです。

確認結果は4つのアイコンで表します。各アイコンの意味は下記の通りです。

* \- : 確認不可であることを示します(API Gateway、NEC BaaSの場合は灰色となります)。
* 緑色: Data Sourceに接続でき、Data Sourceからデータを取得できたことを表します。
* 黄色: Data Sourceに接続できたが、データの取得を実施した結果データが取れなかったことを表します。Data Sourceの`ref`、`channel`にデータが入っていないか、指定が間違っている可能性があります。
* 赤色: Data Sourceに接続できなかったことを表します。

アイコンにマウスを載せることで、より詳しい情報をツールチップで表示します。
