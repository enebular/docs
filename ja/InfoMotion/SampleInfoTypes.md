---
lastUpdated: 2018-04-13
---

# Sample InfoTypes 

Sample InfoTypes は、データをテストするための無料で利用できるグラフです。

## Line Chart 

<ul> 
  <li><a href="/_asset/sample/linechart.zip" target="_blank">Sample Line Chart Download (zip)</a></li> 
</ul> 

![](/_asset/images/InfoMotion/enebular-developers-template-linechart.png)

#### 概要

一般的な、2種類の数値をX軸とY軸にプロットして作る折れ線グラフです。


#### データスキーマ

```
{
  "id":String,
  "value":Number,
  "created": UNIX timestamp
}
```

変更可能なパラメータは以下です。

- 値のkey名 
- 値の凡例 
- 表示されるデータの数 

## Bar Chart 

<ul> 
  <li><a href="/_asset/sample/barchart.zip" target="_blank">Sample Bar Chart Download (zip)</a>
  </li> 
</ul> 

![](/_asset/images/InfoMotion/enebular-developers-template-barchart.png)

#### 概要

一般的な、カテゴリーごとにデータの値を集計して棒の長さで表示する棒グラフです。

#### データスキーマ

```
{
  "id":String,
  "value":Number,
  "created": UNIX timestamp
}
```

変更可能なパラメータは以下です。

- 値のkey名
- 値の凡例 

## Pie Chart 

<ul> 
  <li> 
    <a href="/_asset/sample/piechart.zip" target="_blank">Sample Pie Chart Download (zip)</a></li> 
</ul> 

![](/_asset/images/InfoMotion/enebular-developers-template-piechart.png)


#### 概要

一般的な、カテゴリーごとにデータの割合を表示する円グラフです。

#### データスキーマ

```
{
  "id":String,
  "value":Number,
  "created": UNIX timestamp
}
```

変更可能なパラメータは以下です。

- 値のkey名
- 値の凡例 

[Uploading an InfoType](./UploadInfoType.md) で InfoType のアップロードの方法を知ることができます。