@echo 
chcp 65001 > nul
echo IH42 輸送コンテナ管理システム 終了中

cd /d %~dp0 REM バッチファイル移動

docker-compose down

echo 適切に終了しました
pause