---
lastUpdated: 2018-10-29
---

# Data Source スキーマ

すべてのデータソースは以下のスキーマに従う必要があります。

```javascript
{
  ts: Unix Timestamp seconds since Jan 01 1970. (UTC), // timestamp for daterange, timeline and querying. 
  // All data in this object is passed to the infotype 
} 
```

- `ts`:  Unix タイムスタンプ値を入れます。InfoMotion が `ts` を daterange picker と timeline、query に使用します。 
- `value`: InfoType のビジュアライズに必要なデータを入れます。

#InfoType sample data 

Each InfoType may require specific keys and values. 
The type of data required for each InfoType can be seen on the right hand side 
in preview of the InfoType. 

![sampleBarChart](./../../img/infoMotion/DataSource/infotype-highlight.png) 

For an Enebular sample barchart the folowing data is required. 

```javascript
{
  ts: Unix Timestamp seconds since Jan 01 1970. (UTC),
  category:String,
  value:Number
} 
``` 
