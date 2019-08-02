import {users} from './data/users'

export const userDao = {

    nextId: Math.max(...users.keys()) + 1,

    getUsers: () => [...users.values()],

    getUser: id => users.get(+id),

    saveUser: function (user) {
        let id = 'id' in user ? +user.id : this.nextId++;
        users.set(id, {...user, id});
    },

    removeUser: id => users.delete(+id),

    findByCredentials: function (login, password) {
        return this.getUsers().find(user => user.login === login && user.password === password)
    }
};
