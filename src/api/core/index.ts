import axios, { AxiosInstance } from 'axios';

const controller = new AbortController();

const authRequest: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    validateStatus: (status) => status < 500,
    signal: controller.signal,
});

// 요청 타임아웃 설정
authRequest.defaults.timeout = 5000;

export { authRequest };
