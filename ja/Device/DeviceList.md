---
lastUpdated: 2018-05-22
---

# Device List

Device Listでは[License Manager](./LicenseManager.md)でライセンスを割り当てたデバイスの **ステータス** と **ログ** を確認することが出来ます。この機能は現在エンタープライズプランでのみのサポートです。さらに情報が必要な方は **support@enebular.com** に連絡してください。

## Select Connection Type

![select_connection_type](../_asset/images/Devices/device_list-select_connection-001.png)

閲覧したいデバイスが含まれるコネクションを AWS IoT または MBED から選択します。

## Select Connection

![select_connection](../_asset/images/Devices/device_list-select_connection-002.png)

登録済みのコネクションを選択します。
コネクションが登録済みでない場合、 New を押下してコネクションを作成してください。

## Device ID

![device_id](../_asset/images/Devices/device_list-device_id.png)

ライセンスを割り当てたデバイスが一覧表示されます。

## Status

![status](../_asset/images/Devices/device_list-status.png)

デバイスの **ステータス** がアイコンで表示されます。
表示されるアイコンと説明は下記のとおりです。

| アイコン | ステータス | 説明 |
| :-: |:-: | :-: |
| ![connected](../_asset/images/Devices/device_list-status-connected.png)  | **connected** | デバイスがenebularに接続している状態 |
| ![disconnected](../_asset/images/Devices/device_list-status-disconnected.png) | **disconnected** | デバイスがenebularに接続している状態 |

## Monitoring

![monitoring](../_asset/images/Devices/device_list-toggle.png)

トグルをオン(緑色)にすることモニタリングが有効になり、デバイスの **ステータス** と **ログ** を見ることが出来ます。
トグルがオフ(灰色)になっている場合、モニタリングが無効になります。 **ステータス** は **disconnected** になり、デバイスからの新しい **ログ** が見れなくなります。既に送られたログは見ることが出来ます。

## Logs

![logs](../_asset/images/Devices/device_list-view_logs.png)

デバイスのログを見ることが出来ます。詳細については[Logs](./Logs.md)を参照してください。