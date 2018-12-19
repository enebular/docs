---
lastUpdated: 2018-12-19
---

# Nodes

enebular-edge-agent can execute flows created by enebular.
There are restrictions on available nodes.

### Table of Contents

-   [Node List](#nodeList)
-   [Execute Flow](#executeFlow)

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

### EEA category node

A node in the EEA category is a node created for enebular-edge-agent, and outputs a dummy values on the editor.
Deploying to enebular-edge-agent performs behaviors specific to edge devices.
For details, refer to the help of each node.

### Node Description

| Classification                    | Node         | Overview                                                                                      | Remarks                                 |
| --------------------------------- | ------------ | --------------------------------------------------------------------------------------------- | --------------------------------------- |
| input                             | inject       | Start flow at regular intervals                                                               | There are multiple restrictions ※ 1     |
| output                            | debug        | Output debug messages                                                                         | Can not output to the console           |
| function                          | http request | make a http request                                                                           |
| There are multiple restrictions※1 |
| function                          | change       | Convert and delete msg properties                                                             | -                                       |
| function                          | switch       | Set conditional branch                                                                        | -                                       |
| function                          | range        | Convert value of `msg.payload` by setting                                                     | -                                       |
| EEA                               | TSL2561      | Acquire illuminance value from TSL 2561 or TSL 2581                                           | -                                       |
| EEA                               | BME280       | The values ​​of temperature, humidity, and atmospheric pressure are acquired from the BME 280 |                                         |
| EEA                               | digitalout   | Perform digital output                                                                        | -                                       |
| EEA                               | analogin     | Acquire the input value from the A / D converter                                              | -                                       |
| EEA                               | interruptin  | Detect rising edge or falling edge of digital input and perform interrupt input               | The maximum simultaneous use limit is 5 |

※ 1 The following restrictions apply to **inject node**.

-   cron execution not supported
-   Does not support `After n seconds of Node-RED activation, do the following`
-   Only timestamp is output

※ 2 **http request node** has the following restrictions.

-   The maximum number of http request nodes that can be used simultaneously is 5
-   Only supports `GET`,`POST` methods
-   If 256 bytes are the upper limit of the response, `size over` is substituted into`msg.payload`
-   Does not support sending requests to https
-   Does not support proxy setting
-   Not compliant with basic authentication
-   Ignores settings `msg.cookies`,`msg.headers`, `msg.rejectUnauthorized`
-   Must not support mustache-style

## Execute Flow{#executeFlow}

**The maximum flow size that can be executed is 3 kB.** It is also not compatible with the Global context.

Also, enebular-edge-agent will not stop running the flow except in the following cases:

-   If the flow is programmed to stop
-   When an error in which flow can not be executed occurs
