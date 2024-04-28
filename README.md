# 概要

IH42のケーススタディ用のリポジトリになります。

制作するシステムは輸送コンテナ管理システムになります。

## 輸送コンテナ管理システム


# 使用言語・フレームワーク・ツール等

## 言語

- `JavaScript`:基本的にフロントエンドとバックエンドの両方で使用します。TypeScriptでも良かったのですが...。
- `CSS`:Sassをインストールしての開発も検討しています。

## フレームワーク

- `Node.js`:今回はNode.jsでWebサーバーとAPIサーバーを制作します。
- `Express`:REST APIサーバーやWebsocketサーバーを作るのに使用します。
- `React.js`:フロントエンド側で使用します。
- `CSSフレームワーク`(Material UI,Bootstrap,Tailwind CSS):状況に合わせてCSSフレームワークを使用します。

## ツール

- `Docker`:コンテナツールです。
- `Postman`:レスポンス検証用ツールです。
- `Git`
- `Github`

# 技術概要

未定

# セットアップ手順

基本的に以下の要領で行おうと思いますがWin版のみですので、Macユーザの方以外は以下を参考に各自行ってください。Macユーザの方は個別に言います。(出来るならやってほしい)

## Node.js

まずはどちらもNode.jsのインストールが必要になりますのでNode.jsをローカル上にインストールします。その際に必要なNVMというバージョン管理ツールを使用します。

### NVM(Node Version Manager)

Node.jsの開発環境を構築するにあたって、どうしても複数のバージョンがあると非常に面倒になると考えています。NVMはそのようなNode.jsのバージョンを管理することが出来ます。
今回はversion 20.12.2(LTS)での実行を想定しています。

#### 1. NVMをインストール

[NVMインストールリンク](https://github.com/coreybutler/nvm-windows/releases)をクリックして、`nvm-setup.exe`をインストールします。

#### 2. NVMをセットアップ

1. `nvm-setup.exe`を実行すると下のような画面が表示されますのでacceptを選択してnextに移動します。
   ![NVMセットアップ画面](https://github.com/HasegawaTomohiko/IH42CaseStudy/assets/85047415/f36c28e1-7271-4dbf-bb87-58cf1ab09e74)
2. nextに移動すると下のような画面が表示されます。インストールするパスを設定してnextに移動します。あとは基本nextで問題ありません。![NVMインストール場所選択画面](https://github.com/HasegawaTomohiko/IH42CaseStudy/assets/85047415/5b406802-b027-417f-a962-86b67b44d4d4)
3. 最終的にインストールします。インストールが完了したらコマンドプロンプトに移動して以下を実行します。

```cmd
nvm -v
```

![NVMバージョン確認](https://github.com/HasegawaTomohiko/IH42CaseStudy/assets/85047415/1b77a94e-358e-457a-9bc2-fec1ad3bc73c)

#### 3. NVMにNode.jsをインストール

基本的にコマンドプロンプト上で操作を行います。

1. nvmでインストール可能なNode.jsのバージョンを確認します。
   以下のコマンドを実行します。

```cmd
nvm list available
```

このコマンドを実行することにより、下のようなリストが表示されます。今回はversion 20.12.2(LTS)を使用します。
![nvmインストール可能リスト](https://github.com/HasegawaTomohiko/IH42CaseStudy/assets/85047415/5bfe9df3-2524-4d81-ac95-a3b9db7cc65e)
2. nvmでインストールするNode.jsのバージョンを指定します。
今回はversion 20.12.2なので以下のようなコマンドを実行します。

```cmd
nvm install 20.12.2
```

下のようになりましたらインストール完了になります。
![Node.jsインストール](https://github.com/HasegawaTomohiko/IH42CaseStudy/assets/85047415/0918160e-f1c1-4f2b-9549-f589bc2a1e1f)
念のためにこのコマンドを実行して、nvmで使用するバージョンを設定します。

```cmd
nvm use 20.12.2
```

3. Node.jsのバージョンを確認します。
   以下のコマンドを実行します。

```cmd
node -v
```

下のようになりましたらNode.jsのセットアップの完了です！！！
![Node.jsバージョン確認](https://github.com/HasegawaTomohiko/IH42CaseStudy/assets/85047415/ef08b048-8b6a-4e91-a134-aff70d7e5f48)

## Docker

今回はDockerを使用します。実はこれするとさっきインストールしたNVMが意味を成さないのですが、ローカル上での実行でも行えるようにインストールしました。
試しにNode.jsをインストールしたコンテナをサクっと作って実際の動作を確認しようと思います。
基本的にこちらの[Docker公式インストール手順](https://docs.docker.jp/docker-for-windows/wsl.html)を参考にしています。

#### 1. WSLを有効化させる

WSLはWindows上でLinuxディストリビューションを実行する機能です。これを利用することによりDocker Desktopを使用することが出来ます。

```cmd
wsl --install
```

このコマンドを実行することにより、デフォルトディストリビューションのUbuntuが起動します。
起動しないこともあるらしいが、それは調べてほしい。
もし実行したら一度再起動して

```cmd
wsl --list -v
```

を起動してデフォルトのディストリビューションを確認します。`*`が付いているやつがそれです。
もしUbuntuではない場合は

```cmd
wsl --set-default Ubuntu
```

を実行します。
そして、v2をデフォルトのバージョンにセットします。

```cmd
wsl --set-default-version 2
```

最後にアップデートを行います。

```cmd
wsl --update
```

#### 2. Docker Desktopのインストール

[Dockerインストールリンク](https://docs.docker.jp/docker-for-windows/wsl.html)をクリックして、Dockerのインストールを行います。(Mac版は少々異なります)
インストールしたものを実行すると自動でインストールが走ると思います。

Docker Desktopを起動したら以下のような画面が出ると思います。

![Docker Desktop画面](https://github.com/HasegawaTomohiko/IH42CaseStudy/assets/85047415/a5c957b6-b583-4c59-8067-2cdaa076b4f6)
そしたらこの `What is a container?`や `How do I run a container`をクリックして、簡単なサンプルが実行できますが...。
めっちゃ簡単にコマンドで簡単な実行確認をすることが出来ます。まずは以下のコマンドをDocker Desktopを起動した状態でコマンドプロンプト上で実行してください。

```cmd
docker run -d -p 80:80 docker/getting-started
```

これを実行して `http://localhost`にアクセスするとWebページにアクセスすることが出来ます。
また、今後 `docker-compose.yml`というファイルを使用して、みんなで環境を合わせての開発を行います。これが出来るようになると本当に便利です。死ぬほど。

## Postman

PostmanはAPIサーバを構築したことがある人ならわかりますが、リソースに対して適切なレスポンスが正しいかどうかを確認することが出来るツールです。
  
Postmanに関しては[Postman リンク](https://www.postman.com/)を参考にしてください。