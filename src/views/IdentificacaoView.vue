<template>
    <div id="Identificacao">
      <h1 class="id-title">Poste<span class="id-title-x">X</span></h1>
      <div class="conteudo">
        <div><p class="pretitle">Vamos começar?</p></div>
        <form>
            <div class="elemento">
                <input class="form-element" type="text" id="nome" placeholder="Nome de Usuário" v-model="user.nome">
            </div>
            <div class="elemento">
                <input class="form-element" type="password" id="senha" placeholder="Senha" v-model="user.senha">
            </div>
        </form>
        <button class="LoginBtn" @click.prevent="registra">Avançar</button>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Identificacao',
    data() {
      return {
        user: {
          id: ++this.$store.state.idUser,
          nome: '',
          senha: '',
        },
      }
    },
    methods: {
      registra(){
        const newUser = {
            id: this.user.id,
            nome: this.user.nome,
            senha: this.user.senha
        }
        if(this.verifica() && !this.$store.getters.verificarUserName(newUser.nome)) {
          this.$store.commit('adicionarUsuario', newUser)
          this.$store.commit('definirUsuario', newUser)
          console.log('Login bem-sucedido')
          this.$router.push('/home')
        }
        else console.log("Não foi possível realizar o login.")
      },
      verifica(){
        if (this.user.nome.trim() && this.user.senha.trim())
          return true;
        else
          return false;
      }
    }
  }
  </script>