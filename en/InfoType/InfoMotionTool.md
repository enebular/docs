InfoMotion Tool Manual
===================

Installing infomotion-tool
----------------------

```
# Installing globally。
sudo npm install infomotion-tool -g
```

Commands 
-----

```
Usage

eit create [graph name]  = Creates an InfoType with the [graph name] 
eit run [graph name]     = Runs [graph name] on local server 
eit package [graph name] = Create a packge to upload on enebular 
eit help                 = help 
```

Creating a graph 
-----

```
eit create myfirstgraph
```

`create` builds the following files 

------ FILES IMAGE ----- 

`plugin.js` hold the main logic/script for the InfoType 

InfoType templates 
------------- 

Here are avaiable templates that can be pre-made. 
``` 
eit create myfirstgraph -t barchart 
eit create myfirstgraph -t linechart 
eit create myfirstgraph -t piechart 
eit create myfirstgraph -t map 
```

Running locally in the browser 

---------------- 

The `run` command 

``` 
cd myfirstgraph 
eit run 
open http://localhost:3000 
``` 
