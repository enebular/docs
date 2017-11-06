## Setting DataSource

データを取得する元となるDataSourceの設定を行います。

![image](/ja/public/images/developers/InfoMotion/CreateDataSource/infomotion-create-datasource_01.png)

Project一覧から今回DataSourceを設定したいProjectをクリックし。Projectトップページに移動します。

![image](/ja/public/images/developers/InfoMotion/CreateDataSource/infomotion-create-datasource_02.png)

Projectトップページが表示されたらDataSourceをクリックし、DataSource作成ページに移動します。

![image](/ja/public/images/developers/InfoMotion/CreateDataSource/infomotion-create-datasource_03.png)

DataSource作成ページが表示されたら、新しくDataSource作成をはじめます。Create DataSourceボタンをクリックします。

![image](/ja/public/images/developers/InfoMotion/CreateDataSource/infomotion-create-datasource_04.png)

DataSource Setting メニューが表示されるので、詳細を設定していきます。

![image](/ja/public/images/developers/InfoMotion/CreateDataSource/infomotion-create-datasource_05.png)

## Milkcocoa  DataSourceの場合

[Milkcoco](https://mlkcca.com/) DataSourceの場合は以下のように設定します。

![image](/ja/public/images/developers/InfoMotion/CreateDataSource/infomotion-create-datasource_06.png)

Datasource Typeからmilkcocoaを選択します。

![image](/ja/public/images/developers/InfoMotion/CreateDataSource/infomotion-create-datasource_07.png)

すると、Milkcocoa用の設定が表示されるので、MilkcocoaでのDataSourceを取得したいAppID・DataStore・APIKey・APISercretを設定します。

* AppID
    * MilkcocoaでDataSourceを取得したいAppID
* DataStore
    * 上記のAppIDにてDataSourceを取得したいDataStore
* APIKey
    * 上記のAppIDのAPIKey
* APISercret
    * 上記のAppIDのAPISercret

設定ができたらSaveボタンをクリックしDataSourceの設定を終わります。

![image](/ja/public/images/developers/InfoMotion/CreateDataSource/infomotion-create-datasource_08.png)


### apiGateWay DataSourceの場合

apiGateWay DataSourceの場合は以下のように設定します。

<div>[html]
検討：APIゲートウェイの方が良い？
[/html]</div>

![image](/ja/public/images/developers/InfoMotion/CreateDataSource/infomotion-create-datasource_09.png)

* Endpoint
    * APIゲートウェイのエンドポイントを設定します
* API Key
    * APIゲートウェイのAPI Keyを設定します

設定ができたらSaveボタンをクリックしDataSourceの設定を終わります。

