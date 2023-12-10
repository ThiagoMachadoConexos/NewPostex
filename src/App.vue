<template>
  <div>
    <nav v-if="!Identification">
      <span><i class="fa-solid fa-gear"></i></span>
      <span>
        <p class="postex">Poste<span class="blue-x">x</span></p>
      </span>
      <span class="nav-links">
        <router-link class="nav-element" to="#">#EmAlta</router-link>
        <router-link class="nav-element" to="#">Perfil</router-link>
        <router-link class="nav-element" to="/">Sair</router-link>
        <router-link class="nav-element" v-if="!isHome" to="/home">Home</router-link>
      </span>
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
