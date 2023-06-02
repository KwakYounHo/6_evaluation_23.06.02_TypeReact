import express from 'express';
import path from 'path';

const app: express.Express = express();

app.get('/', (req: express.Request,res: express.Response) => {
  res.sendFile(path.join(__dirname, "..","..", "dist", "index.html"));
});

app.use(express.static(path.join(__dirname, "..","..", "dist")));

app.listen(8080, ()=>{
  console.log('8080포트에서 서버 실행 중');
})