import * as cdk from '@aws-cdk/core';
import lambda = require('@aws-cdk/aws-lambda');
import apigw = require('@aws-cdk/aws-apigateway');

export class AwsCdkVscodeExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hi_handler = new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromInline(
        'exports.handler = function(event, ctx, cb) { return cb(null, "hi"); }'
      ),
      handler: 'index.handler',
    });

    new apigw.LambdaRestApi(this, 'hi-endpoint', {
      handler: hi_handler
    });
  }
}
