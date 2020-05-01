import React from 'react';

function messagesList(props) {
    const messages = props.messages ? props.messages.map((message, index) =>
        <li key={index}>
            <b>{message.user}</b> says: <span className="bubble">{message.text}</span>
        </li>
    ) : 'No messages';
    return (
        <div className="messages-wrapper">
            {messages}
        </div>
    );
}

export default messagesList;
