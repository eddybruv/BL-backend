const swaggerDefinition = {
  info: {
    version: "3.0.0",
    title: "BL Backend API",
    description: "Backend onboarding task for Bridge Labs",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  servers: [
    {
      url: "https://bl-api-task.herokuapp.com/",
      description: "live(deployed) server",
    },
    {
      url: "http://localhost:5000/api-docs",
      description: "local(development) server",
    },
  ],
  swagger: "2.0",
  contact: {
    name: "Edwin Bimela Ajong",
    email: "edwinajong@gmail.com",
  },
  host: ["localhost:5000"],
  basePath: "/",
  schemes: ["http"],
  consumes: [
    "application/json",
    "multipart/form-data",
    "application/x-www-form-urlencoded",
  ],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      scheme: "bearer",
      in: "header",
    },
  },
  produces: ["application/json"],
  paths: {},
};

const options = {
  swaggerDefinition,
  apis: ["./docs/*/*.js"],
};

module.exports = options;
