---
lastUpdated: 2018-10-31
---

# enebular agent のフローエディタとのリンク

まず、バージョン2.3.0以降の `enebular-runtime-agent` を Raspberry Pi などのデバイスで起動します。

デバイスと enebular editor を起動する PC が同じローカルネットワークに接続していることを確認してください。

デバイスのターミナルで `ifconfig` を起動し、デバイスの IPアドレスを確認してください。

次に PC の IPアドレスを確認します。（Macの場合、Network Preferencesを見てください。Windowsの場合、コマンドプロンプトで`ipconfig`を起動します。Wireless LAN adapter Wi-Fi のIPv4アドレスの項を見てください。）

`enebular-runtime-agent`  に `enebular editor` の設定をし、  `enebular-runtime-agent`  を下記コマンドで実行します。

## AWS IoT の場合

```
cd ports/awsiot

ENEBULAR_EDITOR_URL=http://192.xxx.xx.xx:9017 ./bin/enebular-awsiot-agent

cd ports/awsiot/example

ENEBULAR_EDITOR_URL=http://192.xxx.xx.xx:9017 npm start

```
##Pelion Device Management の場合
```
cd ports/local

ENEBULAR_EDITOR_URL=http://192.xxx.xx.xx:9017 ./bin/enebular-awsiot-agent

cd ports/local/example

ENEBULAR_EDITOR_URL=http://192.xxx.xx.xx:9017 npm start

```

`Remote` モードで ` enebular editor` からフローを開きます。


AWS または Pelion Device Management の connection を選択し、デバイスのフローを開いてください。

IPアドレスの入力が求められるので、デバイスの IPアドレス(`192.xxx.xx.xx`)を入力してください。