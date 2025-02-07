import express from 'express'
import bodyParser from 'body-parser';
import newsController from './crontollers/newsController'

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/news', newsController);

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`);
});
