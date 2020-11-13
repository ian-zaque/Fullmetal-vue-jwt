<template>
    <div class="flex-center">
        <div class="card">
            <div v-if="userAtual!==null" class="card-body">
                <h5 class="card-title" style="font-size:50px;">Perfil de <strong>{{userAtual.name}}</strong></h5>
                <div class="flex-center">
                    <div class="form-group">
                        <div class="row justify-content-center">
                                <div class="form-group col col-8">
                                <label>Nome: </label>
                                <input v-model="userAtual.name" class="form-control" type="text" name="nome" id="nome" disabled>
                            </div>
                            <div class="form-group col col-8">
                                <label>Email: </label>
                                <input v-model="userAtual.email" class="form-control" type="email" name="email" id="email" disabled>
                            </div>
                        </div>         
                    </div>
                    <hr>
                    <div class="row justify-content-center">
                        <router-link to="/"><button type="button" class="item btn btn-outline-primary" replace>Homepage</button></router-link>                            
                    </div>                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Perfil',
    data() {
        return {
        }
    },

    computed: {
        logado() { return this.$store.state.Auth.status.loggedIn; },
        userAtual() { 
            if(this.logado){
                console.log(this.$store.state.Auth.user);
                return this.$store.state.Auth.user.data.user;
            }
            return null;
        }
    },

    mounted() {
        if (!this.logado) {
            this.$router.replace('/login');
        }
    }

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