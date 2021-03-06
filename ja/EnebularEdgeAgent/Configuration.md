# Configuration

enebular-edge-agent は **enebular Reference Board Configuration Tool**(以下:eRB Config. Tool) を使用して無線LAN設定を行います。
eRB Config. ToolはWindows専用ソフトウェアです。

1. [動作環境](#environment)
1. [インストール](#install)
1. [使用方法](#usage)
1. [トラブルシューティング](#troubleShooting)

## 動作環境{#environment}

eRB Config. ToolはWindows PC上で動作するソフトウェアです。  
eRB Config. Toolの動作環境は以下となります。  

| OS | CPU | メモリ | その他 |
| --- | --- | --- | --- |
| Windows 10 | Core i5 2.90GHz以上推奨 | 8.0GB以上推奨 | .NET Framework v4.6.1推奨 |

## インストール {#install}

1. [こちら](https://download.enebular.com/eRB-Config-Tool/eRBConfigTool.msi)からインストーラをダウンロードします。
1. 「eRBConfigTool.msi」を実行し画面の表示に従い、インストールを行います。
1. インストール完了後、スタートメニューのUhuruフォルダ内「eRB Config. Tool」の項をクリックすることで起動できます。

## 使用方法 {#usage}

### 各機能共通のセットアップ {#setup}

1. デバイスとPCをUSBケーブルでつなぎ、デバイスを`Setting Mode`で起動します。（`Setting Mode`について詳しくは、各デバイスのページを参照してください。）
    - RAVENの場合･･･起動時にUSER SWを押したままの状態にする。（USER SWを押したまま、RESET SWを押します。5秒ほどでUSER LEDが赤く点灯し、`Setting Mode`に入ります。）
1. 「ポート」からデバイスが接続されているシリアルポートを選択します。

### 無線LAN設定 {#network}

1. 「設定モード」から実行する作業を選択します。
    - 読み込みの場合・・・「読み込み」ボタンを押すことで、テキストエリアに設定済みのSSID名が表示されます。パスワードの確認はできません。
    - 書き込みの場合・・・テキストエリアに各設定値を入力し、「書き込み」ボタンを押すと、設定が完了します。

※ 一度シリアルポートを選択すると設定が保存されるため、次回起動時設定する必要はありません。（シリアルポート名が変わる場合除く）
※ セキュリティ保護のないネットワークに接続する場合、SSIDを設定したあと、パスワードは空欄のまま書き込みを行い、設定をしてください。

### バージョン情報 {#version}

1. 「EEAバージョン」の空欄横の「読み込み」ボタンを押すと、デバイスに書き込まれているenebular-edge-agentのバージョンを確認できます。


## トラブルシューティング {#troubleShooting}

### ポートがわからない{#whichPort}

1. 「コントロールパネル」 > 「デバイスマネージャー」 > 「ポート」 を開きます。
1.  任意のポートの「プロパティ」 > 「詳細」 > 「バスによって報告されるデバイスの説明」を選びます。
1. 「値」が`mbed Serial Port`であるものが接続されているリファレンスボードです。

### エラーメッセージが出た{#errorMessage}

エラーメッセージの一覧です。下記を参考に対処して下さい。

| エラーメッセージ | 参考 |
| --------- | ----------  |
| PCに使用できるシリアルポートが見つかりませんでした | PCにシリアルポートが存在しない場合発生します。USB接続を確認してください。|
| ポート設定に誤りがあります | 選択されたシリアルポートに誤りがあります。接続またはポート設定を再度確認してください。
| シリアルポートエラー| 選択されたシリアルポートが間違っている可能性があります。シリアルポートを確認してください。直らない場合は再起動してください。|
| エラーコマンド受信| デバイスが設定モードに入っているかどうかを確認してください。|
| 受信コマンドフォーマットエラー| 受信電文が通信プロコルと異なっています。|
| シリアルポートタイムアウト | デバイスが設定モードに入っているかどうかを確認してください。選択されたシリアルポートが間違っている可能性があります。|
| 入力エラー |ユーザー入力エラーです。パラメーターを確認してください。|
| SSIDは32文字以下で設定してください。| 入力を確認してください。 |
| パスワードは64文字以下で設定してください。| 入力を確認してください。 |

### アンインストールしたい{#uninstall}

1. 「setup.exe」を実行後「eRB Config. Tool の削除」を選択し、画面の表示に従い「eRB Config. Tool」のアンインストールを行います。

※「プログラムの追加と削除」からもアンインストールすることができます。