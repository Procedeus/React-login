import axios from 'axios';

function setToken(token){
    const setToken = token;
    localStorage.setItem('token', setToken);
}

export default class UserServices{
    constructor () {
        this.axios = axios.create({
            baseURL: 'http://localhost:3333/'
        })
    }
    async Login(data){
        const response = await this.axios.post('/login', data);
        setToken(response.data);
    }
    async Signup(data){
        const response = await this.axios.post('/signup', data);
        setToken(response.data);
    }
    async UserAuth() {
        const token = localStorage.getItem('token');
        const response = await this.axios.get('/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        return response.data;
    }
};