import { NextApiRequest, NextApiResponse } from 'next';
import TimeUtils from '../../utils/TimeUtils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // console.log(req.method);
  const username = req.query['username'];

  await TimeUtils.sleep(5);
  res.status(200).json({ username });
}
