# Node-RED {#NodeRed}

## 概要 {#Overview}

ここではNode-REDについて説明します。  

Node-REDはenebular-agentで動作しています。

## 説明 {#Description}

### 特徴 {#DescriptionFeature}
Node-REDの特徴
* APIやオンラインサービス、デバイスなどの機能を繋げてアプリケーションを作成していくプラットフォームです  
* オープンソースソフトウェアで、JavaScript環境（Node.js）で動作します  

デバイスが実行する処理の流れ（プログラム）のことをフローと言います。  
また、作成したフローをデバイスにダウンロードすることをデプロイと言います。  
enebular-agentのNode-REDはデプロイされたフローをデバイス（Linux）上で実行します。  

### プロセス {#DescriptionProcess}

Node-REDはLinuxのプロセスとして動作します。  
* プロセス名称：`node-red`
* 実行ユーザー：インストール時に指定したユーザー

詳細については、[ユーザー/フォルダ - ユーザー](UserFolder.md#DescriptionUser)を参照してください。  

### 備考 {#DescriptionRemarks}

Node-REDは[インストール手順 - オプション](Installation.md#DescriptionOption)の`-u`または`--user`と`-d`または`--install-dir`で指定したフォルダにインストールされます。  
`-u`または`--user`を<ユーザー>に指定し、`-d`または`--install-dir`を省略した場合は、次のフォルダにインストールされます。  
```
/home/<ユーザー>/enebular-runtime-agent/node-red/
```
Node-REDの詳細は、[Node-RED（外部リンク）](https://nodered.org/)を参照してください。  


Node.jsのインストール先フォルダは[インストール手順 - オプション](Installation.md#DescriptionOption)の`-u`または`--user`あるいは[アップデート手順 - オプション](Updater.md#DescriptionOption)の`--user`の指定と< Node.jsのバージョン>で決定します。  
インストール時に`-u`または`--user`を<ユーザー>に指定した場合は、次のフォルダにインストールされます。  
```
/home/<ユーザー>/nodejs-v<バージョン>/
```
Node.jsの詳細は、[Node.jsのHP（外部リンク）](https://nodejs.org/ja/)を参照してください。  

