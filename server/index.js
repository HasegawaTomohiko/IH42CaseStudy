const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { MongoClient,ServerApiVersion } = require('mongodb');

//サーバー設定
const server = express();
const PORT = 4000;

//ルーティング設定(router)
// const {$router} = require("{$router's file path}");

const mongodb = new MongoClient(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@casestudy.jynr4xd.mongodb.net/?retryWrites=true&w=majority&appName=CaseStudy`,{
  serverApi:{
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function runMongoDb() {
  try {
    await mongodb.connect();

    await mongodb.db("admin").command({ ping : 1 });

    console.log("MongoDBとの接続が完了しました");
  } finally {
    await mongodb.close();
  }
}

runMongoDb().catch(console.dir);

//ミドルウェア設定
server.use(cors());
server.use(express.json());
server.use(cookieParser());
server.use(bodyParser.urlencoded({extended: false}));

//サーバールーティング設定
//server.use("${routerURL},${router variable}");

//テストAPI
server.get('/',(req,res) => {
  res.status(200).send('IH42テストURL確認。これが表示されていればサーバー起動完了です。');
});

server.get('/test',(req,res) => {
  res.status(200).send('これはサーバーからGET送信で得たレスポンスです。確認コード : $RES{IH42-SERVER-GET}');
});

server.post('/test',(req,res) => {
  const { text } = req.body;
  console.log(req.body);
  const modifierdText = text + '$RES{POST_RESULT}';
  res.status(200).send(modifierdText);
});

//サーバー起動
server.listen(PORT, () => {
  console.log(`サーバー起動開始 : http://localhost:${PORT}`);
});