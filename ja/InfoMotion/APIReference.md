---
lastUpdated: 2017-12-14
---

InfoType API
============

`infomotion-tool` で作成された `plugin.js` はいくつかの API を持っています。

addData
-------

Datarange picker かタイムラインが変更されたタイミングで呼ばれます。

* Parameter: data

`data`　は Datarange picker とタイムラインで指定された範囲のものになります。

clearData
---------

Datarange picker かタイムラインが変更されたタイミングで addData の前に呼ばれます。

* Parameter: N/A

resize
------

ブラウザウインドウのサイズが変更されたら呼ばれます。

* Parameter: option.width, option.height

getEl
-----

DOM を返します。

* Parameter： N/A

InfoType のスキーマ
-----------------------

柔軟にデータを利用するために、4種類のグラフのスキーマを用意しています。

- text
- list
- select
- bool

スキーマに加え、デフォルトの設定を指定することができます。

### text {#text}

基本的な key-value の設定です。

```
* Schmea

{
  type: "text",
  name: "tag"
}

* Default
{
  "tag" : "tag-name"
}
```

![](../_asset/images/InfoMotion/enebular-developers-type-text.png)

### list {#list}

基本的な key-value のリストです。

```
* Schema
{
  type: "list",
  name: "list-of-tags",
  help: "Set name of each tag",
  children: [{
    type: "text",
    name: "tag"
  }]
}

* Default
{
  "list-of-tags":[
    {tag:"tag1"},
    {tag:"tag2"},
    {tag:"tag3"}
  ]
}
```

![](../_asset/images/InfoMotion/enebular-developers-type-list.png)

### select {#select}

用意された選択肢から選択する場合に利用します。

```
* Schema
{
  type: "select",
  name: "mode",
  help: "please select a mode",
  options: ["mode1", "mode2"]
}

* Default
{
  "mode":"mode2"
}
```

![](../_asset/images/InfoMotion/enebular-developers-type-select.png)

### bool {#bool}

true / false を選択させるときに利用します。

```
* Schema
{
  type : "bool",
  name : "switch",
  help : "turning on will display something"
}

* Default
{
  "switch": true
}
```

![](../_asset/images/InfoMotion/enebular-developers-type-switch.png)
