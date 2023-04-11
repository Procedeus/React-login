import axios from 'axios';

export default class UserServices{
    constructor () {
        this.axios = axios.create({
            baseURL: 'http://localhost:3333/'
        })
    }

    async Signin(data){
        const response = await this.axios.post('/signin', data);
        const user = response.data;
        if(user.length){
            localStorage.setItem('username', data.username);
            localStorage.setItem('token', data._id);
            return true;
        }
        return false;
    }
    async Signup(data){
        const response = await this.axios.post('/signup', data);
        const user = response.data;
        if(user.username){
            localStorage.setItem('username', data.username);
            localStorage.setItem('token', data._id);
            return true;
        }
        return false;
    }
    userAuth () {
        return localStorage.getItem("token") != undefined ? true : false;
    }
};