---
lastUpdated: 2018-11-16
---

# Data Source Schema  {#Data Source Schema }

All datasource data must follow a schema. 
The `timestamp` key must have a Unix Timestamp value. 
InfoMotion uses the `timestamp` for daterange picker, timeline and querying. 
The `value` object supplies the InfoType with data to visualize. 

## Sample Data  {#Sample Data }

```javascript
{
	timestamp: Unix Timestamp seconds since Jan 01 1970. (UTC), // timestamp for daterange, timeline and querying. 
	value:{ 
		// data here is passed to the infotype 
	} 
} 
``` 

## JSON Data Schema {#JSON Data Schema}

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
