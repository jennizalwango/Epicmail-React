import React from 'react';
import '../assets/navbar.scss';
const Menubarsection = () => {
    return (
        <aside className="sidebar">
            <ul className="ul">
                <li><a href="compose.html">Compose</a></li>
                <li><a href="users.html">Inbox</a></li>
                <li><a href="sent.html">Sent</a></li>
                <li><a href="sendmessge2group.html">Send message to a group</a></li>
            </ul>
        </aside>
    );
};
export default Menubarsection;
