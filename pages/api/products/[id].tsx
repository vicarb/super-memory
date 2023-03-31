// pages/api/products/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../utils/db';
import Product from '@/models/Product';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const product = await Product.findById(req.query.id);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};

export default handler;
