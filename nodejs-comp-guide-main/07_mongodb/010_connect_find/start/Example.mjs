import env from "dotenv";
env.config();

import { MongoClient, ServerApiVersion } from "mongodb"; // こちらのimport文を残します
// const { MongoClient, ServerApiVersion } = require('mongodb'); // こちらの行を削除またはコメントアウトします

const uri = process.env.MONGODB_URI || "mongodb+srv://ibukihayashibara:ibukibara007@cluster0.emjhjqs.mongodb.net/bookshelf?retryWrites=true&w=majority&appName=Cluster0"; // 環境変数からURIを取得するか、直接記述

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connectio
    const db = client.db("bookshelf");
    return db.collection("books");
  } catch (err) { // エラーオブジェクトを受け取るように変更
    console.error("データベース接続またはコレクション取得中にエラー:", err); // エラー内容をログに出力
    // Ensures that the client will close when you finish/error
    await client.close();
    throw err; // エラーを再スローするか、適切なエラー処理を行う
  }
}

async function getAllBooks() {
  try { // run()がエラーをスローする可能性があるのでtry-catchで囲む
    const col = await run();
    if (col) { // colがundefinedでないことを確認
        const cursor = col.find();
        const result = await cursor.toArray();
        console.log(result);
    }
  } catch (err) {
    console.error("getAllBooksの実行中にエラー:", err);
  } finally { // 成功しても失敗しても最後にクライアントを閉じる
    // run()内のcatchで既に閉じている場合は不要かもしれないが、
    // run()がコレクションを返した場合の閉じ忘れを防ぐためにここにも記述
    // ただし、clientが複数回closeされるとエラーになる可能性があるので注意が必要
    // より堅牢な管理としては、接続と切断を一箇所で管理する方が良い
    if (client && client.topology && client.topology.isConnected()) { // 接続状態を確認
        await client.close();
        console.log("MongoDB client closed.");
    }
  }
}

getAllBooks(); // 関数を実行