---
lastUpdated: 2019-01-10
---

# ファイル設定 {#ファイル設定}

ファイルは下記の設定項目を持ちます。

## Title {#Title}

ファイル名を入力します。

## Description {#Description}

ファイルの説明を入力します。

## Deploy path {#Deploy path}

デプロイした際の保存先を指定します。  

- <root>/enebular-runtime-agent/ports/awsiot/assets/ 以下の自由なパス
- パスの指定は、<root>/enebular-runtime-agent/ports/awsiot/assets/以下のフォルダ名とファイル名です
- e.g. hoge/hige.txtを指定すると、`<root>/enebular-runtime-agent/ports/awsiot/assets/hoge/hige.txt` として保存されます

## Execution {#Execution}

デプロイしたファイルを実行ファイルとみなして実行させたい場合の設定です。

### Execute On Deploy

有効にした場合、デプロイしたファイルを実行ファイルとみなして実行します。
このときenebular-runtime-agentと同じユーザーとして、実行します。

### Max Execution Time

Execution の最大実行時間を設定します。
指定できる時間は、秒単位で0〜300秒(5分)とします。

最大実行時間を経過しても、Executionで指定されたファイルの実行が続いている場合は、強制的に処理を停止します。

### Execution Arguments

実行時の引数を設定します。

### Environmental Variables

環境変数の設定を行います。

- KEY
    - 環境変数名を入力します
- VALUE
    - 値を入力します

## Deploy Hooks {#Deploy Hooks}

デプロイの実施時にデプロイ済みのファイルを実行する機能です。

### Staging

#### Pre-Deploy

デプロイの実施前に、Pre-Deployとしてデプロイ済みのファイルを実行します。
ファイルが指定されない場合は、Pre-Deployは実行されません。

e.g.)デプロイ実施前に、デプロイ先フォルダの不要なファイルを削除する処理を行うシェルスクリプトを実行する。

#### Post-Deploy

デプロイの実施後に、Post-Deployとしてデプロイ済みのファイルを実行します。
ファイルが指定されない場合は、Post-Deployは実行されません。

e.g.)デプロイ実施後に、デプロイ先フォルダの不要なファイルを削除する処理を行うシェルスクリプトを実行する。

### Asset Path

実行したいファイルアセットのパスを入力します。

### Max Execution Time

Pre-Deploy および Post-Deploy の最大実行時間を設定します。
指定できる時間は、秒単位で0〜300秒(5分)とします。

最大実行時間を経過しても、Pre-Deploy および Post-Deployで指定されたファイルの実行が続いている場合は、強制的に処理を停止します。

## Default Role {#Default Role}

ファイルのロールを選択します。

## Category {#Category}

ファイルのカテゴリーを選択します。
