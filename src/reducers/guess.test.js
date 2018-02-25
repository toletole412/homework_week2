import guess from './guess'

describe('guess reducer', () => {
  const reducer = 'e'
  const initialState = []

  it('returns an word for the initial state', () => {
    expect(reducer()).toEqual(['e'])
  })
})
