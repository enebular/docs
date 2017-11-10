InfoMotion Toolの使い方
===================

infomotion-toolのインストール
----------------------

```
# グローバルインストールします。
sudo npm install infomotion-tool -g
```

Usage
-----

```
Usage

eit create [graph name]  = InfoMotion Typeプロジェクトの作成（複数ファイルを含んだフォルダが作成されます）
eit run [graph name]     = サーバーを起動して、ブラウザで挙動を確認出来るようになる
eit package [graph name] = enebularにアップロード出来るかたちにパッケージ化
eit help                 = help
```

グラフ作成
-----

```
eit create myfirstgraph
```

`create`すると、以下のようなファイル群ができます。

![](/public/images/developers/enebular-developers-infomotion-type-directory.png)

主に`plugin.js`を編集することで、オリジナルのグラフ（InfoMotion Type）を作成します。

templateを利用する
-------------

```
# 棒グラフをテンプレートとする場合
eit create myfirstgraph -t barchart
```

実行（ブラウザでの挙動のテスト）
----------------

`run`すると、ブラウザで挙動をテストできます。

```
cd myfirstgraph
eit run
open http://localhost:3000
```

Tips: モックデータを追加する方法
-------------------

`eit run`などを実行すると`build`ディレクトリが作成されます。`build/data.js`を以下のように作成すると、モックデータを追加できます。

```
window.sampleData = {SampleData: [
  {created: 1469790372084, tag: "A", value: 100},
  {created: 1469790372080, tag: "B", value: 200},
  {created: 1469790572080, tag: "A", value: 200},
  {created: 1469790572080, tag: "B", value: 500},
]};
```

たくさんのモックデータを作るには？

```
function SampleData() {
    var start = new Date(new Date().getTime() - (1000*60*60*24*100)).getTime();
    var gen = function() {
        var date = new Date(start);
        var data = {created : date.getTime()};
        start += 1000*60*60*24;
        var y = date.getYear() + 1900
        var m = date.getMonth() + 1
        var d = date.getDate()
        data.date = y + '-' + m + '-' + d;
        data.val1 = Math.floor(Math.random() * 400);
        data.val2 = Math.floor(Math.random() * 1000)+300;
        return data;
    }
    var data = [];
    for(var i = 0;i < 100;i++) {
        data.push(gen());
    }
    return data;
}
window.sampleData = {SampleData: SampleData()};
```