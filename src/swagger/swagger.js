import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "src/swagger/swagger-output.json";
const endpointsFiles = ["src/api/routes/routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);