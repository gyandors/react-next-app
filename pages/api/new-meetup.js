// /api/new-meetup
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://sachin:CuzXJBNBtHkXntmt@cluster0.nilbj3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );

    const db = client.db('meetups');
    const collections = db.collection('meetups');
    const result = await collections.insertOne(data);

    await client.close();

    res.status(201).json({ id: result.insertedId });
  }
}
