# CDK VSCode Debugging Example

Launch file for this project is

```json
{
    "version": "0.2.0",
    "configurations": [

        {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "skipFiles": [
            "<node_internals>/**"
        ],
        "runtimeArgs": [
            "-r", "./node_modules/ts-node/register/transpile-only"
        ],
        "args": [
            "${workspaceFolder}/bin/aws-cdk-vscode-example.ts"
        ]
        }
    ]
}
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
