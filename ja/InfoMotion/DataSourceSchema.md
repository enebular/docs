---
lastUpdated: 2018-11-16
---

# Data Source Schema 

データソースに格納されるデータは、下記のスキーマに従う必要があります。
`timestamp` には、Unix タイムスタンプ値を入れます。
InfoMotion は `timestamp` を daterange picker と timeline、query に使用します。 
`value` にはInfoType のビジュアライズに必要なデータを入れます。 

##Sample Data 

```javascript
{
	timestamp: Unix Timestamp seconds since Jan 01 1970. (UTC), // timestamp for daterange, timeline and querying. 
	value:{ 
		// data here is passed to the infotype 
	} 
} 
``` 

##JSON Data Schema

```json
 {
   "type": "object",
   "required": [
     "timestamp",
     "value"
   ],
   "properties": {
     "timestamp": {
       "$id": "#/properties/timestamp",
       "type": "integer",
       "title": "The Timestamp Schema",
       "examples": [
         1542352981750
       ]
     },
     "value": {
       "$id": "#/properties/value",
       "type": "object",
       "title": "The Value Schema"
     }
   }
 }

```
