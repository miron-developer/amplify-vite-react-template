import { defineAuth, secret } from "@aws-amplify/backend";
// import { postAuthentication } from "../post-authentication/resource";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,

    externalProviders: {
      google: {
        clientId: secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
        scopes: ["profile", "email"],
        attributeMapping: {
          email: "email",
        },
      },
      loginWithAmazon: {
        clientId: secret("LOGINWITHAMAZON_CLIENT_ID"),
        clientSecret: secret("LOGINWITHAMAZON_CLIENT_SECRET"),
        scopes: ["profile"],
      },
      facebook: {
        clientId: secret("FACEBOOK_CLIENT_ID"),
        clientSecret: secret("FACEBOOK_CLIENT_SECRET"),
        scopes: ["public_profile", "email"],
      },
      callbackUrls: [
        "http://localhost:5173",
        "https://main.d18b9u7z4p1sli.amplifyapp.com",
        "https://eafd0d16198cb7e5b6de.auth.us-east-1.amazoncognito.com",
      ],
      logoutUrls: [
        "http://localhost:5173",
        "https://main.d18b9u7z4p1sli.amplifyapp.com",
        "https://eafd0d16198cb7e5b6de.auth.us-east-1.amazoncognito.com",
      ],
    },
  },

  // multifactor: {
  //   mode: "OPTIONAL",
  //   totp: true,
  // },

  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: false,
    },
    birthdate: {
      mutable: true,
      required: false,
    },
    "custom:display_name": {
      dataType: "String",
      mutable: true,
      maxLen: 16,
      minLen: 1,
    },
    "custom:favorite_number": {
      dataType: "Number",
      mutable: true,
      min: 1,
      max: 100,
    },

    // oauth flags
    "custom:google_oauth": {
      dataType: "Boolean",
      mutable: true,
    },
    "custom:facebook_oauth": {
      dataType: "Boolean",
      mutable: true,
    },
    "custom:amazon_oauth": {
      dataType: "Boolean",
      mutable: true,
    },
  },

  // triggers: {
  //   postAuthentication,
  // },

  // access: (allow) => [
  //   allow.resource(postAuthentication).to(["manageUsers", "listUsers"]),
  // ],
});
