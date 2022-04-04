import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const avos = await db.getAll()

  res.status(200).json({ length: avos.length, data: avos })
}

export default allAvos
