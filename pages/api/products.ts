// pages/api/products.ts

import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../utils/db'
import Product, { IProduct } from '@/models/Product';
import { MongoClient, MongoClientOptions } from 'mongodb';

const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri, options);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  const db = client.db("Product");
  const collection = db.collection("Product");

  if (req.method === 'GET') {
    try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, description, price } = req.body;

      const product: IProduct = new Product({
        name,
        description,
        price
      });

      await product.save();

      res.status(201).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};

export default handler;
