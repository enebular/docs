InfoType API
===================

`infomotion-tool`で`create`した際にできる`plugin.js`で使用するAPIの説明です。こちらを参考にInfoTypeの開発を行って下さい。

addData
-------

日付選択やタイムラインを移動した時にaddDataが呼ばれます。データを受け取りグラフを表示させましょう。

* パラメータ: data

日付選択時には、clearData, addData, addData・・・ の順で呼ばれます。この時addDataは何回呼ばれるかわかりません。

タイムライン選択時には、clearData, addData の順で呼ばれます。

clearData
---------

日付選択やタイムラインを移動した時にclearDataが呼ばれます。clearDataが呼ばれた時は、グラフに表示しているデータをリセットしましょう。

* パラメータ: パラメータ無し

onDrillDown
-----------

渡されたcallbackを呼ぶことで、Drill Downを実現できます。

* パラメータ: callback

例えば棒グラフで、langがJPの棒を選択された場合に、以下のようにcallbackを呼びましょう。

```
callback({lang: "JP"});
```

resize
------

グラフのサイズが変更された時に呼ばれます。resize処理を入れましょう。

* パラメータ: option.width, option.height

zoom
----

* パラメータ: point

getEl
-----

DOMを返してください。

* パラメータ： パラメータ無し