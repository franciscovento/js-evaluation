const {sum} = require('./checkpoint')

describe('testing', () => {
  test('should render correct', ( )  => {
    expect(sum(1,3)).toBe(4)
  })
})

