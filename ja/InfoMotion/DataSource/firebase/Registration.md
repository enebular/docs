## Firebase アカウントの登録 

https://firebase.google.com/ にアクセスし、アカウントを登録します。
firebase にログインし、 [プロジェクトを追加] をクリックしてください。

![](/_asset/images/InfoMotion/datasources/firebase/firebase-wellcome.png) 


任意のプロジェクト名を入力し、国/地域 を選択後、[プロジェクトを作成] をクリックしてください。
新しいプロジェクトが作成されます。

![](/_asset/images/InfoMotion/datasources/firebase/add-a-project.png) 


プロジェクト画面が表示されます。
「ここから始めましょう。」 の下にある [ウェブアプリに Firebase を追加] をクリックしてください。

![](/_asset/images/InfoMotion/datasources/firebase/get-started.png) 


設定スクリプトのポップアップウィンドウが表示されます。後程使用するので、コピーして任意の場所に貼り付けておいてください。

![](/_asset/images/InfoMotion/datasources/firebase/firebase-keys.png) 


## 認証

フローを作成する前に、アプリの認証の設定をする必要があります。
今回は、匿名の認証を用います。

プロジェクト左側のメニューから [Develop] をクリックして、さらに [Authentication] のページを開きます。
[ログイン方法を設定] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/authentication-sidebar.png) 


[匿名] を選択します。

![](/_asset/images/InfoMotion/datasources/firebase/authentication.png) 


スイッチを on にして [保存] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/anonymous-enable.png) 


匿名が有効になっているのを確認してください。

![](/_asset/images/InfoMotion/datasources/firebase/anonymous-status-enabled.png) 


## DataBase のセットアップ 

次に左部のメニューから [Database] をクリックしてください。
Realtime Databaseの [スタートガイド] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/database.png) 


[テストモードで開始] を選択し、[有効にする] をクリックします。

![](/_asset/images/InfoMotion/datasources/firebase/database-security.png) 

