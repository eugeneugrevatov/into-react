import React, {useEffect, useState} from 'react';
import styles from './Login.module.css'
import AuthService from "../../services/auth";

function Login({history, user, setUser}) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) history.push('/')
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        AuthService.login(login, password)
            .then(() => {
                history.push('/');
                setUser(AuthService.getCurrentUser());
            })
            .catch(() => {
                setError('Login or password is incorrect. Please try again.')
            })
    };

    return (
        <div className={styles.login}>
            <form onSubmit={handleSubmit}>
                <h3>LOGIN</h3>
                <input
                    type={'text'}
                    placeholder={'Login'}
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <input
                    type={'password'}
                    placeholder={'Password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <h6 className={styles.error}>{error}</h6>
                <button>Log in</button>
            </form>
        </div>
    );
}

export default Login;