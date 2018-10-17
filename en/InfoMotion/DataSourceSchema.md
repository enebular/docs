---
lastUpdated: 2018-10-15
---

# Data Source Schema 

Using InfoMotion, the data which provided by data source must follow a schema. 
All data source data must follow a schema. 

```javascript 
{ 
  timestamp: Unix Timestamp milliseconds since Jan 01 1970. (UTC), // timestamp for daterange, timeline and querying. 
  value:{ 
    // data here is passed to the infotype 
  } 
} 
``` 

InfoMotion requires the `timestamp` (Unix Timestamp) value for the daterange picker and timeline. The `value` object is passed into the infotype to visualize. 

Example shown as follows.

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

The `value` object may vary depending on the InfoType. 
For example, to visualize a line chart the value must contain a created date to scale an x axis (as shown above). Refer to the sample data of the infotype for the graphs required data. 
