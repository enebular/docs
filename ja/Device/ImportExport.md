# Device List の Import/Export {#DeviceListImportExport}

## 概要 {#Overview}

enebular が管理する Device List の情報をファイル(Devices ファイルと呼ぶ)に Export する機能、及び、Devices ファイルから enebular に Import する機能を提供します。
Import/Export の対象は AWS IoT、又は Pelion の Connection で管理されたライセンスが付与された Device の一覧です。

ユーザは Export した Devices ファイルを修正し、そのファイルを enebular に Import することで Device List を更新することができます。

更新できるデータは以下二種類です。

- Tags
- Pelion Device Name (Pelion の Connection の場合のみ有効)

Import/Export の実施単位は Connection 単位です。

デバイス台数が多い場合には Import 処理が長時間に及ぶことがあるため、Import の結果はメールを用いて通知します。

## 説明 {#Description}

### 前提 {#Prerequisite}

- Import/Export 機能は有料ユーザのみ利用することができます
- Import/Export を実施できるのは、Project の owner 又は admin のみです
- Import 機能は、Export した Devices ファイルを編集して Export 元の Connection の Device List を上書きするためにのみ利用します(新たなデバイスを追加したり、既存のデバイスを削除したり、別の Connection にデバイスをコピーしたりする目的には利用できません)

### Devices ファイルの形式 {#DevicesFileFormat}

Import/Export の対象である Devices ファイルの形式について説明します。

- Devices ファイルの形式は TSV(Tab Separated Values)です
- Devices ファイルに出力する内容は以下です

| 項目(ヘッダ)     | 説明                                                                                                                  | Import 時の変更可否 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------- |
| id               | enebular が付与した Device の ID。                                                                                    | 否                  |
| identifier       | AWS IoT、又は Pelion でデバイスを特定する名前です。AWS IoT の場合は Thing 名、Pelion の場合は DeviceId に対応します。 | 否                  |
| tags             | デバイスに付与した Tag です。カンマ区切りで複数の Tag を記述可能です。                                                | 可                  |
| pelionDeviceName | Pelion における Device 名です。AWS IoT の場合は、カラムは出力しますが空文字とします。                                 | 可                  |

- Devices ファイルの一行目はヘッダを記載します(変更しないようにしてください)
- ファイル名は`<Connection名>_<ConnectionId>.tsv`です
- ファイルの文字コードは UTF-8、改行コードは CRLF です

以下に Devices ファイルの例(Pelion の場合)を示します。

```
id	identifier	tags	pelionDeviceName
03b5a71e-fe00-468c-a353-f68389f6b6ba	016a691252f2000000000001001001e6	foo,bar,foobar	pelion-device-01
```

1 行目がヘッダ行であること、文字列と文字列の間は Tab にて区切られていること、2 行目の tags の値はカンマ区切りで複数の Tag を記載できることが分かるかと思います。

### Export 機能の使い方 {#HowToUseExport}

Device List を Export するときの操作手順を説明します。

1. Export 対象の Connection が存在する Project の画面を開きます
1. 左側のメニューの Devices をクリックします
1. Export 対象の Connection をクリックします
1. 表示された Devices 画面の右上部の Settings をクリックします
1. 表示されたサブメニューの中から Export Devices をクリックします
1. 確認ダイアログが表示されるため、OK ボタンをクリックします
1. Devices ファイルのダウンロードが開始します

### Import 機能の使い方 {#HowToUseImport}

Devices ファイルを Import するときの操作手順を説明します。

1. Import 先の Connection が存在する Project の画面を開きます
1. 左側のメニューの Devices をクリックします
1. Import 先の Connection をクリックします
1. 表示された Devices 画面の右上部の Settings をクリックします
1. 表示されたサブメニューの中から Import Devices をクリックします
1. 表示されたダイアログで Import 対象の Devices ファイルを指定します
1. Import ボタンを押下します
1. しばらく待つと enebular に登録した email アドレスにメールが到達します

Import 実行結果のメールには以下の内容を含みます。

- success count: 更新成功件数
- error count: 発生したエラー件数
- imported date: Import を実施した日時
- エラーがあった場合、以下のエラー情報を記載します
  - line number: Devices ファイルにおけるエラーのあった行番号
  - error message: エラーメッセージ(エラーの内容を表す)

※ エラーが発生しても Import 処理を中断せず、エラーがない行の Import は継続して実施します
※ ヘッダ誤りやファイルが空など、Devices ファイルを正しく読み込めない場合にはメールではなく、画面上にすぐにエラーを表示します
