// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  words: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const allWords = [
    "moeda",
    "servo",
    "porta",
    "casco",
    "livro",
    "nobre",
    "vigor",
    "poder",
    "casal",
    "amigo",
    "tempo",
    "comum",
    "furia",
    "ordem",
    "heroi",
    "burro",
    "morte",
    "calma",
    "fardo"
  ]

  let wordsToGuest = []

  for (let index = 0; index < 10; index++) {
    let randomWord = allWords[Math.floor(Math.random() * allWords.length)]
    wordsToGuest.push(randomWord)
  }
  res.status(200).json({ words: wordsToGuest })
}
