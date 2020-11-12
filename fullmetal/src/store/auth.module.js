import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const statusInicial = user 
? { status: { loggedIn: true }, user } 
: { status: { loggedIn: false }, user: null };


export const Auth ={
    namespaced:true, state: statusInicial,
    actions:{
        login( {commit}, user){
            return AuthService.login(user)
                .then(
                    user=>{                             //USUÁRIO LOGADO
                        commit('sucessoLogin', user);
                        return Promise.resolve(user);
                    },
                    error =>{                           //FALHA NO LOGIN
                        commit('falhaLogin');
                        return Promise.reject(error)
                    }
                );
        },

        logout({commit}){
            AuthService.logout();
            commit('logout');
        },

        register({commit},user){
            return AuthService.register(user).then(
                response => {
                  commit('successoRegistro');
                  return Promise.resolve(response.data);
                },
                error => {
                  commit('falhaRegistro');
                  return Promise.reject(error);
                }
              );
        },
    },

    mutations: {
        sucessoLogin(state, user) {
          state.status.loggedIn = true;
          state.user = user;
        },

        falhaLogin(state) {
          state.status.loggedIn = false;
          state.user = null;
        },

        logout(state) {
          state.status.loggedIn = false;
          state.user = null;
        },

        successoRegistro(state) {
          state.status.loggedIn = false;
        },

        falhaRegistro(state) {
          state.status.loggedIn = false;
        }
      }

};

