const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Sequelize } = require('sequelize');

//サーバー設定
const server = express();
const PORT = 4000;

//ルーティング設定(router)
// const {$router} = require("{$router's file path}");

//Sequelize初期設定(MySQL接続)
const sequelize = new Sequelize('ih42','root','root',{
  host: 'ih42-database',
  dialect: 'mysql',
  timezone: 'Asia/Tokyo',
});

//MySQL接続確認
sequelize
.authenticate()
.then(() => console.log('MySQLとの接続が確認出来ました'))
.catch((err) => {
  console.log('MySQLとの接続が確認できませんでした。');
  console.log('<<<<<===============error log===============>>>>>')
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