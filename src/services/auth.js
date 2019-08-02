import {toObj, toStr} from "../utils";

const currentUser = 'current-user';

class AuthService {

    login = (login, password) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: toStr({login, password})
        };

        return fetch('/login', requestOptions)
            .then(res => res.text())
            .then(text => toObj(text))
            .then(user => localStorage.setItem(currentUser, toStr(user)))
    };

    logout = () => localStorage.removeItem(currentUser);

    getCurrentUser = () => toObj(localStorage.getItem(currentUser));

}

export default new AuthService()