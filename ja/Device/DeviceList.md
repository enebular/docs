---
lastUpdated: 2018-05-22
---

# Device List

Device Listでは[License Manager](./LicenseManager.md)でライセンスを割り当てたデバイスの **ステータス** と **ログ** を確認することが出来ます。

## Select Connection Type

![select_connection_type](../_asset/images/Devices/device_list-select_connection-001.png)

閲覧したいデバイスが含まれるコネクションをAWS IoT または MBED から選択します。

## Select Connection

![select_connection](../_asset/images/Devices/device_list-select_connection-002.png)

登録済みのコネクションを選択します。

## Device ID

![device_id](../_asset/images/Devices/device_list-device_id.png)

ライセンスを割り当てたデバイスが一覧表示されます。

## Status

![status](../_asset/images/Devices/device_list-status.png)

デバイスの **ステータス** がアイコンで表示されます。
表示されるアイコンと説明は下記のとおりです。

| アイコン | ステータス | 説明 |
| :-: |:-: | :-: |
|  ![connected](../_asset/images/Devices/device_list-status-connected.png)  | **connected** | enebularとの接続がされている状態 |
| ![disconnected](../_asset/images/Devices/device_list-status-disconnected.png) | **disconnected** | enebularとの接続がされていない状態 |

## Monitoring

![monitoring](../_asset/images/Devices/device_list-toggle.png)

トグルをオン(緑色)にすることでデバイスの **ステータス** と **ログ** の通知が有効になります。
トグルがオフ(灰色)になっている場合 **ステータス** と **ログ** の通知が無効になります。無効になっている場合、 **ステータス** は **disconnected** になり、デバイスからの **ログ** の送信が停止します。

## Logs

![logs](../_asset/images/Devices/device_list-view_logs.png)

デバイスのログを見ることが出来ます。詳細については[Logs](./Logs.md)を参照してください。