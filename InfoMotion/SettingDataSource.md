# Setting DataSource

データを得る元となるDataSourceの設定を行います。

![image.png (9.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/06/27/8131/cb564505-d808-4b40-895d-d0c364e02d57.png)

Project一覧から今回DataSourceを設定したいProjectをクリックし。Projectトップページに移動します。

![image.png (48.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/06/27/8131/d3255aad-165c-4de3-91d8-9df1dfd3a6df.png)

Projectトップページが表示されたらDataSourceをクリックし、DataSource作成ページに移動します。

![image.png (17.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/06/27/8131/e0d8ceda-44a4-42aa-839d-6e720d2a80d1.png)

![image.png (7.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/06/27/8131/9923fec8-91ef-4b67-b5de-eef9a91f9f7a.png)

DataSource作成ページが表示されたら、新しくDataSource作成をはじめます。New Data Sourceボタンをクリックすると、New Data Sourceボタンを押して新しく作成するDataSourceの名前を決めます。

![image.png (10.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/06/27/8131/fc3855f5-d463-4088-adbf-cd0aa3a6403e.png)

DataSource一覧に先ほどのDataSourceの名前が表示されます。この段階では詳細が設定されていないので設定して行きましょう。

### apiGateWay DataSourceの場合

apiGateWay DataSourceの場合は以下のように設定します。

```
検討：APIゲートウェイの方が良い？
```

![image.png (22.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/06/27/8131/6a9eca52-1727-4f47-aed6-3a18df2621f6.png)

* Endpoint
    * APIゲートウェイのエンドポイントを設定します
* API Key
    * APIゲートウェイのAPI Keyを設定します

設定ができたらSaveボタンをクリックしDataSourceの設定を終わります。

## Milkcocoa  DataSourceの場合

[Milkcoco](https://mlkcca.com/) DataSourceの場合は以下のように設定します。

![image.png (14.2 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/06/27/8131/316afb4b-ed98-4431-9718-fceaa1716f81.png)

Select Datasource Typeからmilkcocoaを選択します。

![image.png (35.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/06/27/8131/59080b59-ea58-4527-9c9a-a7ba3417309c.png)

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

![image.png (10.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/06/27/8131/0309cc0f-343c-471e-bbcb-0f51fcd89319.png)
