import axios from 'axios';

export const requestResponse = axios.create({
  baseURL: 'https://reqres.in/api',
});
