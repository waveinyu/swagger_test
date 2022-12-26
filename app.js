const express = require("express");
// const router = express.Router();
const app = express();
const port = 8000;

const { swaggerUi, specs } = require("./swagger/swagger");

// UI와 specs에 담은 옵션을 express router 환경에 연결
// url, apis 입력값으로 연결
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.get("/", (req, res) => {
  res.send("this is root page");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
