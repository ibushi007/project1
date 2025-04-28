import { connect, Schema, model, Mixed } from 'mongoose';
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

const catSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true, enum: [0,1] },
  bool: { type: Boolean, default: false, alias: 'b' },
  dt: {
    type: Date,
    set: function (newVal) {
      return new Date(newVal);
    },
    get: function(val) {
        return val instanceof Date ? val : new Date(val)
    }
  },
  arry: [ String ],
  anything: Mixed,
});
const Cat = model('Cat', catSchema);

const kitty = new Cat();
kitty.name = 'Zildjian';
kitty.size = 1;
kitty.arry = [0,1];
kitty.dt = "2017/12/21";

kitty.save().then((doc) => console.log(doc.b));
