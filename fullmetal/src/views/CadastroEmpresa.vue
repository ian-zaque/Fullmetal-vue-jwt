<template>
        <div class="flex-center">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title" style="font-size:50px;">Cadastre uma empresa em <strong>Amestris</strong>!</h5>
                <div class="flex-center">
                    <div v-if="msg==null" class="form-group">
                        <div class="row justify-content-center">
                            <div class="form-group col col-6">
                                <label for="email">Nome: </label>
                                <input v-model="empresa.nome" class="form-control" type="email" name="email" id="email" required>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="form-group col col-6">
                                <label for="senha">CNPJ: </label>
                                <input v-model="empresa.cnpj" class="form-control" type="password" name="senha" id="senha" required>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="form-group col col-6">
                                <button @click="cadastrar()" :disabled="isRequesting==true" type="button" class="item btn btn-primary">Cadastrar</button>
                            </div>
                        </div>
                        <hr>
                        <div class="row justify-content-center">
                            <router-link to="/"><button type="button" class="item btn btn-outline-primary" replace>Homepage</button></router-link>
                            <router-link to="/login"><button type="button" class="item btn btn-outline-primary" replace>Login</button></router-link>
                        </div>                                        
                    </div>
                    <div v-else>
                        <div :class="cadastrou==true?'alert alert-success':'alert alert-danger'" role="alert">
                            <p>{{msg.message}}</p>
                        </div>
                        <div class="row justify-content-center">
                            <router-link to="/"><button type="button" class="item btn btn-outline-primary" replace>Homepage</button></router-link>
                            <router-link to="/login"><button type="button" class="item btn btn-outline-primary" replace>Login</button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'CadastroEmpresa',
    data() {
        return {
            empresa:{nome:'',cnpj:''}, msg:null, cadastrou:false, isRequesting:false,
        }
    },

    computed: {
        logado() {
            return this.$store.state.Auth.status.loggedIn;
        }
    },

    created() {
        if (this.logado) { this.$router.replace('/'); }
    },

    methods: {
        cadastrar(){
            this.isRequesting=true;
            this.$store.dispatch('Auth/create',this.empresa)
                .then(res=>{
                    this.msg = res; this.cadastrou = true; this.isRequesting=false;
                })
                .catch(error=>{
                    this.isRequesting=false; this.msg = error; this.cadastrou=false; console.error(error);
                });
        }
    },
}
</script>