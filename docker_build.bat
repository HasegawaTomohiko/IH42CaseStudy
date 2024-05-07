@echo off
chcp 65001 > nul
echo IH42 輸送コンテナ管理システム ビルド中

set CLIENT_IMAGE=ih42casestudy-client
set CLIENT_VOLUME=ih42casestudy_ih42-client-node-modules
set SERVER_IMAGE=ih42casestudy-server
set SERVER_VOLUME=ih42casestudy_ih42-server-node-modules
set DATABASE_IMAGE=ih42casestudy-database
set DATABASE_VOLUME=ih42casestudy_ih42-database

cd /d %~dp0 REM バッチファイル移動

REM クライアント
echo クライアントイメージ及びボリューム 削除中
docker image inspect %CLIENT_IMAGE% >nul 2>&1
if %errorlevel% EQU 0 (
  docker image rm %CLIENT_IMAGE%
  echo イメージ %CLIENT_IMAGE% を削除しました
) else (
  echo イメージ %CLIENT_IMAGE% は存在しません
)

docker volume inspect %CLIENT_VOLUME% >nul 2>&1
if %errorlevel% EQU 0 (
  docker volume rm %CLIENT_VOLUME%
  echo ボリューム %CLIENT_VOLUME% を削除しました
) else (
  echo ボリューム %CLIENT_VOLUME% は存在しません
)

REM サーバー
echo サーバーイメージ及びボリューム 削除中
docker image inspect %SERVER_IMAGE% >nul 2>&1
if %errorlevel% EQU 0 (
  docker image rm %SERVER_IMAGE%
  echo イメージ %SERVER_IMAGE% を削除しました
) else (
  echo イメージ %SERVER_IMAGE% は存在しません
)

docker volume inspect %SERVER_VOLUME% >nul 2>&1
if %errorlevel% EQU 0 (
  docker volume rm %SERVER_VOLUME%
  echo ボリューム %SERVER_VOLUME% を削除しました
) else (
  echo ボリューム %SERVER_VOLUME% は存在しません
)

REM データベース
echo データベースイメージ及びボリューム 削除中
docker image inspect %DATABASE_IMAGE% >nul 2>&1
if %errorlevel% EQU 0 (
  docker image rm %DATABASE_IMAGE%
  echo イメージ %DATABASE_IMAGE% を削除しました
) else (
  echo イメージ %DATABASE_IMAGE% は存在しません
)

docker volume inspect %DATABASE_VOLUME% >nul 2>&1
if %errorlevel% EQU 0 (
  docker volume rm %DATABASE_VOLUME%
  echo ボリューム %DATABASE_VOLUME% を削除しました
) else (
  echo ボリューム %DATABASE_VOLUME% は存在しません
)

echo ビルド開始
docker-compose build

echo ビルドが完了しました

pause