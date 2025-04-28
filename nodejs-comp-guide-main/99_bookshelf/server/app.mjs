import path from "path";
import express from "express";
import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";

const app = express();
const port = process.env.PORT || 8080;

// corsエラーの設定 ここから↓
import cors from "cors";

// app.use(cors({
//   // どこからのアクセスを許可するか。オリジン(スキーマ、ドメイン、ポート)を記す。
//   origin: "http://localhost:3000",
//   // どのメソッドを許可するかは配列で記述。書かない場合は全て通す。
//   // methods: ["GET", "POST", "PUT", "DELETE"],
//   // クッキーを残すかどうか
//   // credentials: true,
// }));
// corsエラーの設定 ここまで

app.use(express.static('build'));

app.use(express.json());

app.use("/api", apiRoutes);

app.get('*', (req, res) => {
  const pathIndex = path.resolve('build', 'index.html');
  res.sendFile(pathIndex);
});

app.use(function (req, res) {
  res.status(404).send("Page Not Found");
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({ msg: "予期せぬエラーが発生しました。" });
});

app.listen(port, () => {
  console.log(`Server start: http://localhost:${port}`);
});
