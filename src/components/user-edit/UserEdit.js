import React, {useState} from 'react';
import {userDao} from '../../be-mock/daos'
import styles from './UserEdit.module.css'

function UserEdit({history, match: {params}}) {

    const currentUser = params.id ? userDao.getUser(params.id) : {firstName: '', lastName: '', email: ''};

    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [email, setEmail] = useState(currentUser.email);

    const onSubmit = e => {
        e.preventDefault();
        userDao.saveUser({...currentUser, firstName, lastName, email});
        setFirstName('');
        setLastName('');
        setEmail('');
        history.push('/users');
    };

    return (
        <form onSubmit={onSubmit} className={styles.editForm}>
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

export default UserEdit;