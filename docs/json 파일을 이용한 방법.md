# **json**파일을 이용한 방법

```
npm i swagger-ui-express
```

<br>

step 1. `swagger/swagger.json` 폴더 및 파일 생성<br>
json 코드는 동일하기 때문에 링크로 대체 - [swagger/swagger.json 바로가기](https://github.com/waveinyu/swagger_test/blob/main/swagger/swagger.json)

<br>

step 2. `app.js` 에 `swagger-ui`와 위에서 작성한 `swagger.json`파일 임포트<br>

```javascript
// swaggerJsdocs 필요 없음, swagger.json이기 떄문에 ui-express를 app.js에 임포트
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```
