##Creating a data flow 

Once a milkcocoa app has been registered we can create「New Flow」.
This is a simple example that uses three nodes.

`inject` - executes code at intervals 

`function` - generate dummy data 

`milkcococa` - stores dummy data 

Once all nodes are complete click deploy to execute code. 

![](/_asset/images/enebular-developers-flow2.png) 

##Inject node 

Set timestamp node interval for every 10 seconds. 

##Function node 

The following script generates dummy data.

```bash

function getRandomNumber(min,max){
    return Math.floor((Math.random() * max) + min);    
}

function getDateNow(){
    return Date.now();
}

var countries = [
    "Japan",
    "USA",
    "India",
    "China",
    "Germany"
]

function getCountry(){
    var countryIndex = countries.length;
    var index = getRandomNumber(0,countryIndex)
    return countries[index]
}

var data = {
    "datetime":getDateNow(),
    "country":getCountry(),
    "value":getRandomNumber(1,100)
}

msg.payload = data;

return msg;

``` 
##Milkcocoa node

The milkcocoa node requires the following settings to work.

* **App ID**:`app_id`
* **API Key**: `API Key`
* **API Secret**: `API Secret`
* **Data Store**: `type-tutorial`
* **Operation**: `Push`

##Connecting Datasource

Click「DataSource」and create dataSource using milkcocoa 
After all inputs are filled save the data source. 

![](/_asset/images/enebular-developers-datasource2.png)