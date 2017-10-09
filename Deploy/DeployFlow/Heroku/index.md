このページではHeroku Deployの説明をします。Heroku Deployはenebularで作成したFlowをHerokuで作成したenebular Node-REDにDeployする機能です。

## Herokuに送るFlowを作成

![image.png (71.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/fa5a4d0d-c40f-48eb-bdb6-21919f4d0e51.png)

まず、Assets から新しいFlowを作成します。

![image.png (30.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/edfb01dd-da0c-4d9c-aad1-38655202f7c1.png)

Herokuに送りたいFlowを作成します。

## Deployの設定

つづいて、Deployの設定をします。

![image.png (69.1 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/fca081c6-2419-4eec-94b7-19fb370629dc.png)

Flowが作成できたら上部のメニューからDeployページに移動します。

![image.png (21.1 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/8c0f58a6-cd70-4460-8b97-b54847dc0250.png)

Select Connection TypeからHerokuを選択します。

![image.png (103.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/fd92fa11-6c89-4ca1-a839-f40076c33805.png)

Herokuを選択すると右のカラムに、送るHerokuボタンでenebularアプリを作成します。

## Herokuボタンでenebularアプリを作成

Herokuボタンでenebularアプリを作成します。すでに作成されている方は読み飛ばして下さい。

![image.png (10.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/f9f1e272-dad4-4ae8-82a2-9ec00349428d.png)

Herokuボタンをクリックします。

![image.png (255.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/ef81e8d0-e400-4ffc-95e5-3bca8f0269da.png)

Herokuにログインします。

![image.png (48.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/ab6cd9b4-39a4-45f9-8f34-191f95fcf03e.png)

Herokuのアプリ設定が表示されます。

![image.png (9.2 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/679873b0-c8d0-41f1-8122-fc235a16be38.png)

App nameをわかりやすい名前で設定します。

![image.png (16.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/96869fe5-951e-4306-aaa5-7b03ad838f40.png)

作成後のenebular Node-REDのログインするためのUSERNAME/PASSWORDを設定します。

![image.png (4.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/3c179a2b-5200-4471-aa2c-4c3c064ed9d2.png)

設定を確認したらDeployボタンを押します。

![image.png (36.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/412f9daa-3ce3-43c7-999a-9569e5b56ff0.png)

アプリが作成されていきます・・・

![image.png (28.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/03968aa3-6189-4dc2-9c9d-9e3b6c91d548.png)

作成完了されたら Viewボタンを押して確認します。

![image.png (47.0 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/ba18fb05-a83b-4229-a6aa-a76ab9cac23b.png)

enebular Node-REDのログインするためのUSERNAME/PASSWORDが聞かれるのでログインします。

## Deploy設定

Herokuアプリが作成できたらDeploy設定をします。さきほどの画面に戻って設定を続けます。

 ![image.png (15.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/8fdd8775-d23a-4a06-bd76-63b58f70d4a1.png)

Newボタンを押します。

![image.png (21.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/d3363cc8-f107-4fa4-84dd-3aa3b324483d.png)

Connection Nameはわかりやすい名前をつけます。Heroku API TokenはHerokuの設定画面で確認します。

![image.png (23.7 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/fcabad12-a0f1-453c-b015-3f2c1da546fe.png)

Account Settings ボタンを押します。

![image.png (10.7 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/b4f91b70-12a0-4e1f-9088-041f20195c06.png)

Manage AccountページでAccountページに行きます。

![image.png (16.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/9da30c55-15ef-41e0-a6b1-2888e32a636f.png)

API Key欄に移動しRevealボタンでAPI Key表示します。

![image.png (26.9 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/b8b4daf0-30a5-42a5-a7b8-350a2bfafe07.png)

Heroku API TokenにAPI Keyをコピーして、Saveボタンを押します。

## Deploy

SaveされるとSelect Connection TypeからHerokuを選択すると、Herokuアカウントが持つアプリ一覧が出てきます。

![image.png (81.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/26ee173d-d8ac-47df-9dd1-f0feeeb11e14.png)

こちらから、さきほど作成したHerokuアプリをひとつチェックしDeployボタンを押します。

![image.png (106.3 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/66664407-7e20-401c-b41a-634725863776.png)

しばらく待っているとDeploy Addedが表示されてDeployが完了します。

![image.png (38.6 kB)](https://img.esa.io/uploads/production/attachments/3062/2017/10/02/8131/d7f3d664-5be8-4ee4-ad17-73ff31aa6627.png)

Herokuアプリで確認すると無事フローがDeployされています。
