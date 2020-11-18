# AssetのImport/Export {#AssetImportExport}

## 概要 {#Overview}

Projectで管理するAssetをZIPファイルとしてExportしたり、ExportしたZIPファイルを別のProjectにImportしたりする機能です。
この機能は、作成したAssetのバックアップや別のProjectへのコピーなどに使用することを想定しています。

Exportの対象はProjectに登録された全てのFlowとFileです。
ユーザーはExportしたZIPファイルに含まれる一部のAssetのみを含む別のZIPファイルを作成し、そのZIPファイルを別のProjectにImportすることで必要なAssetのみをImportすることが可能です。

ImportできるAssetはExportしたZIPファイルに含まれるAssetのみです。ExportしたAssetを変更したファイルをImportするとエラーになります。

Assetの数によっては多くの時間を要するため、Import/Exortの実行結果はメールにて通知します。

## 説明 {#Description}

### 前提 {#Prerequisite}

- Import/Exportを実施できるのはProjectのowner又はadminのみです
- File AssetをImport/Exportできるのは有料プランのProjectのみです
- [プライベートノード](../PrivateNodes/index.md)を含むFlowのImport/Exportも実施できますが、そのFlowをデプロイするには、利用されているプライベートノードをユーザーがProjectに別途登録し、Web Flow EditorでFlowを保存し直す必要があります

### Assetファイルの形式 {#AssetFileFormat}

Import/Exportの対象であるAssetファイルの形式について説明します。

AssetファイルにはAssetの本体(enebularで作成したFlowやアップロードしたFile)とAssetの名前や説明などの設定情報を複数Asset/複数バージョン分格納します。

#### フォルダ構成

AssetファイルはZIPによる圧縮ファイルであり、以下のフォルダ構成を圧縮したファイルです。

* `<Project名>`フォルダ
    * `flows`フォルダ
        * `<Flow Asset名>`フォルダ (注1)
            * `<Version>`フォルダ (注2)
                * `settings.json`ファイル(注3)
                * `flow.json`ファイル (注4)
    * `files`フォルダ
        * `<File Asset名>`フォルダ (注1)
            * `<Version>`フォルダ (注2)
                * `settings.json`ファイル
                * `登録時にアップロードしたファイル`

(注1) 同名のAssetが存在していた場合は末尾に`_n`(nは1から始める整数)を付与します。  
(注2) `<Version>`フォルダ名は、master又はバージョン番号を表す整数となります。各Assetフォルダの下には必ずmasterフィルダが存在する必要があります。  
(注3) Node-REDのNodeに設定したパスワードなどのCredential情報を含むため取り扱いに注意してください。  
(注4) Flow Editorの`クリップボードから読み込み`機能により参照するためのファイルです。パスワードなどのCredential情報は含みません。Import機能ではこのファイルを参照しません。  

#### settings.jsonの内容

settings.jsonは、Asset毎の設定情報を保存するJSON形式のファイルです。  
文字コードはUTF-8、改行コードはCRLFです。

##### Flowの場合

Flowの場合、settings.jsonファイルは以下の内容を含みます。

|項目|説明|
| --- | --- |
|title|Flowの名称。Versionフォルダ名がmasterの場合はAsset名、master以外の場合はVersionのTitleとなります。|
|description|Flowの説明。Versionフォルダ名がmasterの場合はDescription、master以外の場合はVersionのCommentです。|
|category|Assetのカテゴリ。|
|type|Assetの種類。Flowの場合は`flow`固定となります。|
|sourceCode|Flowの情報。Node-REDのFlowやパスワードなどのCredential情報を含みます。|
|projectId|Export対象のProjectId。|
|tagTitles|Assetに付与したTag名のリスト。|
|defaultPrivilege|デフォルトの権限。Importを行なった場合、Importを行ったユーザー以外のProjectメンバの権限はここで指定した権限になります。|
|hash|ExportしたAssetが変更されていないことを確認するために用いる情報。|

##### Fileの場合

Fileの場合、settings.jsonファイルは以下の内容を含みます。

