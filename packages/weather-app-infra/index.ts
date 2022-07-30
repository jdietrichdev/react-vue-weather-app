import * as cdk from 'aws-cdk-lib';

if (!process.env.branch_ref) {
  console.log('No branch env variable set');
  process.exit(1);
}

const stackId = process.env.branch_ref.split('/').pop() + '';
const weatherApp = new cdk.App();