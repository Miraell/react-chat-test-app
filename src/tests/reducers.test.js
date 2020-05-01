import reducers from '../redux/reducers'

describe('reducers', () => {
    it('should return the initial state', () => {
        expect(reducers.messageReducer([{'test': 'Hello World'}], {})).toEqual([
            {
                'test': 'Hello World'
            }
        ])
    })
})
