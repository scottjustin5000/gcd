const gcd = require('../')
describe('test GCD functionality', () => {
  it('should throw argument error', () => {
    expect(() => {
      gcd(55, 15)
    }).toThrow()
  })

  it('should throw argument error', () => {
    expect(() => {
      gcd([55, 'foo', 100])
    }).toThrow()
  })

  it('should return with empty array', () => {
    expect(gcd([])).toBe(undefined)
  })

  it('should return with single result', () => {
    expect(gcd([7])).toBe(7)
  })

  it('should return gcd 2', () => {
    expect(gcd([4, 6, 8, 16])).toBe(2)
  })

  it('should return gcd 7', () => {
    expect(gcd([14, 21, 35, 42])).toBe(7)
  })

  it('should return gcd 1', () => {
    expect(gcd([7, 13, 19, 37])).toBe(1)
  })
})
