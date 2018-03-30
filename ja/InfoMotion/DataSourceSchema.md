---
lastUpdated: 2018-03-29
---

# Data Source スキーマ

すべてのデータソースは以下のスキーマに従う必要があります。

```javascript
{
  timestamp: Unix Timestamp seconds since Jan 01 1970. (UTC), // timestamp for daterange, timeline and querying. 
  value:{ 
    // data here is passed to the infotype 
  } 
} 
```

- `timestamp`:  Unix タイムスタンプ値を入れます。InfoMotion が `timestamp` を daterange picker と timeline、query に使用します。 
- `value`: InfoType のビジュアライズに必要なデータを入れます。