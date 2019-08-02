import {userDao} from "./daos";
import {sha256} from "js-sha256";

export function configureFakeFetch() {

    window.fetch = function (url, opts) {
        const isLoggedIn = opts.headers['Authorization'] === 'Bearer fake-jwt-token';

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate - public
                if (url.endsWith('/login') && opts.method === 'POST') {
                    const {login, password} = JSON.parse(opts.body) || {};
                    const user = userDao.findByCredentials(login, sha256(password));
                    if (!user) return error('Username or password is incorrect');
                    return ok({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    });
                }

                // get users - secure
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (!isLoggedIn) return unauthorised();
                    return ok(userDao.getUsers());
                }

                return notFound('No such path in our fake fetch');

                // private helper functions
                function ok(body) {
                    resolve({ok: true, text: () => Promise.resolve(JSON.stringify(body))})
                }

                function unauthorised() {
                    resolve({status: 401, text: () => Promise.resolve(JSON.stringify({message: 'Unauthorised'}))})
                }

                function error(message) {
                    resolve({status: 400, text: () => Promise.resolve(JSON.stringify({message}))})
                }

                function notFound(message) {
                    resolve({status: 404, text: () => Promise.resolve(JSON.stringify({message}))})
                }
            }, 500);
        });
    }
}
