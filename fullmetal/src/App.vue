<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white">
          <router-link to="/">
            <a class="navbar-brand text-white"> <i class="fas fa-atom fa-2"></i> Fullmetal</a>
          </router-link>
          <div class="navbar-nav">
              <div v-if="isLogado==true" class="flex-row justify-content-right">
                <router-link to="/perfil">
                  <a class="navbar-brand text-white"> <i class="far fa-id-badge"></i> Perfil</a>
                </router-link>
                <a class="navbar-brand text-white" @click="sair()" type="button"> <i class="fas fa-sign-out-alt"></i> Sair</a>
              </div>
              <div v-else class="flex-row justify-content-right">
                <router-link to="/login">
                  <a class="navbar-brand text-white"> <i class="fas fa-sign-in-alt"></i> Entrar</a>
                </router-link>
                <router-link to="/cadastro">
                  <a class="navbar-brand text-white"> <i class="fas fa-user-plus"></i> Cadastre-se</a>
                </router-link>
              </div>
          </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'App',
    components: {
    },

    computed: {
      isLogado() {
          if(this.$store.state.Auth.user){ return true;  }
          return false;
      }
    },

    methods: {
      sair(){
        this.$store.dispatch('Auth/logout');
        this.$router.push('/login');
      }
    },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
