---
lastUpdated: 2018-10-17
---

# Data Source スキーマ

InfoMotion を利用する場合、データソースが提供するデータは、どのデータソースであっても以下のスキーマに従う必要があります。  

```javascript
{
  timestamp: Unix Timestamp milliseconds since Jan 01 1970. (UTC), // timestamp for daterange, timeline and querying. 
  value:{ 
    // data here is passed to the infotype 
  } 
} 
```

InfoMotionが、daterange picker や timeline によるビジュアライズするデータ範囲の指定を可能とするために `timestamp` (Unix タイムスタンプ値)が必要です。  
`value`はビジュアライズするために InfoType に渡されます。

以下に例を示します。

```javascript
{
  timestamp: 1538552210829,
  value:{ 
    created: 1538552210829,
    label: "A",
    value: 2
  } 
} 
```

`value` に入れるデータは、InfoTypeの種類に応じて変わることがあります。  
例えば、Line Chart の InfoType は、X軸方向に折れ線を描画するために、上記に示すデータの生成時刻( `created` ) が必要です。  
InfoTypeに応じて必要となるデータについては、InfoTypeのサンプルデータをご参照ください。
