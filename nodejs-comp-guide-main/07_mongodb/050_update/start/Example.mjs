import env from 'dotenv';
env.config();

import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function getCollection() {
  try {
    await client.connect();
    const db = client.db('bookshelf');
    return db.collection('books');
  } catch {
    await client.close();
  }
}

updateBook();
async function updateBook() {
  const col = await getCollection();

  await client.close();
}
