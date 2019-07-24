import React from 'react';
import styles from './Header.module.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <h1>My simple app</h1>
            <nav>
                <Link to="/users">Users</Link>
            </nav>
        </header>
    );
}

export default Header;