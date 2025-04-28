import mongoose, { connect, Schema, model } from 'mongoose';

/* 2023/06/11 ワーニングが出るため以下の一文を追加 */
mongoose.set("strictQuery", true);

import env from 'dotenv';
env.config();

/**
String: 文字列
Number: 数値
Date: 日付
Buffer: バイナリデータ
Boolean: 真偽
Mixed: なんでもOK
ObjectId: Mongo固有のID
Array: 配列
Decimal128: 浮動小数点
Map: マップ
Schema: 他のスキーマ
 */
connect(process.env.MONGO_URI);

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 3,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
}, { timestamps: true });
const Book = model('Book', bookSchema);

const book = new Book({
  title: 'テストブック',
  description: 'これは説明欄です',
  comment: '素晴らしい',
  rating: 4,
});

// book.save().then((book) => {
//   console.log(book._id)
//   mongoose.connection.close();
// });

init();
async function init() {
  const registerdBook = await book.save();
  console.log(registerdBook._id);
  mongoose.connection.close();
}

