import { createStore } from 'vuex'

export default createStore({
  state: {
    dataAtual: undefined,
    userAtual: undefined,
    users: [
      {
        nome: "Venial",
        senha: "123",
        userPosts: [{ content: "Eu amo meu curso!", data: undefined, curtidas: 25 }]
      }
    ],
  },
  getters: {
    verificarUserName: (state) => (nome) => {
      return state.users.some(usuario => usuario.nome === nome)
    },
    getPosts: state => state.users.userPosts,
    getNomeUserAtual: state => state.userAtual.nome,
  },
  mutations: {
    definirUsuario(state, data) {
      state.userAtual = data
      if (!state.userAtual.userPosts) state.userAtual.userPosts = []
      console.log('Usuario atual:', data.nome)
    },
    adicionarUsuario(state, data) {
      state.users.push(data);
      console.log(state.users)
    },
    adicionarPost(state, post) {
      const dataAtual = this.dispatch('definirData');
      if (state.userAtual) {
        state.userAtual.userPosts.unshift({
          content: post.content,
          curtidas: post.curtidas,
          data: dataAtual
        })
        console.log(state.userAtual.userPosts)
      }
      else {
        console.error('Usuário atual ou userPosts não está definido:', state.userAtual);
      }
    }
  },
  actions: {
    publicar({ commit }, newPost) {
      return this.dispatch('definirData').then(dataAtual => {
        newPost.data = dataAtual;
        commit('adicionarPost', newPost);
      });
    },
    definirData() {
      const dataAtual = new Date()
      const dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
      return dataFormatada
    }
  },
  modules: {
  }
})
