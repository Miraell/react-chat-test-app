const sendMessage = ({ user, text }) => {
    return {
        type: 'MESSAGE_POST',
        message: {
            user,
            text,
        }
    }
}

export default { sendMessage }
