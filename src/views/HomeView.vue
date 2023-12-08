<template>
  <div id="home">
    <h1>Seja bem-vindo, @{{this.$store.getters.getNomeUserAtual}}!</h1>
    <NewPost @publicar="publicar"></NewPost>
    <Posts :posts="posts"></Posts>
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
  methods: {
    publicar(newPost) {
      this.$store.commit['adicionarPost', newPost]
      console.log(this.$store.state.userAtual.posts)
    }
  }
}
</script>