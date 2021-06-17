import type { NextApiRequest, NextApiResponse } from 'next';
import func from '../../components/func';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json(func);
}
