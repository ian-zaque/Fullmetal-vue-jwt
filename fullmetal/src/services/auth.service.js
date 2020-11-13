import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/auth';

class AuthService{

    login(user){
        return axios.post(url+'/login',user)
            .then(res=>{ 
                if(res.data.access_token){
                    localStorage.setItem('user',JSON.stringify(res.data.user));
                    localStorage.setItem('token',res.data.access_token);
                    console.log('USER',localStorage.getItem('user'));
                    console.log('TOKEN',localStorage.getItem('token'))
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
        localStorage.removeItem('user'); localStorage.removeItem('token'); 
    }

    authHeader(){
        let user = localStorage.getItem('user');
        let token = localStorage.getItem('token');
        if (user && token) {
            axios.post(url+'/user-profile')
                .then(()=>{ return { Authorization: 'Bearer ' + user.access_token }; })
                .catch(()=>{ return {}; })
        } 
        else { return {}; }
    }

}

export default new AuthService();
