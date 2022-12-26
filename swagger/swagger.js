const swaggerUi = require("swagger-ui-express"); // api 문서 UI 렌더링 패키지
const swaggerJsdocs = require("swagger-jsdoc"); // swagger 태그 주석 추가하여 api 문서화 패키지

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "swagger-test",
    },
    servers: [
      {
        url: "localhost:8000",
      },
    ],
  },
  apis: ["./app.js"],
};

const specs = swaggerJsdocs(options);

module.exports = {
  swaggerUi,
  specs,
};
