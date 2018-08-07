---
lastUpdated: 2018-08-07
---

## DataSource の作成

フローを作成したものと同じプロジェクトの `Data Souce` のページを表示します。
右下の + ボタンをクリックして、 `Data Source`を追加します。

`Title` に任意の名前を入力し、DataSource Type から [Firebase] を選択してください。
Firebase 用の設定画面が開きます。
Firebase アプリを作成した際に表示された設定スクリプトを参考にして、`Api Key`, `Auth Domain`, `Database URL`, `Project Id`, `Storage Bucket`, `Messaging Sender Id` を入力してください。

`Ref` にはフロー作成の際に用いた `Child path` を入力します。(Firebase ではコレクション名となっています。)
`Ref` の設定値には `/(スラッシュ)` が前方に必要なので「/test」としてください。

![](/_asset/images/InfoMotion/datasources/firebase/datasource-settings.png)


DataSourceが追加されていることを確認してください。

![](/_asset/images/InfoMotion/datasources/firebase/new-datasource.png)


DataSource を使用する準備ができました。
InfoMotion ダッシュボードを作成する際に作った DataSource を選択することでデータをグラフに反映できます。

詳しくは以下のページを順に参照してください。

* [Sample infotypes](./SampleInfoTypes.md)
* [Upload an InfoType](./UploadInfoType.md)
* [Create InfoMotion](./CreateInfoMotion.md)