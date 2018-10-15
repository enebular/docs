---
lastUpdated: 2018-10-15
---

# Data Source スキーマ

InfoMotion を利用する場合、データソースが提供するデータは以下のスキーマに従う必要があります。

```javascript
{
  timestamp: Unix Timestamp milliseconds since Jan 01 1970. (UTC), // timestamp for daterange, timeline and querying. 
  value:{ 
    // data here is passed to the infotype 
  } 
} 
```

- `timestamp`:  Unix タイムスタンプ値(ミリ秒)を入れます。InfoMotion では、daterange picker や timeline により、ビジュアライズするデータの範囲を指定することができます。データの範囲が指定された場合、InfoMotionは、`timestamp` の値を参照します。 
- `value`: InfoType のビジュアライズに必要なデータを入れます。

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

Line Chart の InfoType のように、ビジュアライズの際に時刻を利用する場合は、上記、`created` のように、 `value` の下にも時刻を表すデータを入れる必要があります。
