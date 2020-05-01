import React from 'react';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';
import SubmitButton from './SubmitButton';
import { connect } from 'react-redux';
import actions from '../redux/actions';

const DEFAULT_USER_NAME = 'Dmitry';

export class Chat extends React.Component {

    setMessage(inputMessage) {
        console.log('test');
        this.setState({ inputMessage });
    }

    clickButton() {
        this.props.sendMessage({
            user: DEFAULT_USER_NAME,
            text: this.state.inputMessage,
        });
    }

    render() {
        return (
            <div>
                <MessagesList messages={this.props.messages} /><br />
                <form>
                    <MessageInput
                        setMessage={this.setMessage.bind(this)}
                        isMessageSending={this.props.isMessageSending}
                    />
                    <SubmitButton
                        onClick={this.clickButton.bind(this)}
                        isMessageSending={this.props.isMessageSending}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages,
    isMessageSending: state.isMessageSending,
});

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(actions.sendMessage(message));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
