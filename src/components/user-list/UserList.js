import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {getUsers, removeUser} from "../../dao";
import styles from './UserList.module.css'

function UserList({history}) {

    const [users, setUsers] = useState(getUsers());

    const edit = id => history.push(`/user/${id}`);

    const remove = id => {
        removeUser(id);
        setUsers(getUsers());
    };

    return (
        <div className={styles.userList}>
            <Link className={styles.btnNew} to="/user/new">New</Link>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th/>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td className={styles.actionCell}>
                                <button onClick={() => edit(user.id)}> &#9998;</button>
                            </td>
                            <td className={styles.actionCell}>
                                <button onClick={() => remove(user.id)}>&#10005;</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;