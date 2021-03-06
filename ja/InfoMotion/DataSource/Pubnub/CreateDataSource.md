## PubNub Data Source の作成 {#Create PubNub Data Source}

InfoMotionで表示したい  `Data Source` のページを表示します。
右下の + ボタンをクリックして、 `Data Source`を追加します。

![CreateDataSource-datasource](./../../../../img/InfoMotion/DataSource/Pubnub/CreateDataSource-datasource.png)


`Title` に任意の名前を入力し、DataSource Type から [pubnub] を選択してください。
pubnub 用の設定画面が開きます。

`Count` は [100] のままに設定して、他、設定項目を入力し [Save]を押すことで保存されます。
各設定項目については下記を参照してください。

![CreateDataSource-settings](./../../../../img/InfoMotion/DataSource/Pubnub/CreateDataSource-settings.png)

## 設定項目の確認 {#設定項目の確認}

`Publish key`, `Subscribe key`  は pubnub アプリの keys から確認できます。

![Setup-keys](./../../../../img/InfoMotion/DataSource/Pubnub/Setup-Keys.png)

`channel` にはフローで設定したもの、あるいはこれから作成する channel を入力します。

![CreateFlow-pubnubOutNodeComplete](./../../../../img/InfoMotion/DataSource/Pubnub/CreateFlow-pubnubOutNodeComplete.png)


## InfoMotionの作成 {#Create InfoMotion}

Data Source を使用する準備ができました。
InfoMotion ダッシュボードを作成する際に作った Data Source を選択することでデータをグラフに反映できます。

詳しくは以下のページを順に参照してください。

* [Sample InfoTypes](./../../SampleInfoTypes.md)
* [Upload an InfoType](./../../UploadInfoType.md)
* [Create InfoMotion](./../../CreateInfoMotion.md)
