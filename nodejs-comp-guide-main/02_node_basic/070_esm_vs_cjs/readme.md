# ESM と CJS の違い
- No require, exports, or module.exports
- No __filename or __dirname
- require で JSON が読み込めない

```js:hello.cjs
console.log('hello');
```

```js:Node.js CJSの実行時
(function (exports, require, module, __filename, __dirname) {
  // 即時関数でモジュールはラップされる
  console.log('hello');
});
```

## __dirname, __filename のESMでの代替手段
```js
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// or

const __dirname2 = fileURLToPath(new URL('.', import.meta.url));

console.log(__filename);
console.log(__dirname);
console.log(__dirname2);
```

# ESM で JSON を読み込む方法
```js
// 1 createRequire の使用
import { createRequire } from 'module';
const require = createRequire(import.meta.url)
const jsonObj = require('path/to/filename.json');

// 2 (Node 19 Experimental)
import jsonObj from 'path/to/filename.json' assert { type: 'json' };
```