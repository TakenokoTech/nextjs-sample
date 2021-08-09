import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method);
  await sleep(3);
  res.status(200).json({ text: 'Hello' });
}

function sleep(sec: number) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}
