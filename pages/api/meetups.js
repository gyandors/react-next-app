import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(
      'mongodb+srv://sachin:CuzXJBNBtHkXntmt@cluster0.nilbj3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );

    const db = client.db('meetups');
    const collection = db.collection('meetups');
    const result = await collection.find().toArray();

    await client.close();

    res.status(200).json(result);
  }
}
