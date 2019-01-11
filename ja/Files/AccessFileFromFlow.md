---
lastUpdated: 2019-01-11
---

# Flowからのファイルアクセス {#Accessing Files From Flows}

デバイスにデプロイしたファイルを同じデバイスにデプロイしたFlowから参照することが出来ます。ここでその参照方法について説明します。

## ファイルのパス

デバイスにデプロイされたFlowで `ENEBULAR_ASSETS_DATA_PATH` 環境変数によってデバイス上のファイル保存先のベースディレクトリを参照できるようになっています。

ファイルがこの環境変数で指定されているパスの下に **Deploy Directory** ディレクトリの中に保存されますので、
以下のパターンのように環境変数と、ファイルの **Deploy Directory** 、ファイルのファイル名を合わせるとファイルのフルパスを取得できます。

```
<ENEBULAR_ASSETS_DATA_PATH>/<Deploy Directory>/<Filename>
```

## 事例

この例には、ファイルの **Deploy Directory** が `hoge`、ファイル名が `hige.txt` だとします。

Flowで **process-env** タイプのノードを利用して環境変数を取得できます。このノードのプロパティを以下のように設定します。

| プロパティ名 | 説明 | 設定内容 |
| --- | --- |
| Key | 環境変数名 | ENEBULAR_ASSETS_DATA_PATH |

次に、**function** タイプのノードを追加し、**Function** プロパティで **Deploy Directory** とファイル名を結合するJAVASCRIPTを入力します。

```
msg.payload = msg.payload + '/hoge/hige.txt';
return msg;
```

これで、このノードからのメッセージの`payload`を次のノードでファイル名として利用できます。
