import React from 'react';

const MessageComponent = ({ messages }) => {
    return (
        <div id="inbox_message">
            <table>
                <caption>Inbox Messages</caption>
                <thead>
                    <tr>
                        <th>Sender</th><th>Subject</th><th>Message</th><th>Date</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.length === 0 ? <tr><td colSpan="5">No receieved messages found</td></tr> :
                        messages.map((message, index) => {
                            return (
                                <tr>
                                    <td>{message.sender_mail}</td>
                                    <td>{message.subject}</td>
                                    <td>{message.message}</td>
                                    <td>{message.createdOn}</td>
                                    <td>
                                        <button>Read</button>
                                        <button >Delete</button>
                                    </td>
                                </tr>);
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

MessageComponent.defaultProps = {
    messages: []
};

export default MessageComponent;
