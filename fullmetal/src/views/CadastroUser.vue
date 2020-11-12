<template>
    <div class="container">
        <div class="flex-center">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" style="font-size:50px;">Cadastre-se aqui em <strong>Amestris</strong>!</h5>
                    <div class="flex-center">
                        <div v-if="msg==null" class="form-group">
                            <div class="row justify-content-center">
                                <div class="form-group col col-6">
                                    <label for="nome">Nome: </label>
                                    <input v-model="user.name" class="form-control" type="text" name="nome" id="nome" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="form-group col col-6">
                                    <label for="email">Email: </label>
                                    <input v-model="user.email" class="form-control" type="email" name="email" id="email" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="form-group col col-6">
                                    <label for="senha">Senha: </label>
                                    <input v-model="user.password" class="form-control" type="password" name="senha" id="senha" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="form-group col col-6">
                                    <label for="repeteSenha">Confirmação Senha: </label>
                                    <input v-model="user.password" class="form-control" type="password" name="repeteSenha" id="repeteSenha" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="form-group col col-6">
                                    <button @click="cadastrar()" type="button" class="item btn btn-primary">Cadastrar</button>
                                </div>
                            </div>
                            <hr>
                            <div class="row justify-content-center">
                                <router-link to="/"><button type="button" class="item btn btn-outline-primary">Homepage</button></router-link>
                                <router-link to="/login"><button type="button" class="item btn btn-outline-primary">Login</button></router-link>
                            </div>                                        
                        </div>
                        <div v-else>
                            <div class="alert alert-success" role="alert">
                                {{msg}}
                            </div>
                            <div class="row justify-content-center">
                                <router-link to="/"><button type="button" class="item btn btn-outline-primary">Homepage</button></router-link>
                                <router-link to="/login"><button type="button" class="item btn btn-outline-primary">Login</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'CadastroUser',
    data() {
        return {
            user:{ name:'', email:'', password:'', password_confirmation:'' }, msg:null,
        }
    },
    methods: {

        cadastrar(){
            console.log(this.user);
            axios.post('http://127.0.0.1:8000/api/auth/register',this.user,{
                headers:{
                    "alg": "HS256",
                    "typ": "JWT",
                },
                payload:{
                    'name':this.user.name,
                    'email':this.user.email,
                    'password':this.user.password,
                    'password_confirmation':this.user.password
                }
            })
            .then(res=>{ this.msg=res.data.message; 
                //this.logar(); 
            })
            .catch(erro=>{ console.error(erro) });
        },

        logar(){
            axios.post('http://127.0.0.1:8000/api/auth/login',this.user,{
                headers:{
                    "alg": "HS256",
                    "typ": "JWT",
                },
                payload:{
                    'email':this.user.email,
                    'password':this.user.password,
                }
            })
            .then(()=>{ this.$router.push('/');  })
            .catch(erro=>{ console.error(erro) });
        },

    },
}
</script>
<style>
    .item{ position: relative; font-size: 20px; line-height: 14px; text-decoration: none; 
        transition: 0.4s ease; margin: 0px 10px 0px 10px;
    }

    .item:hover{ color: #313238; font-style: italic; 
        text-decoration: none; font-size: 24px; margin: 0px 10px 0px 10px;
    }

    .item:hover::after{ color: #313238; font-style: italic; 
        text-decoration: none; font-size: 24px; margin: 0px 10px 0px 10px;
    }

    .links{
        color: #636b6f; padding: 0 25px; font-size: 13px; font-weight: 600;
        letter-spacing: .1rem; text-decoration: none; text-transform: uppercase;
    }
</style>