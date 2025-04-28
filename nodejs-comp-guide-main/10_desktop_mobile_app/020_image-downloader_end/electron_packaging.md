# アプリをパッケージ化してみよう

## アプリ化に必要なパッケージのインストール
`electron-builder`を使用

```
npm install -D electron-builder
```

## electron-builder を使ってパッケージ作成

### package.json に設定を記述
#### description、author を任意の文字で記述

  ```
  "description": "画像ダウンロードアプリ",
  "author": "codemafia",
  ```

#### build 用の JSON を記述

  ```
  "build": {
    "productName": "Image Downloader",
    "appId": "com.codemafia.image-downloader",
    "mac": {
      "target": [
        "dmg"
      ],
      "icon": "icon.png"
    },
    "win": {
      "target": "nsis",
      "icon": "icon.png"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true
    }
  },
  ```

### パッケージ化のコマンド  
- Mac

  ```sh
  electron-builder --mac --x64 # Intel用
  electron-builder --mac --arm64 # M1用
  electron-builder --mac --universal # Intel & M1用
  ```

- Windows

  ```sh
  electron-builder --win --x64 # Intel用
  ```

* コマンドが長いので packge.json の scripts を作成しておく

  ```
  "scripts": {
    ...

    "build": "run-s build:*",
    "build:mac64": "electron-builder --mac --x64",
    "build:mac-arm": "electron-builder --mac --arm64",
    "build:mac-univ": "electron-builder --mac --universal",
    "build:win64": "electron-builder --win --x64"

  }
  ```

## 注意
Mac 用のビルドには python2 または python3 が必要。上手くビルドできない場合は python3 をインストールしてみると解消するかもしれません。