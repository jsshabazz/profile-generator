const cloneArray = require ('./cloneArray')

test('properly clones array', () => {
    const array =[]
    expect(cloneArray(array)).toBe(array)
})