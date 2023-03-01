// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  word: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const words = [
    "moeda",
    "servo",
    "porta",
    "casco",
    "livro",
    "abrir"
  ]
  let randomWord = words[Math.floor(Math.random() * words.length)]
  res.status(200).json({ word: randomWord })
}
