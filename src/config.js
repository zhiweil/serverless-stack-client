const dev = {
  STRIPE_KEY: "pk_test_51Gvh02CIsTCGfp5jL3sbI7b0CL1B7jKuBf6fjWl2rPirHZtVhn0qB73Mc72Yn1i09SGTaxFu8lw8ZZx0wVkOmSaX00GJQKSf6d",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "zhiweiliu-notes"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://s20gzbx9ol.execute-api.ap-southeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_lp8LkERch",
    APP_CLIENT_ID: "7q2jrr4ga1djknkhbaghh2am03",
    IDENTITY_POOL_ID: "ap-southeast-2:013b723c-92e3-4944-ba0f-bf5f98e17aef"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51Gvh02CIsTCGfp5jL3sbI7b0CL1B7jKuBf6fjWl2rPirHZtVhn0qB73Mc72Yn1i09SGTaxFu8lw8ZZx0wVkOmSaX00GJQKSf6d",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "zhiweiliu-notes"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://s20gzbx9ol.execute-api.ap-southeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_lp8LkERch",
    APP_CLIENT_ID: "7q2jrr4ga1djknkhbaghh2am03",
    IDENTITY_POOL_ID: "ap-southeast-2:013b723c-92e3-4944-ba0f-bf5f98e17aef"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};