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

/* GET sign in page. */
/**
 * @swagger
 * paths:
 *  /signin:
 *   get:
 *     tags: [SignIn]
 *     summary: 로그인 페이지
 *     responses:
 *       "200":
 *         description: 로그인 페이지 로드 성공
 *   post:
 *     tags: [SignIn]
 *     summary: 로그인 로직 처리
 *     parameters:
 *       - name: code
 *         in: Post
 *         type: string
 *         description: 로그인 정보(아이디)
 *     responses:
 *       "200":
 *         discription: 로그인 성공
 *         contnet:
 *           application:json
 *       "400":
 *         discription: 잘못된 파라메타 전달
 *
 */

app.get("/", (req, res) => {
  res.send("this is root page");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
