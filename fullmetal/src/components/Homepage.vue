<template>
    <div class="container">
        <div class="flex-center">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title" style="font-size:50px;">Bem-vindo(a) à <strong>Amestris</strong>!</h5>
                    <div class="links">
                        <a type="button" class="item">Entrar </a>
                        <router-link to="/cadastro"><a type="button" class="item"> Cadastrar-se </a></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Home',
    data() {
        return {
            
        }
    },
}
</script>
<style>
   .item{
        position: relative; font-size: 20px; line-height: 14px; text-decoration: none;
        transition: 0.4s ease;
    }
    .item:hover{
        color: #313238; font-style: italic; text-decoration: underline; font-size: 24px;
    }
    .item:hover::after{
        color: #313238; font-style: italic; text-decoration: underline; font-size: 24px;
    }

    .links{
        color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
    }
</style>