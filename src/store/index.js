import { createStore } from 'vuex'

export default createStore({
  state: {
    dataAtual: undefined,
    userAtual: undefined,
    idUser: 1,
    users: [
      {
        id: 1,
        nome: "Venial",
        senha: "123",
        userPosts: [{
          id: 0, content: "Eu amo meu curso!", data: undefined, curtidas: 25,
          respostas: [
            { id: 0, nome: "Thiago", content: "Vai para Geoloia", data: undefined, curtidas: 3 },
            { id: 1, nome: "Ricardo", content: "Formata meu pc", data: undefined, curtidas: 0 }
          ]
        }]
      }
    ],
  },
  getters: {
    verificarUserName: (state) => (nome) => {
      return state.users.some(usuario => usuario.nome === nome)
    },
    getPosts: state => state.users.userPosts,
    getNomeUserAtual: state => state.userAtual.nome
  },
  mutations: {
    verificarCadastro(state, user) {
      const userExistente = state.users.find(u => u.nome === user.nome)
      if (userExistente) {
        console.log('Usuário já existe')
        return true
      }
      else {
        console.log('Nova conta deve ser criada')
        return false
      }
    },
    definirUsuario(state, data) {
      state.userAtual = data
      if (!state.userAtual.userPosts) state.userAtual.userPosts = []
      console.log('Usuario atual:', data.nome)
    },
    adicionarUsuario(state, user) {
      const userExistente = state.users.find(u => u.nome === user.nome)
      if (!userExistente) {
        user.id = ++state.idUser
        state.users.push(user)
        console.log('Novo user adicionado: ', user.nome)
      }
      else {
        console.log('Usuário já existe. Logando como:', user)
      }
    },
    adicionarPost(state, post) {
      const dataAtual = this.dispatch('definirData');
      if (state.userAtual) {
        state.userAtual.userPosts.unshift({
          id: state.userAtual.userPosts.length,
          content: post.content,
          curtidas: post.curtidas,
          data: dataAtual,
          respostas: [],
          curtido: false
        })
        console.log(state.userAtual.userPosts)
        console.log(state.users);
      }
      else {
        console.error('Usuário atual ou userPosts não está definido:', state.userAtual);
      }
    },
    curtirPost(state, postagem) {
      const usuarioAtual = state.userAtual;
      const usuarioPost = postagem.user;
      if (usuarioAtual) {
        const postIndex = usuarioPost.userPosts.findIndex(p => p.id === postagem.post.id);
        if (postIndex !== -1) {
          // Inverte o valor das curtidas e atualiza o status de curtida
          const postAtual = usuarioPost.userPosts[postIndex];
          postAtual.curtidas = postAtual.curtido ? postAtual.curtidas - 1 : postAtual.curtidas + 1;
          postAtual.curtido = !postAtual.curtido;
        }
      }
    },
    deletarPost(state, post) {
      const userAtual = state.userAtual
      if (post.user.id === userAtual.id) {
        const postIndex = userAtual.userPosts.findIndex(p => p.id === post.post.id)
        if (postIndex !== -1) {
          userAtual.userPosts.splice(postIndex, 1)
          //console.log('Post excluído')
          //console.log(userAtual.userPosts)
        }
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
    comentar({ commit }, newComment) {
      return this.dispatch('definirData').then(dataAtual => {
        newComment.data = dataAtual;
        commit('adicionarComment', newComment);
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
    },
    curtirPost({ commit }, post) {
      commit('curtirPost', post);
    },
    deletarPost({ commit }, post) {
      commit('deletarPost', post)
    }
  },
  modules: {
  }
})