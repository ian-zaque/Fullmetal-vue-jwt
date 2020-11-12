<template>
    <div class="container">
        <div class="flex-center">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" style="font-size:50px;">Entre em <strong>Amestris</strong>!</h5>
                    <div class="container">
                        <div class="form-group">
                            <div class="row">
                                <div class="col col-10">
                                    <label for="email">Email: </label>
                                    <input v-model="user.email" type="email" name="email" id="email" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-8">
                                    <label for="senha">Senha: </label>
                                    <input v-model="user.password" type="password" name="senha" id="senha" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-12">
                                    <button @click="logar()" type="button" class="btn btn-primary">Entrar</button>                                    
                                </div>
                            </div>          
                        </div>
                        <hr>
                        <router-link to="/"><button type="button" class="btn btn-primary">Homepage</button></router-link>
                        <router-link to="/cadastro"><button type="button" class="btn btn-primary">Cadastrar-se</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'LoginUser',
    data() {
        return {
            user:{ email:'', password:'' },
        }
    },
    methods: {

        logar(){
            console.log(this.user);
            axios.post('http://127.0.0.1:8001/api/auth/login',this.user,{
                headers:{
                    "alg": "HS256",
                    "typ": "JWT",
                },
                payload:{
                    'email':this.user.email,
                    'password':this.user.password,
                }
            })
            .then(()=>{ this.$router.push('/'); })
            .catch(erro=>{ console.error(erro) });
        },
    },
}
</script>
<style>
    .item{ position: relative; font-size: 20px; line-height: 14px; text-decoration: none; transition: 0.4s ease; }

    .item:hover{ color: #313238; font-style: italic; text-decoration: underline; font-size: 24px; }

    .item:hover::after{ color: #313238; font-style: italic; text-decoration: underline; font-size: 24px; }

    .links{
        color: #636b6f; padding: 0 25px; font-size: 13px; font-weight: 600;
        letter-spacing: .1rem; text-decoration: none; text-transform: uppercase;
    }
</style>