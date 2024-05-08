#!/bin/bash

echo "IH42 輸送コンテナ管理システム 終了中"

cd "$(dirname "$0")" || exit 1

docker-compose down

echo "適切に終了しました"
