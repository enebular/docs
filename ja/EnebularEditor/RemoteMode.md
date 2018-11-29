---
lastUpdated: 2018-11-29
---

# Debugging a Flow in Remote Mode

まず、バージョン2.3.0以降の `enebular-runtime-agent` を Raspberry Pi などのデバイスで起動します。

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

1. 該当するThing または Device を選択します。

1. Load をクリックします。
