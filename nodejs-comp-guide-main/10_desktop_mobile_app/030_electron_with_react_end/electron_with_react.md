# React のデスクトップアプリ化手順

## React プロジェクトの作成

- 計算機(サンプルアプリ)の install

```
git clone https://github.com/codemafia0000/calculator.git
```

```
npm install
npm start
```

## React プロジェクトで Electron を使えるようにする

- electron をインストール

```
npm i -D electron
```

- Electron ディレクトリを作成、

  - Electron を動かすために必要な electron.js を public ディレクトリに作成
  - main.js の`mainWindow.loadFile`に Electron を実行するディレクトリからビルド後の html へのパスを記述

  ```
  mainWindow.loadFile("./build/index.html");
  ```

- package.json を編集する

  - Electron に必要な main と React に必要な homepage を記述。main には先程追加した electron.js のパスを指定。

  ```
  "main": "build/electron.js",
  "homepage": "./",
  ```

  - scripts に electron を起動するスクリプトを追加

  ```
  "electron": "electron .",
  ```

- React のサンプルアプリをビルドする

```
npm run build
```

- Electron を起動。(電卓アプリがアプリウインドウで表示されることを確認)

```
npm run electron
```

