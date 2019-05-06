import { fetch } from "./fetch";

const login = (data) => {
    return fetch({
        url: '/login',
        method: 'post',
        data: data
    })
};

const register = (data) => {
    return fetch({
        url: '/user/register',
        method: 'post',
        data: data
    })
};

export { login, register }
