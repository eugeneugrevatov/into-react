import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {userDao} from "../../be-mock/daos";
import styles from './UserList.module.css'

function UserList({history}) {

    const [users, setUsers] = useState(userDao.getUsers());

    const details = id => history.push(`/user/${id}/details`);

    const edit = id => history.push(`/user/${id}`);

    const remove = id => {
        userDao.removeUser(id);
        setUsers(userDao.getUsers());
    };

    return (
        <div className={styles.userList}>
            <Link className={styles.btnNew} to="/user/new">New</Link>
            <table>
                <thead>
                <tr>
                    <th/>
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
                            <td className={styles.actionCell}>
                                <button onClick={() => details(user.id)}> &#9776;</button>
                            </td>
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