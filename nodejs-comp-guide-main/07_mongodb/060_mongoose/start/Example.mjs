import mongoose from 'mongoose';
import env from "dotenv";
env.config();
const url = "mongodb+srv://ibukihayashibara:ibukibara007@cluster0.emjhjqs.mongodb.net/bookshelf?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url);
mongoose.set("strictQuery", true);
const catSchema = mongoose.Schema({ 
    name: { type: String, required: true},
    size: { type: Number, required: true},
    bool: Boolean,
    dt: Date
}, {timestamps: true});
mongoose.set('strictQuery', false);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat();
kitty.name = 'Zildjian';
kitty.size = '10';
kitty.save().then(() => console.log('meow'));