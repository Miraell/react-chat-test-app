const initialState = {
    messages: [
        {text: 'Hello world!', user: 'Dmitry'},
        {text: 'Hello Dmitry!', user: 'Alex'},
    ]
}

function messageReducer(state = initialState, action) {
    switch (action.type) {
        case 'MESSAGE_POST':
            return {
                ...state,
                isMessageSending: true,
            }
        case 'MESSAGE_SUCCESS':
            const newMessage = {
                user: action.message.user,
                text: action.message.text
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                isMessageSending: false,
            }
        default:
            return state;
    }
}

export default { messageReducer }
