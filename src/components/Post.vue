<template>
  <div :class="['post', { 'post-liked': post.curtidas > 0 }]">
    <div class="post-username">
      <i class="fa-solid fa-user"></i>
      @{{ user.nome }}
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
    </div>
    <div class="post-info">
      <span class="data-content" v-if="dataPromiseResult">
        {{ dataPromiseResult }}
      </span>
      <div>
        <span v-if="verificarUser">
          <i class="fa-solid fa-delete-left deleteBtn" @click="deletar"></i>
        </span>
        <span>
          <i class="fa-regular fa-comment answerBtn"></i>
        </span>
        <span>
          {{ post.curtidas }}
          <i class="fa-regular fa-heart likeBtn" @click="curtir"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    user: Object,
    post: Object
  },
  data(){
    return {
      dataPromiseResult: null,
      exibir: true
    }
  },
  computed: {
    verificarUser() {
      return this.$store.state.userAtual.userPosts.some(post => post == this.post)
    }
  },
  methods: {
    curtir() {
      this.$store.dispatch('curtirPost', {user: this.user, post: this.post});
    },
    deletar(){
      this.$store.dispatch('deletarPost', {user: this.user, post: this.post})
    }
  },
  mounted() {
    this.$store.dispatch('definirData').then(result => {this.dataPromiseResult = result})
  }
};
</script>

<style>
.post-liked {
  background-color: #303236;
  border: 2px solid #1a8cd8;
}
</style>