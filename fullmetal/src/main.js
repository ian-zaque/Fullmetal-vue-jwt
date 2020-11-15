import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AuthService from './services/auth.service';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    async config => {
      const value = await localStorage.getItem('user');
      const keys = JSON.parse(value)
      config.headers = { 
        'Authorization': `Bearer ${keys.access_token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      return config;
    },
    error => { Promise.reject(error) });
  
  // Response interceptor for API calls
  axiosApiInstance.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await AuthService.authHeader();            
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  });

createApp(App).use(store).use(router,axios).mount('#app')
