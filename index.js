const gcd = (a, b) => {
  if (a === 0) return b
  return gcd(b % a, a)
}

module.exports = (arr) => {
  if (!Array.isArray(arr)) throw Error('gcd requires an array')
  let n = arr.length

  let result = arr[0]
  for (let i = 1; i < n; i++) { result = gcd(arr[i], result) }
  return result
}
