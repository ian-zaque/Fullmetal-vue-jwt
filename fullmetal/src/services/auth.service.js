import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/auth';

class AuthService{

    login(user){
        return axios.post(url+'/login',user)
            .then(res=>{ 
                if(res.data.accessToken){
                    localStorage.setItem('user',JSON.stringify(res.data)); 
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
        return axios.post(url+'/logout')
            .then(()=>{ localStorage.removeItem('user'); return {}; })
    }

    authHeader(){
        let user = JSON.parse(localStorage.getItem('user'));

        if (user && user.accessToken) {
            axios.post(url+'/user-profile')
                .then(()=>{ return { Authorization: 'Bearer ' + user.accessToken }; })
                .catch(()=>{ return {}; })
        } 
        else { return {}; }
    }

}

export default new AuthService();
