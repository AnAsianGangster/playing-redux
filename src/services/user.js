import axios from 'axios';
import authHeader from './auth-header';
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env);

const API_URL = process.env.REACT_APP_API_URL + '/test';

const getPublicContent = () => {
    return axios.get(API_URL + '/all');
};

const getUserBoard = () => {
    return axios.get(API_URL + '/user', { headers: authHeader() });
};

const getModeratorBoard = () => {
    return axios.get(API_URL + '/mod', { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + '/admin', { headers: authHeader() });
};

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};
