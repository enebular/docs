---
lastUpdated: 2018-08-10
---

# DataSource の作成


フローを作成したものと同じプロジェクトの `Data Souce` のページを表示します。
右下の + ボタンをクリックして、 `Data Source`を追加します。

![CreateDataSource-datasource](./../../../../img/InfoMotion/DataSource/Firebase/CreateDataSource-datasource.png)


`Title` に任意の名前を入力し、DataSource Type から [Firebase] を選択してください。
Firebase 用の設定画面が開きます。
設定項目を入力し [Save] を押して保存してください。
各設定項目の確認方法は下記を参考にしてください。


![CreateDataSource-settings](./../../../../img/InfoMotion/DataSource/Firebase/CreateDataSource-settings.png)


DataSourceが追加されていることを確認してください。

![CreateDataSource-newOne](./../../../../img/InfoMotion/DataSource/Firebase/CreateDataSource-newOne.png)

## 各設定項目の確認

下記項目は、スニペットから確認できます。

* Api Key
* Auth Domain
* `Database URL
* Project Id
* Storage Bucket
* Messaging Sender Id

Firebase の左部メニューの [Project Overview] をクリックし、プロジェクトのトップページを開きます。
トップページ真ん中の [ウェブアプリに Firebase を追加] をクリックし、スニペットを表示してください。

![Setup-firebaseKeys-ja](./../../../../img/InfoMotion/DataSource/Firebase/Setup-firebaseKeys-ja.png)

残りの項目の `Ref` はフローで用いる `Child path` を入力します。(Firebase ではコレクション名となっています。)
または、他の方法で作成したものを入力します。
[CreateFlow](./CreateFlow.md) で作成したフローでは、[test] と設定しています。

![CreateFlow-firebaseNode](./../../../../img/InfoMotion/DataSource/Firebase/CreateFlow-firebaseNode.png)

`Ref` の設定値には `/(スラッシュ)` が前方に必要なので「/test」としてください。



## InfoMotionの作成

DataSource を使用する準備ができました。
InfoMotion ダッシュボードを作成する際に作った DataSource を選択することでデータをグラフに反映できます。

詳しくは以下のページを順に参照してください。

* [Sample infotypes](./../../SampleInfoTypes.md)
* [Upload an InfoType](./../../UploadInfoType.md)
* [Create InfoMotion](./../../CreateInfoMotion.md)