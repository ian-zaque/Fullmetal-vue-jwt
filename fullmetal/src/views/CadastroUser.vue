<template>
    <div class="container">
        <div class="flex-center">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" style="font-size:50px;">Cadastre-se aqui em <strong>Amestris</strong>!</h5>
                    <div class="container">
                        <div class="form-group">
                            <div class="row">
                                <div class="col col-10">
                                    <label for="nome">Nome: </label>
                                    <input type="text" name="nome" id="nome">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-10">
                                    <label for="email">Email: </label>
                                    <input type="email" name="email" id="email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-8">
                                    <label for="senha">Senha: </label>
                                    <input type="password" name="senha" id="senha">
                                </div>
                                <div class="col col-8">
                                    <label for="repeteSenha">Repetir senha: </label>
                                    <input type="password" name="repeteSenha" id="repeteSenha">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-12">
                                    <button type="button" class="btn btn-primary">Cadastrar</button>
                                    <router-link to="/"><button type="button" class="btn btn-primary">Homepage</button></router-link>
                                </div>
                            </div>                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'CadastroUser',
    data() {
        return {
            user:{ nome:'', email:'', senha:'', repeteSenha:'' }
        }
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