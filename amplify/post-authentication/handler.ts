import type { PostAuthenticationTriggerHandler } from "aws-lambda";
// import {
//   CognitoIdentityProviderClient,
//   AdminGetUserCommand,
// } from "@aws-sdk/client-cognito-identity-provider";

// const client = new CognitoIdentityProviderClient();

// add user to group
export const handler: PostAuthenticationTriggerHandler = async (event) => {
  console.log("processed", event);
  // command = new UpdateUserAttributesCommand({
  //   UserAttributes: [{ Name: "custom:google_oauth", Value: "true" }],
  //   AccessToken: "",
  // });
  // response = await client.send(command);
  // console.log("processed", event, response.$metadata.requestId);
  return event;
};
