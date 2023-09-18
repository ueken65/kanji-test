export const random = <T>(array: T[], number: number): T[] => {
  const result: T[] = []
  const copy = [...array]
  for (let i = 0; i < number; i++) {
    const index = Math.floor(Math.random() * copy.length)
    result.push(copy[index])
    copy.splice(index, 1)
  }
  return result
}
