import React from 'react';
import '../assets/navbar.scss';

const logout = (props) => {
    localStorage.setItem('auth-token', '');
    localStorage.setItem('fistname', '');
    localStorage.setItem('email', '');
    props.history.push('/login');
};

const Navbarsection = ({ props }) => {
    const user = localStorage.getItem('fistname');
    return (
        <nav>
            <ul>
                <li><a href="#" className="right"><span onClick={() => logout(props)} style={{ color: 'lightblue' }}>Logged User: {user}</span></a></li>
                <li><a href="#" className="left">EPIC MAIL</a></li>
                <li><a href="#" className="right">Admin</a></li>
                <li><a href="#" className="right">Users</a></li>
            </ul>
        </nav>

    );
};

export default Navbarsection;
