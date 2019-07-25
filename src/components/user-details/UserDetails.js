import React from 'react';
import {getUser} from '../../dao'
import styles from './UserDetails.module.css'

function UserDetails({history, match: {params: {id}}}) {

    const {firstName, lastName, email} = getUser(id);

    return (
        <div className={styles.userDetails}>
            <table>
                <tbody>
                <tr>
                    <td><span>First Name</span></td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td><span>Last Name</span></td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td><span>Email</span></td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td colSpan={'2'} className={styles.submitRow}>
                        <button onClick={() => history.push('/users')}>Back to list</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );

}

export default UserDetails;