<template>
  <div id="home">
    <h1>Seja bem-vindo, @{{this.$store.getters.getNomeUserAtual}}!</h1>
    <NewPost @publicar="publicar"></NewPost>
    <Posts :posts="posts"></Posts>
    <router-link to="/profile">Testando</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue';
import NewPost from '@/components/NewPost.vue';

export default {
  name: 'HomeView',
  components: {
    Posts, NewPost
  },
  data(){
    return {
      posts: []
    }
  },
  methods: {
    publicar(newPost) {
      this.$store.commit['adicionarPost', newPost]
      console.log(this.$store.state.userAtual.posts)
    },
    redirecionar(){
      if(this.$state.store.getNomeUserAtual === '')  {
        console.log('Redirecionando para a página de identificação.');
        this.$router.push('/')
      }
    },
  }
}
</script>