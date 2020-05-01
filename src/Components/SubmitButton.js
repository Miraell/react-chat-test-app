import React from 'react';

export default function SubmitButton({isMessageSending, onClick}) {

    if (isMessageSending === true) {
        return null;
    }
    return <button onClick={onClick}>Send</button>
}
