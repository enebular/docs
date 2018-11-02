---
lastUpdated: 2018-10-31
---

# enebular editor

## 概要

enebular editor は ブラウザ上ではなくローカル環境でフローの編集とデプロイ（ `AWS IoT`, `Pelion Device Management`, `AWS Lambda`, `Heroku`）のできるソフトウェアです。 
desktop editor は限定的な公開となっています。利用したい方は **support@enebular.com** までお問い合わせください。


## Modes

enebular editor には `Desktop` と `Remote` の二つのモードがあります。

### Desktop

デスクトップモードは、ノード のサポートが PC やブラウザのAPIに限られている場合に使用します。
enebular editor はクラウドではなくアプリケーションからフローエディタを読み込みます。

### Remote

enebular-runtime-agent v2.3.0以降の linux デバイス（Raspberry Pi など）のフローを編集する場合に使用します。
Raspberry Pi のセンサー用ノードなど、デバイスでしか動かないノードを用いたフローを編集することができます。
AWS IoT または Pelion Device Management との接続が必要です。（Pelion Device Management の場合 `enebular-runtime-agent-cloud-connector` を使用してください。）
enebular editorは `enebular-runtime-agent`  のフローエディタをリモートで開きます。

## Requirements

- 予め enebular.com で enebular のアカウントを作成する必要があります
- PCはネットワークに接続されている必要があります
- 動作環境については [こちら](./../Other/Support.md) を参照してください

## インストール手順

### Windows の場合

1. [こちら](https://download.enebular.com/enebular-editor/)からインストーラを含んだzipファイルをダウンロードします。

1. zipファイルを展開し、`Enebular Editor Setup 0.0.2.exe` を実行します。

1. 下記のようにプログラムがインストールされます。  
    ![windowsProgram](./../../img/Other/DesktopEditor-windowsProgram.png)

1. セットアップが完了すると enebular editor が自動的に起動します。

### Mac の場合

1. [こちら](https://download.enebular.com/enebular-editor/)からインストーラをダウンロードします。

1. `Enebular Editor-0.0.2.dmg` を実行しアプリをインストールします。

1. `Enebular Editor` を起動します。

## ログイン

enebularに登録している `メールアドレス` と `パスワード` を入力しログインボタンをクリックします。

![logIn](./../../img/Other/DesktopEditor-logIn.png)

ログインに成功するとダッシュボードが表示されます。

![dashBoard](./../../img/Other/DesktopEditor-dashBoard.png)