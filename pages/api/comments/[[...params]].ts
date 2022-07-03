import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const params = req.query.params;
  res.status(200).json({ message: 'hello', params: params });
};

export default handler;
