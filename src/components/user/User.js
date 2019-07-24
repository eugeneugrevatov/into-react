import React, {useState} from 'react';
import {getUser, saveUser} from '../../dao'
import styles from './User.module.css'

function User({history, match: {params}}) {

    const currentUser = params.id ? getUser(params.id) : {firstName: '', lastName: '', email: ''};

    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [email, setEmail] = useState(currentUser.email);

    const onSubmit = e => {
        e.preventDefault();
        saveUser({...currentUser, firstName, lastName, email});
        setFirstName('');
        setLastName('');
        setEmail('');
        history.push('/users');
    };

    return (
        <form onSubmit={onSubmit} className={styles.userForm}>
            <table>
                <tbody>
                <tr>
                    <td><span>First Name</span></td>
                    <td><input value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td><span>Last Name</span></td>
                    <td><input value={lastName} onChange={e => setLastName(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><span>Email</span></td>
                    <td><input value={email} onChange={e => setEmail(e.target.value)}/></td>
                </tr>
                <tr>
                    <td colSpan={'2'} className={styles.submitRow}>
                        <button type="submit">Submit</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );

}

export default User;