|項目|説明|
| --- | --- |
|title|Fileの名称。Versionフォルダ名がmasterの場合はAsset名、master以外の場合はVersionのTitleとなります。|
|description|Fileの説明。Versionフォルダ名がmasterの場合はDescription、master以外の場合はVersionのCommentです。|
|type|Assetの種類。Fileの場合は`file`固定となります。|
|sourceCode|Fileの情報。|
|projectId|Export対象のProjectId。|
|tagTitles|Assetに付与したTag名のリスト。|
|category|Assetのカテゴリ。Fileの場合は空文字となります。|
|defaultPrivilege|デフォルトの権限。Importを行なった場合、Importを行ったユーザー以外のProjectメンバの権限はここで指定した権限になります。|
|hash|ExportしたAssetが変更されていないことを確認するために用いる情報。|

### Export機能の使い方 {#HowToUseExport}

AssetをExportするときの操作手順を説明します。

1. AssetをExportしたいProject画面を開きます
1. Asssets画面の右上のSettingsをクリックします
1. 表示されたサブメニューの中からExport Assetをクリックします
1. 確認ダイアログが表示されるため、Exportボタンをクリックします
1. Exportが完了するとenebularに登録したemailアドレスにメールが到達します
1. メールに記載されたDownload linkをクリックし、Assetファイルをダウンロードします

Export実行結果のメールには以下の内容を含みます。

- flow/file count: ExportしたAssetの件数
- Export error list: 発生したエラーのリスト(エラーが発生した場合)
  - エラーのあったAsset名
  - エラーメッセージ
- Download link: Assetファイルをダウンロードするためのリンク

※ Exportした一部のAssetにエラーがあった場合にも成功したAssetのみを含んだZIPファイルをダウンロードすることができます  

### Import機能の使い方 {#HowToUseImport}

AssetファイルをImportするときの操作手順を説明します。

1. AssetのImport先のProject画面を開きます
1. Asssets画面の右上のSettingsをクリックします
1. 表示されたサブメニューの中からImport Assetをクリックします
1. 確認ダイアログが表示されるため、Importボタンをクリックします
1. Importが完了するとenebularに登録したemailアドレスにメールが到達します

Import実行結果のメールには以下の内容を含みます。

- flow/file count: ImportしたAssetの件数
- Import error list: 発生したエラーのリスト(エラーが発生した場合)
  - エラーのあったAsset名
  - エラーメッセージ

※ Importした一部のAssetにエラーがあった場合にもImport処理を中断せず、他のAssetのImportは継続して実施します  
※ Import先のProjectに同名のAssetが存在する場合には、Asset名の末尾に`_n`(nは1から始まる整数)を付与します

## 使用例

ExportしたZIPファイルを変更して別のProjectにImportする際の使用例を説明します。

### 不要なAssetの削除

Importが不要のAssetがある場合、そのAssetの`<Flow Asset名>`フォルダを削除したZIPファイルを作成し、Importすることで実現できます。

### 不要なVersionの削除

`<Flow Asset名>`フォルダに不要なVersionがある場合は、そのVersionフォルダを削除した上でImportすることで実現できます。
例えばmaster、1、2のVersionフォルダがあった場合、2のみ残したいときはmasterと1フォルダを削除し、2をmasterに変更してZIPファイルを作成し、それをImportします。  
但し、この場合はVersion2のVersionタイトルがAsset名に、VersionのコメントがAssetの説明になるため注意してください。これらを修正したい場合には、Importした後に、enebularの画面から修正してください。

## 制約事項

* Versionを利用できるのは有料プランのProjectのみです。有料プランのProjectからExportしたVersionを含むAssetを無料プランのProjectにImportした場合、masterフォルダのAssetのみが利用可能となります。
* enebularに多くの負荷がかかることを抑止するために、Asset Import/Export機能の同時実行数を制限しています。Asset Import/Exportを実行した際にこの制限を超えていた場合はエラーとなります。
* Export機能を実行中に、Export対象のAssetを削除しないでください。削除した場合、Assetの特定のバージョンのExport処理でエラーが発生し、そのバージョンを含まないZIPファイルが出力されることがあります。
