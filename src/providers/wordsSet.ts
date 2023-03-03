export const generateWordSet = async () => {
  let wordSet
  await fetch("/allWordsAccent.txt")
  .then((response) => response.text())
  .then((result) => {
    const arr = result.split("\n")
    wordSet = new Set(arr)
  })

  return { wordSet }
}