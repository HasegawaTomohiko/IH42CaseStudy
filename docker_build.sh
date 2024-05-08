#!/bin/bash

echo "IH42 輸送コンテナ管理システム ビルド中"

CLIENT_IMAGE=ih42casestudy-client
CLIENT_VOLUME=ih42casestudy_ih42-client-node-modules
SERVER_IMAGE=ih42casestudy-server
SERVER_VOLUME=ih42casestudy_ih42-server-node-modules
DATABASE_IMAGE=ih42casestudy-database
DATABASE_VOLUME=ih42casestudy_ih42-database

cd "$(dirname "$0")" || exit 1

# クライアント
echo "クライアントイメージ及びボリューム削除中"
docker image inspect "$CLIENT_IMAGE" > /dev/null 2>&1
if [ $? -eq 0 ]; then
  docker image rm "$CLIENT_IMAGE"
  echo "イメージ $CLIENT_IMAGE を削除しました"
else
  echo "イメージ $CLIENT_IMAGE は存在しません"
fi

docker volume inspect "$CLIENT_VOLUME" > /dev/null 2>&1
if [ $? -eq 0 ]; then
  docker volume rm "$CLIENT_VOLUME"
  echo "ボリューム $CLIENT_VOLUME を削除しました"
else
  echo "ボリューム $CLIENT_VOLUME は存在しません"
fi

# サーバー
echo "サーバーイメージ及びボリューム削除中"
docker image inspect "$SERVER_IMAGE" > /dev/null 2>&1
if [ $? -eq 0 ]; then
  docker image rm "$SERVER_IMAGE"
  echo "イメージ $SERVER_IMAGE を削除しました"
else
  echo "イメージ $SERVER_IMAGE は存在しません"
fi

docker volume inspect "$SERVER_VOLUME" > /dev/null 2>&1
if [ $? -eq 0 ]; then
  docker volume rm "$SERVER_VOLUME"
  echo "ボリューム $SERVER_VOLUME を削除しました"
else
  echo "ボリューム $SERVER_VOLUME は存在しません"
fi

# データベース
echo "データベースイメージ及びボリューム削除中"
docker image inspect "$DATABASE_IMAGE" > /dev/null 2>&1
if [ $? -eq 0 ]; then
  docker image rm "$DATABASE_IMAGE"
  echo "イメージ $DATABASE_IMAGE を削除しました"
else
  echo "イメージ $DATABASE_IMAGE は存在しません"
fi

docker volume inspect "$DATABASE_VOLUME" > /dev/null 2>&1
if [ $? -eq 0 ]; then
  docker volume rm "$DATABASE_VOLUME"
  echo "ボリューム $DATABASE_VOLUME を削除しました"
else
  echo "ボリューム $DATABASE_VOLUME は存在しません"
fi

echo "ビルド開始"
docker-compose build

echo "ビルドが完了しました"
