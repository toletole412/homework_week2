import word from './word'

describe('word reducer', () => {
  const reducer = word
  const initialState = "hello"

  it('returns an word for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
