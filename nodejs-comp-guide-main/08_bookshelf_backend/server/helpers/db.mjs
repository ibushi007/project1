import mongoose from 'mongoose';

/* 2023/06/11 ワーニングが出るため以下の一文を追加 */
mongoose.set("strictQuery", true);

import env from "dotenv";
env.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
