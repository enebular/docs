---
lastUpdated: 2018-04-12
---

# Creating an API Gateway DataSource

The following section is an example of using API Gateway as a datasource.

## Using Lambda to return data

Getting started with Lambda.

![](/_asset/images/infomotion/api-gateway/lambda.png)

Create author from scratch using Node.js version 6.

![](/_asset/images/infomotion/api-gateway/author-from-scratch.png)

Daterange picker passes `start` and `end` parameters.
The following code returns data based on the parameters.

![](/_asset/images/infomotion/api-gateway/test-lambda.png)

```javascript
exports.handler = (event, context, callback) => {
  const timeunit = (Number(event.end) - Number(event.start))/100
  const country = ['UK', 'CN', 'JP', 'NZ']
  const result = (function () {
    let arr = []
    for (var i = 100; i >= 1; i--) {
      arr.push({
        timestamp: Number(event.start) + Math.floor(timeunit*i),
        value:{
            country:country[Math.floor(Math.random()*4)],
            ss: Math.floor(Math.random()*50),
            uu: Math.floor(Math.random()*40),
            value: Math.floor(Math.random()*10),
            created:Number(event.start) + Math.floor(timeunit*i)
        }
      })
    }
    return arr
  })()
  callback(null, result);
};
```

Creating an API Gateway that connects to the Lambda function.

![](/_asset/images/infomotion/api-gateway/amazon-api-gateway.png)

Creating a new API.

![](/_asset/images/infomotion/api-gateway/new-api.png)

Creating a new resource.

![](/_asset/images/infomotion/api-gateway/new-resource.png)

Enter the path name and check "Enable API Gateway CORS".

![](/_asset/images/infomotion/api-gateway/new-resource-child.png)

With resource completed create a GET method.

![](/_asset/images/infomotion/api-gateway/create-get-method.png)

Setting a method.
Select the Lamnda function created (It will not appear unless you select the region where you created Lamdba).

![](/_asset/images/infomotion/api-gateway/setup-a-method.png)

Once a method is created edit the method response.

![](/_asset/images/infomotion/api-gateway/method-response.png)

Create the 200 hedder as "Access-Control-Allow-Origin".

![](/_asset/images/infomotion/api-gateway/200-hedder.png)

Create an intergration response.

![](/_asset/images/infomotion/api-gateway/intergration-response.png)

Set「Access-Control-Allow-Origin」」 as`'*'`.

![](/_asset/images/infomotion/api-gateway/access-control.png)

Lastly, change "Intergration Request".

![](/_asset/images/infomotion/api-gateway/intergration-request.png)

Create the following mapping of "body mapping template" with "application / json" as shown below

```json
{
  "start": "$input.params('start')",
  "end": "$input.params('end')"
}
```

![](/_asset/images/infomotion/api-gateway/body-mapping.png)

Next create a "deploy api".

![](/_asset/images/infomotion/api-gateway/deploy-api.png)

Input a deploy name.

![](/_asset/images/infomotion/api-gateway/deploy-name.png)

The resource named `/ test` becomes the endpoint to be registered with DataSource.

```
*example endpoint.
https://*********.execute-api.ap-northeast-1.amazonaws.com/teststage/test
```

![](/_asset/images/infomotion/api-gateway/example-endpoint.png)

Next create an api key.

![](/_asset/images/infomotion/api-gateway/api-key.png)

Create a name for the key.

![](/_asset/images/infomotion/api-gateway/create-api-key-name.png)

Now it becomes a registered apikey to be used for a DataSource.

![](/_asset/images/infomotion/api-gateway/api-key-success.png)
