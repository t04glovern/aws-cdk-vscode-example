#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkVscodeExampleStack } from '../lib/aws-cdk-vscode-example-stack';

const app = new cdk.App();
new AwsCdkVscodeExampleStack(app, 'AwsCdkVscodeExampleStack');
