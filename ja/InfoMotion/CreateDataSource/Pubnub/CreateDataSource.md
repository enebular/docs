---
lastUpdated: 2018-08-07
---

## DataSource の作成

フローを作成したものと同じプロジェクトの `Data Source` のページを表示します。
右下の + ボタンをクリックして、 `Data Source`を追加します。

![](/_asset/images/InfoMotion/datasources/pubnub/datasource.png) 

`Title` に任意の名前を入力し、DataSource Type から [pubnub] を選択してください。
pubnub 用の設定画面が開きます。

`Publish key`, `Subscribe key` には先ほど作成した pubnub アプリのものを入力してください。
`channel` には仮に設定した "test" を入力します。
`Count` は [100] のままに設定して、[Save] をクリックして設定を保存します。

![](/_asset/images/InfoMotion/datasources/pubnub/settings.png) 


DataSource を使用する準備ができました。
InfoMotion ダッシュボードを作成する際に作った DataSource を選択することでデータをグラフに反映できます。
詳しくは以下のページを順に参照してください。

* [Sample infotypes](./SampleInfoTypes.md)
* [Upload an InfoType](./UploadInfoType.md)
* [Create InfoMotion](./CreateInfoMotion.md)
