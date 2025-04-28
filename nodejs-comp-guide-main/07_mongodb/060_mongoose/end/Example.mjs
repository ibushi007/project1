import mongoose from "mongoose";

/* 2023/06/11 ワーニングが出るため以下の一文を追加 */
mongoose.set("strictQuery", true);

import env from "dotenv";
env.config();

mongoose.connect(process.env.MONGO_URI);

const Cat = mongoose.model('Book', { name: String });

const kitty = new Cat();
kitty.name = 'Zildjian';
kitty.save().then(() => console.log('meow'));