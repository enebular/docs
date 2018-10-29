---
lastUpdated: 2018-10-29
---

# Data Source Schema 

All datasource data must contain a `ts` key with a Unix Timestamp value. 
InfoMotion uses the `ts` for daterange picker, timeline and querying historical data. 
This object is also used with in the InfoType (graph/chart). 

```javascript 
{ 
  ts: Unix Timestamp seconds since Jan 01 1970. (UTC), // timestamp for daterange, timeline and querying. 
  // All data in this object is passed to the infotype 
} 
``` 

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
