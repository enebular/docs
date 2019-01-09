---
lastUpdated: 2018-08-09
---

## Using Lambda to return data {#Using Lambda to return data}

Getting started with Lambda.

![CreateLambdaFunction-CreateLambdaFunction-lambda-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-lambda-en.png)

Create author from scratch using Node.js version 6.

![CreateLambdaFunction-authorFromScratch-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-authorFromScratch-en.png)

Daterange picker passes `start` and `end` parameters.
The following code returns data based on the parameters.

![CreateLambdaFunction-testLambda-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-testLambda-en.png)

```javascript
exports.handler = (event, context, callback) => {
  const timeunit = (Number(event.end) - Number(event.start))/100
  const category = ['A', 'B', 'C', 'D']
  const result = (function () {
    let arr = []
    for (var i = 100; i >= 1; i--) {
      arr.push({
        ts: Number(event.start) + Math.floor(timeunit*i),
            category:category[Math.floor(Math.random()*4)],
            value: Math.floor(Math.random()*10)
      })
    }
    return arr
  })()
  callback(null, result);
};
```

Creating an API Gateway that connects to the Lambda function.

![CreateLambdaFunction-amazonApiGgateway-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-amazonApiGgateway-en.png)

Creating a new API.

![CreateLambdaFunction-newApi-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-newApi-en.png)

Creating a new resource.

![CreateLambdaFunction-newResource-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-newResource-en.png)

Enter the path name and check "Enable API Gateway CORS".

![CreateLambdaFunction-newResourceChild-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-newResourceChild-en.png)

With resource completed create a GET method.

![CreateLambdaFunction-createGetMethod-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-createGetMethod-en.png)

Setting a method.
Select the Lamnda function created (It will not appear unless you select the region where you created Lamdba).

![CreateLambdaFunction-setupMethod-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-setupMethod-en.png)

Once a method is created edit the method response.

![CreateLambdaFunction-methodResponse-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-methodResponse-en.png)

Create the 200 hedder as "Access-Control-Allow-Origin".

![CreateLambdaFunction-200Header-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-200Header-en.png)

Create an intergration response.

![CreateLambdaFunction-intergrationResponse-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-intergrationResponse-en.png)

Set「Access-Control-Allow-Origin」」 as`'*'`.

![CreateLambdaFunction-accessControl-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-accessControl-en.png)

Lastly, change "Intergration Request".

![CreateLambdaFunction-intergrationRequest-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-intergrationRequest-en.png)

Create the following mapping of "body mapping template" with "application / json" as shown below

```json
{
  "start": "$input.params('start')",
  "end": "$input.params('end')"
}
```

![CreateLambdaFunction-bodyMapping-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-bodyMapping-en.png)
Next create a "deploy api".

![CreateLambdaFunction-deployApi-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-deployApi-en.png)

Input a deploy name.

![CreateLambdaFunction-deployName-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-deployName-en.png)

The resource named `/ test` becomes the endpoint to be registered with DataSource.

```
*example endpoint.
https://*********.execute-api.ap-northeast-1.amazonaws.com/teststage/test
```

![CreateLambdaFunction-exampleEndpoint-en](./../../../../img/InfoMotion/DataSource/APIGateway/CreateLambdaFunction-exampleEndpoint-en.png)
