---
lastUpdated: 2018-11-16
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

## Sample Data

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

## JSON Data Schema

```json
{
  "type": "object",
  "required": ["timestamp", "value"],
  "properties": {
    "timestamp": {
      "$id": "#/properties/timestamp",
      "type": "integer",
      "title": "The Timestamp Schema",
      "examples": [1542352981750]
    },
    "value": {
      "$id": "#/properties/value",
      "type": "object",
      "title": "The Value Schema"
    }
  }
}
```
