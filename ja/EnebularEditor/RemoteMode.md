---
lastUpdated: 2018-11-29
---

# リモートモードでフローを読み込み

まず、バージョン 2.3.0 以降の [enebular-runtime-agent](https://github.com/enebular/enebular-runtime-agent/releases) を Raspberry Pi などのデバイスで起動します。

デバイスと enebular editor を起動する PC が同じローカルネットワークに接続していることを確認してください。

## AWS IoT

証明書と設定ファイルを`awsiot`フォルダに入れて、実行してください。

```
cd ports/awsiot
DEBUG=info ./bin/enebular-awsiot-agent --dev-mode
```

## Pelion Device Management

```
cd ports/local
DEBUG=info NODE_RED_DIR=../../node-red ./bin/enebular-local-agent --dev-mode
```

## Next...

**enebular editor** から `Remote` モードでフローを開きます。

1. AWS または Pelion Device Management の Connection を選択します。

1. 該当する Thing または Device を選択します。

1. Load をクリックします。

## デバッグ

- ファイアウオール等により enebular editor の通信が禁止されていないことををご確認ください。
- enebular editor が動作するパソコンに割り当てられた IP アドレスが一つであることをご確認ください。Virutal Box 等をインストールすることにより、パソコンに複数の IP アドレスが割り当てら、enebular editor がデバイスと通信ができなくなることがあります。
