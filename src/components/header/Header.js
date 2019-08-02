import React from 'react';
import styles from './Header.module.css'
import AuthService from '../../services/auth'
import {Link} from "react-router-dom";

function Header({user, setUser}) {

    const logout = () => {
        AuthService.logout();
        setUser(null);
    };

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <span>My simple app</span>
            </div>
            {user &&
            <div className={styles.right}>
                <span>{`${user.firstName} ${user.lastName}`}</span>
                <button onClick={logout}>
                    <Link to={'/login'} on>Log out</Link>
                </button>
            </div>
            }
        </header>
    );
}

export default Header;