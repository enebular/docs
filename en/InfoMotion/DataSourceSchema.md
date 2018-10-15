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

The `timestamp` key must have a Unix Timestamp value(milliseconds). 
InfoMotion could change the time range for visualization using daterange picke or timeline. Indicationg time range, InfoMotion reffers the `timestamp`.  
The `value` object supplies the InfoType with data to visualize. 

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

It need to use time for visualization like a Line Chart InfoType, you must add time data like above `created` under `value`.
