@echo off
chcp 65001 > nul
echo IH42 輸送コンテナ管理システム 起動中

cd /d %~dp0 REM バッチファイル移動

docker-compose up -d

echo 起動完了 : http://localhost:3000

pause