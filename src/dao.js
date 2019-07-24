export const getUsers = () => [...users.values()];

export const getUser = id => users.get(+id);

export const saveUser = user => {
    let id = 'id' in user ? +user.id : nextId++;
    users.set(id, {...user, id});
};

export const removeUser = id => users.delete(+id);

let nextId = 5;

let users = new Map([
    [
        1,
        {
            id: 1,
            firstName: 'John',
            lastName: 'Loomer',
            email: 'lommer@mob.com'
        }
    ],
    [
        2,
        {
            id: 2,
            firstName: 'Penelope',
            lastName: 'Lang',
            email: 'peplang52@yahoo.com'
        }
    ],
    [
        3,
        {
            id: 3,
            firstName: 'Lily',
            lastName: 'Prohaska',
            email: 'lil60@gmail.com'
        }
    ],
    [
        4,
        {
            id: 4,
            firstName: 'Lonny',
            lastName: 'Koelpin',
            email: 'koelon46@yahoo.com'
        }
    ],
]);