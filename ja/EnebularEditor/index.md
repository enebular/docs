---
lastUpdated: 2018-11-29
---

# enebular editor

## Overview

enebular editor は ブラウザ上ではなくローカル環境でフローの編集とデプロイ（ `AWS IoT`, `Pelion Device Management`, `AWS Lambda`, `Heroku`）のできるソフトウェアです。
desktop editor は限定的な公開となっています。利用したい方は **support@enebular.com** までお問い合わせください。

## Modes

enebular editor には `Desktop` と `Remote` の二つのモードがあります。

### Desktop

デスクトップモードは、ノード のサポートが PC やブラウザの API に限られている場合に使用します。
enebular editor はクラウドではなくアプリケーションからフローエディタを読み込みます。

### Remote

[enebular-runtime-agent v2.3.0](https://github.com/enebular/enebular-runtime-agent/releases) 以降\*\* の linux デバイス（Raspberry Pi など）のフローを編集する場合に使用します。
Raspberry Pi のセンサー用ノードなど、デバイスでしか動かないノードを用いたフローを編集することができます。
AWS IoT または Pelion Device Management との接続が必要です。（Pelion Device Management の場合 [enebular-runtime-agent-cloud-connector 2.3.0](https://github.com/enebular/enebular-runtime-agent-mbed-cloud-connector/releases) を使用してください。）
enebular editor は `enebular-runtime-agent` のフローエディタをリモートで開きます。

## Requirements

- enebular アカウント
- ネットワークに接続している PC
- 動作環境は [こちら](./../Other/Support.md) を参照してください

## How to install

### For Windows

1. [こちら](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/win/enebular+editor+Setup+0.9.0.exe)からインストーラを含んだ zip ファイルをダウンロードします。

1. zip ファイルを展開し、exe ファイルのインストーラーを実行します。

### For Mac

1. [installer](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/mac/enebular+editor-0.9.0.dmg)からインストーラをダウンロードします。

1. dmg ファイルのインストーラーを実行します。

1. **enebular editor** を実行します。
