const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { MongoClient,ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');


const http = require('http'); // HTTP
const { Server } = require('socket.io');  //SocketIO

require('dotenv').config();

//サーバー設定
const server = express();
const PORT = 4000;

// Socket.IO用のポート
const SOCKET_PORT = 4001; 


// HTTPサーバー
const httpServer = http.createServer(server);

// Socket.IOサーバー
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Socket.IOポートの設定
httpServer.listen(SOCKET_PORT, () => {
  console.log(`Socket.IO サーバー起動開始 : http://localhost:${SOCKET_PORT}`);
});



//ルーティング設定(router)
// const {$router} = require("{$router's file path}");

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@casestudy.jynr4xd.mongodb.net/?retryWrites=true&w=majority&appName=CaseStudy`)
  .then(() => {
    console.log("MongoDBとの接続に成功しました。");
  })
  .catch(err => {
    console.log("MongoDBとの接続に失敗しました。")
    console.log("<<<=========== error log =============>>>");
    console.error(err);
  });

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

// Socket.IO
io.on('connection', (socket) => {
  console.log('ユーザーが接続しました');

  socket.on('disconnect', () => {
    console.log('ユーザーが切断しました');
  });

});