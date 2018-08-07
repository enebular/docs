---
lastUpdated: 2018-08-07
---

## Data Source の作成

フローを作成したものと同じプロジェクトの `Data Source` のページを表示します。
右下の + ボタンをクリックして、 `Data Source`を追加します。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/data-source.png)

`Title` に任意の名前を入力し、DataSource Type から [milkcocoa] を選択してください。
milkcocoa 用の設定画面が開きます。
`App Id` には先ほど作成したmilkcocoa アプリの `app_id` を入力し、`DataStore` には "test" を入力します。
`API Key` と `API Secret` は空のままにし、[Save] をクリックしてください。

※ milkcocoa アプリの設定で API認証を有効にした場合は`API Key` と `API Secret` の入力が必要となります。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/settings.png)

DataSource を使用する準備ができました。
InfoMotion ダッシュボードを作成する際に作った DataSource を選択することでデータをグラフに反映できます。

詳しくは以下のページを順に参照してください。

* [Sample infotypes](./SampleInfoTypes.md)
* [Upload an InfoType](./UploadInfoType.md)
* [Create nfoMotion](./CreateInfoMotion.md)