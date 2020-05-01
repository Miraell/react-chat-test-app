import React, { useState } from 'react';

function MessageInput({ setMessage, isMessageSending }) {

    const [countSymbolsLeft, setCountSymbolsLeft] = useState(250);

    const handleChange = (event) => {
        setMessage(event.target.value);
        setCountSymbolsLeft(250 - event.target.value.length);
    }

    if (isMessageSending === true) {
        return (
            <div>Sending...</div>
        );
    }
    return (
        <div>
        You have { countSymbolsLeft } symbols left.
        <input
            onChange={handleChange}
            type="text"
        />
        </div>
    );
}

export default MessageInput;
