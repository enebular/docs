---
lastUpdated: 2018-12-26
---

# Nodes

enebular-edge-agent can execute flows created by enebular.
There are restrictions on available nodes.

### Table of Contents

-   [Node List](#nodeList)
    - [EEA category node](#EEACategory)
    - [Node Description](#Details)
    - [Restrictions](#Restrictions)

## Node List{#nodeList}

Below are the nodes that run on enebular edge agent.
enebular edge agent nodes are categorised as `EEA`.

-   input
    -   inject
-   output
    -   debug
-   function
    -   http request
    -   switch
    -   change
    -   range
-   EEA
    -   TSL2561
    -   BME280
    -   digitalout
    -   analogin
    -   interruptin

### EEA category node {#EEACategory}

A node in the EEA category is a node created for enebular-edge-agent, and outputs a dummy values on the editor.
Deploying to enebular-edge-agent performs behaviors specific to edge devices.
For details, refer to the help of each node.

### Node Description{#Details}

| Classification | Node | Overview | Remarks |
| --- | --- | --- | --- |
| input | inject  | Start flow at regular intervals | There are multiple restrictions *1 |
| output | debug | Output debug messages | Can not output to the console |
| function | http request | make a http request | There are multiple restrictions *2 |
| function | change | Convert and delete msg properties | - |
| function | switch | Set conditional branch | - |
| function | range | Convert value of `msg.payload` by setting | - |
| EEA | TSL2561 | Acquire illuminance value from TSL 2561 or TSL 2581 | - |
| EEA | BME280 | The values ​​of temperature, humidity, and atmospheric pressure are acquired from the BME 280 | - |
| EEA | digitalout | Perform digital output | It is for LED and so on. |
| EEA | analogin | Acquire the input value from the A / D converter | It is for moisture sensor, volume bar and so on. |
| EEA | interruptin | Detect rising edge or falling edge of digital input and perform interrupt input | It is for Switch type module. The maximum simultaneous use limit is 5 |


#### Restrictions{#Restrictions}

Be careful. Common restrictions are as follows. 

- Does not support `Global Context`, `Sequence rules` and `type: binary`
- Can not be used that depends on npm module (JSONata,mustache and so on)


\* 1 **inject node** has the following restrictions.

-   Support only `repeat`
-   Only timestamp is output

\* 2 **http request node** has the following restrictions.

-   The maximum number of http request nodes that can be used simultaneously is 5
-   Only supports `GET`,`POST` methods
-   If 256 bytes are the upper limit of the response, `size over` is substituted into`msg.payload`
-   Does not support sending requests to https