<template>
  <div>
    <nav v-if="!Identification">
      <div>
        <span>Postex</span>
      </div>
      <div>
        <router-link class="nav-element" to="/">Sair</router-link>
        <router-link class="nav-element" to="">Perfil</router-link>
        <router-link class="nav-element" v-if="!isHome" to="/home">Home</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    Identification(){
      return this.$route.path === '/'
    },
    isHome() {
      return this.$route.path === '/home';
    }
  }
}
</script>

<style lang="scss">
  @import './styles/style.scss'
</style>
