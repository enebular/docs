---
lastUpdated: 2018-03-28
---

# InfoType

InfoType とは InfoMotion で利用するグラフのタイプのことです。

以下に、デフォルトのグラフの例を示します。

```javascript
// 以下のようなデータが複数個あるとします
{
  created: Number,
  lang: String,
  node_id: Number,
  ss: Number,
  uu: Number
}
```

- Bar Chart
![](/_asset/images/InfoMotion/enebular-developers-template-bar.png)

- Line Chart
![](/_asset/images/InfoMotion/enebular-developers-template-line.png)
- Pie Chart
![](/_asset/images/InfoMotion/enebular-developers-template-pie.png)

- [InfoType の作成方法はこちら](./InfoMotionTool.md)
- [作成した InfoType を enebular へアップロードする方法はこちら](./UploadInfoType.md)

InfoType をアップロードすると、enebular 上で確認できます。

![](https://i.gyazo.com/9e7c26c3948b2ebbd77734439afdcc63.png)

InfoType を選択すると InfoType の詳細画面へ移動します。

## Overview

Overview ではグラフのプレビューができます。左からグラフ、スキーマ設定、データになります。スキーマとデータを変更して Preview を押すとグラフプレビューを更新できます。

![](https://i.gyazo.com/8da16592e6374c03b7b03798b31742e7.png)

右上の Update から InfoType のファイルが更新ができます。

![](https://i.gyazo.com/1c831878fc0adc47a97394e075ced78d.png)


## Settings

Settings では InfoType の名前の確認、説明の編集、InfoType の削除ができます。

![](https://i.gyazo.com/9c99f2ce91a7aeb6e542c18662191ab7.png)