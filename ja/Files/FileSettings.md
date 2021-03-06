# ファイル設定 {#File settings}

ファイルの設定項目について説明します。

## File {#File}

enebular にアップロードするファイルを選択します。

-   最大ファイルサイズは 500MB です。

## Name {#Name}

ファイルのアセット名を入力します。
入力できる文字は、半角英数字、アンダースコア、ハイフンです。1~30文字以内で入力して下さい。

## Description {#Description}

ファイルの説明を入力します。
512文字まで入力することができます。

## Deploy Directory {#Deploy Directory}

ファイルをデプロイした際のディレクトリ名を指定します。

-   enebular-agent の`ports/<port>/assets` ディレクトリ以下のディレクトリ名になります
-   例えば、enebular-agent の AWS IoT ポートを利用して、アップロードするファイルのファイル名が`foo.txt`で、Deploy Directory に`bar`を入力した場合、enebular-agent 下の`ports/awsiot/assets/bar/foo.txt`にファイルが保存されます
-   Deploy Directory が指定されない場合は、ファイルがそのまま`ports/<port>/assets`ディレクトリの下に保存されます

入力できる文字は、半角英数字、アンダースコア、ハイフンです。1~30文字以内で入力して下さい。

## Execution {#Execution}

デプロイしたファイルを実行ファイルとみなして実行させたい場合の設定です。

### Execute On Deploy {#Execute On Deploy}

有効にした場合、デプロイしたファイルを実行ファイルとみなして実行します。
このとき enebular-agent と同じユーザーとして、実行します。
以下の項目は、このトグルをオンにした際に表示されます。

### Max Execution Time {#Max Execution Time}

Execution の最大実行時間を設定します。
指定できる時間は、秒単位で 1〜300 秒(5 分)です。

最大実行時間を経過しても、Execution で指定されたファイルの実行が続いている場合は、強制的に処理を停止します。

### Execution Arguments {#Execution Arguments}

実行時の引数を設定します。

### Environment Variables {#Environment Variables}

環境変数の設定を行います。

-   KEY
    -   環境変数名を入力します
-   VALUE
    -   値を入力します

## Deploy Hooks {#Deploy Hooks}

デプロイの実施時にデプロイ済みのファイルを実行する機能です。

### Stage {#Stage}

Pre-Deploy あるいは、Post-Deploy を選択します。

#### Pre-Deploy {#Pre-Deploy}

デプロイの実施前に、Pre-Deploy としてデプロイ済みのファイルを実行します。
ファイルが指定されない場合は、Pre-Deploy は実行されません。

e.g.)デプロイ実施前に、デプロイ先フォルダの不要なファイルを削除する処理を行うシェルスクリプトを実行する。

#### Post-Deploy {#Post-Deploy}

デプロイの実施後に、Post-Deploy としてデプロイ済みのファイルを実行します。
ファイルが指定されない場合は、Post-Deploy は実行されません。

e.g.)デプロイ実施後に、デプロイ先フォルダの不要なファイルを削除する処理を行うシェルスクリプトを実行する。

### Asset Path {#Asset Path}

実行したいファイルアセットのパスを入力します。

### Max Execution Time {#Max Execution Time}

Pre-Deploy および Post-Deploy の最大実行時間を設定します。
指定できる時間は、秒単位で 1〜300 秒(5 分)です。

最大実行時間を経過しても、Pre-Deploy および Post-Deploy で指定されたファイルの実行が続いている場合は、強制的に処理を停止します。

## Privilege {#Privilege}

デフォルトのアクセス権
