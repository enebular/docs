---
lastUpdated: 2018-03-29
---

# Data Source Schema 

All datasource data must follow a schema. 
The `timestamp` key must have a Unix Timestamp value. 
InfoMotion uses the `timestamp` for daterange picker, timeline and querying. 
The `value` object supplies the InfoType with data to visualize. 

```javascript
{
	timestamp: Unix Timestamp seconds since Jan 01 1970. (UTC), // timestamp for daterange, timeline and querying. 
	value:{ 
		// data here is passed to the infotype 
	} 
} 
``` 