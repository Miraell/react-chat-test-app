import actions from '../redux/actions';

describe('actions', () => {
    it('should create a message', () => {
        const message = {
            user: 'TestoUser',
            text: 'TestoText',
        }
        const expectedMessage = {
            type: 'MESSAGE_POST',
            message
        }
        expect(actions.sendMessage(message)).toEqual(expectedMessage)
    })
})
