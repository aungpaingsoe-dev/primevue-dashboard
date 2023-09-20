import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const get = (key) => {
    return cookie.get(key);
};

export const set = (key, value) => {
    cookie.set(key, value);
};

export const remove = (key) => {
    cookie.remove(key);
};
