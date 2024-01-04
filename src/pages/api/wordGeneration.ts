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
    "amigo",
    "dardo",
    "nobre",
    "amigo",
    "furia",
    "casal",
    "armas",
    "moeda",
    "servo",
    "porta",
    "casco",
    "livro",
    "vigor",
    "poder",
    "tempo",
    "comum",
    "ordem",
    "heroi",
    "burro",
    "morte",
    "calma",
    "fardo"
  ]

  function shuffleArray(array: string[]) {
    for (let i = 10 - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  let wordsToGuest = shuffleArray(allWords).slice(0, 10)

  // let wordsToGuest = allWords.slice(0, 10)

  res.status(200).json({ words: wordsToGuest })
}
