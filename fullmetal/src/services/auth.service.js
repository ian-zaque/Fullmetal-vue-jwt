import axios from 'axios';

const url = 'http://127.0.0.1:8000/api/auth';

class AuthService{

    login(user){
        axios.post(url+'/login',user,{
                headers:{
                    "alg": "HS256",
                    "typ": "JWT",
                },
                payload:{
                    'email':this.user.email,
                    'password':this.user.password,
                }
        })
        .then(res=>{ 
            if(res.data.accessToken){
                localStorage.setItem('user',res.data);
            }
        })
        .catch(erro=>{ return erro; })
    }

    register(user){
        axios.post(url+'/register',user,{
                headers:{
                    "alg": "HS256",
                    "typ": "JWT",
                },
                payload:{
                    'name':user.name,
                    'email':user.email,
                    'password':user.password,
                    'password_confirmation':user.password
                }
        })
        .then(res=>{ return res; })
        .catch(erro=>{ return erro; })
    }

    logout() {
        axios.post(url+'/logout')
            .then(res=>{ localStorage.removeItem('user'); return res; })
            .catch(erro=>{ return erro; })
    }

    authHeader(){
        let user = JSON.parse(localStorage.getItem('user'));

        if (user && user.accessToken) {
            axios.post(url+'/user-profile')
                .then(res=>{ return { Authorization: 'Bearer ' + user.accessToken }; })
                .catch(erro=>{ return {}; })
        } 
        else { return {}; }
    }

}

export default new AuthService();
