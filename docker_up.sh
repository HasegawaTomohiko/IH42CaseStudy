#!/bin/bash

echo "IH42 輸送コンテナ管理システム 起動中"

cd "$(dirname "$0")" || exit 1

docker-compose up -d

echo "起動完了 : http://localhost:3000"
