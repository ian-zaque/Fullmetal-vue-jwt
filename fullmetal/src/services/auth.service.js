import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/auth';

class AuthService{

    login(user){
        return axios.post(url+'/login',user)
            .then(res=>{ 
                if(res.data.access_token){
                    localStorage.setItem('user',res.data);
                }
                return res;
            })
    }

    register(user){
        return axios.post(url+'/register',user)
            .then(res=>{ return res; })
            .catch(erro=>{ return erro; })
    }

    logout() {
        localStorage.removeItem('user');
    }

    authHeader(){
        let user = localStorage.getItem('user');

        if (user && user.access_token) {
            axios.post(url+'/user-profile')
                .then(()=>{ return { Authorization: 'Bearer ' + user.accessToken }; })
                .catch(()=>{ return {}; })
        } 
        else { return {}; }
    }

}

export default new AuthService();
