import mongoose from 'mongoose';

/* 2023/06/11 ワーニングが出るため以下の一文を追加 */
mongoose.set("strictQuery", true);

import env from 'dotenv';
env.config();

/**
 * mongooseの設定
 */
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('error', function (err) {
  console.error('connection error: ', err);
});

db.once('open', function () {
  console.log('Connected successfully');
});

/**
 * MongoDBでの設定
 */
// import { MongoClient, ServerApiVersion } from 'mongodb';
// export const dbName = 'bookshelf';
// export const client = new MongoClient(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// export const getCollection = async function (colName) {
//   await client.connect();
//   const db = client.db(dbName);
//   return db.collection(colName);
// };
