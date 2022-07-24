import YuRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';

export const getHome = new YuRequest({
  baseURL: 'http://123.207.32.32:8000',
  timeout: TIME_OUT
});
getHome.request({
  url: '/home/multidata',
  method: 'GET'
});
