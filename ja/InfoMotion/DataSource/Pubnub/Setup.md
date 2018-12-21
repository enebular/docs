---
lastUpdated: 2018-08-09
---

## Pubnub アカウントの準備

https://www.pubnub.com/ にアクセスし、アカウントを登録します。
Pubnub にログインし、ダッシュボード右上の [CREATE NEW APP +] をクリックしてください。 

![Setup-appList](./../../../../img/InfoMotion/DataSource/Pubnub/Setup-appList.png)


任意の名前を付けて、アプリを作成します。

![Setup-createApp](./../../../../img/InfoMotion/DataSource/Pubnub/Setup-createApp.png)


リストに新しいアプリが追加されます。

![Setup-newAppList](./../../../../img/InfoMotion/DataSource/Pubnub/Setup-newAppList.png)


作成したアプリをクリックします。

![Setup-dashboard](./../../../../img/InfoMotion/DataSource/Pubnub/Setup-dashboard.png)


Pubnub は初期設定から Demo Keyset を提供しています。
これらの Key はデータストアにデータをプッシュするのに必要となります。
Demo Keyset をクリックして表示してください。

![Setup-keys](./../../../../img/InfoMotion/DataSource/Pubnub/Setup-Keys.png)



InfoMotion で データを表示するには、Pubnub にデータをプッシュした際にデータを保存する必要があります。
`STORAGE & PLAYBACK` の項目までスクロールダウンしてください。
スイッチを on の方に切り替え、`Retention` を 1 day 以上に設定してください。
[save changes] をクリックして設定を保存します。

![Setup-storagePlayback](./../../../../img/InfoMotion/DataSource/Pubnub/Setup-storagePlayback.png)
