import env from 'dotenv';
env.config();

import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || "mongodb+srv://ibukihayashibara:ibukibara007@cluster0.emjhjqs.mongodb.net/bookshelf?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function getCollection() {
    await client.connect();
    const db = client.db('bookshelf');
    return db.collection('books');
}

async function insertBook() {
  const col = await getCollection();
  const result = await col.insertMany([
    {
     title: 'こんにちは',
     int: 10,
     bool: true,
     dt: new Date(),
     arry: [0, 1, 2],
     obj: {
      bye: 'さようなら'    
    }
    }]);
  console.log(result);
  await client.close();
}

insertBook();