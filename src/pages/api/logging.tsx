import { NextApiRequest, NextApiResponse } from 'next';
import TimeUtils from '../../utils/TimeUtils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // console.log(req.method);

  await TimeUtils.sleep(1);
  res.status(200).json({ text: 'Hello' });
}
