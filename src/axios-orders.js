import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-b04af.firebaseio.com/'
});

export default instance;