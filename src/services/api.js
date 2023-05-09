import axios from 'axios';

export default class UserServices{
    constructor () {
        this.axios = axios.create({
            baseURL: 'http://localhost:3333/'
        })
    }

    async Login(data){
        const response = await this.axios.post('/login', data);
        const user = response.data;
        if(user.token){
            localStorage.setItem('token', user.token);
            return true;
        }
        return false;
    }
    async Signup(data){
        const response = await this.axios.post('/signup', data);
        const user = response.data;
        if(user.token){
            localStorage.setItem('token', user.token);
            return true;
        }
        return false;
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