import axios from 'axios';

const request = axios.create({
  baseURL: 'https://4jehkg0izj.execute-api.us-east-1.amazonaws.com'
});

export default request;