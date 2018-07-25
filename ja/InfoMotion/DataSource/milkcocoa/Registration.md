## milkcocoa アカウントの登録

https://mlkcca.com/ にアクセスし、アカウントを登録します。
milkcocoaにログインし、ダッシュボードの [新しいアプリを作る] をクリックしてください。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/app-list.png)

アプリに名前を付けます。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/name-app.png)

リストに新しいアプリが追加されます。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/new-app-list.png)

アプリには固有の `app_id` が紐づきます。
初期設定でアプリの認証が public となっています。

![](/_asset/images/InfoMotion/datasources/milkcocoa-v2/app-dashboard.png)

### ローカル環境での使用に際して

milkcocoa のDataSource をローカル環境で使用するには、http サーバーからサーブする必要があります。
Node.js, npm を使用し、 ローカル環境の `index.html` に npm モジュール [http-server](https://www.npmjs.com/package/http-server) を用いることをお勧めします。