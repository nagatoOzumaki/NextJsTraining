// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { defaultHead } from 'next/head';

type Data = {
  message: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'here your data ' });
  } else {
    res.status(200).json({ message: 'data was added' });
  }
};
export default handler;
