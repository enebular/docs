# enebular editor {#enebular editor}

## Overview {#Overview}

enebular editor は ブラウザ上ではなくローカル環境でフローの編集とデプロイ（ `AWS IoT`, `Pelion Device Management`, `AWS Lambda`, `Heroku`）のできるソフトウェアです。

## Modes {#Modes}

enebular editor には `Desktop` と `Remote` の二つのモードがあります。

### Desktop {#Desktop}

デスクトップモードは、ノード のサポートが PC やブラウザの API に限られている場合に使用します。
enebular editor はクラウドではなくアプリケーションからフローエディタを読み込みます。

デスクトップモードはポート`1888`で走っています。

### Remote {#Remote}

enebular-agent v2.3.0以降の linux デバイス（Raspberry Pi など）のフローを編集する場合に使用します。
Raspberry Pi のセンサー用ノードなど、デバイスでしか動かないノードを用いたフローを編集することができます。
AWS IoT または Pelion Device Management との接続が必要です。
enebular editor は `enebular-agent` のフローエディタをリモートで開きます。enebular editor の Remote モードの詳細については、[リモートモードでフローを読み込み](RemoteMode.md) を参照してください。

また、enebular editor を enebular-agent に接続する際には、enebular-agent が開発者モードで起動している必要があります。
開発者モードについては、enebular-agent の[開発者モード](../EnebularAgent/Developer-Mode.md)を参照してください。

## Requirements {#Requirements}

- enebular アカウント
- ネットワークに接続している PC
- [Node 12.18.1 LTS](https://nodejs.org/ja/)

## How to install {#How to install}

### For Windows {#For Windows}

1. [こちら](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/win/enebular+editor+Setup+1.0.2.exe)からインストーラをダウンロードします。

1. exe ファイルのインストーラーを実行します。

### For Mac {#For Mac}

1. [こちら](https://s3-ap-northeast-1.amazonaws.com/enebular-editor/mac/enebular+editor-1.0.2.dmg)からインストーラをダウンロードします。

1. dmg ファイルのインストーラーを実行します。

## How to uninstall {#How to uninstall}

### For Windows

1. [スタートメニュー] ＞ [設定]の順にクリックします
1. [アプリ] をクリックします
1. [enebular editor]をクリックします
1. [アンインストール]をクリックします

### For Mac

1.  Finderで「アプリケーション」フォルダを開きます
1. 「enebular editor」を探して右クリックします
1. 表示されたメニューの「ゴミ箱に入れる」をクリックします
