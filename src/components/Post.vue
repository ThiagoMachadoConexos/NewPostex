<template>
    <div :class="['post', {'post-liked': post.curtidas > 0}]">
      <div class="post-username">
        <i class="fa-solid fa-user"></i>
        @{{ user.nome }}
      </div>
      <div class="post-content">
        <p>{{ post.content }}</p>
      </div>
      <div class="post-info">
        <span v-if="dataPromiseResult">{{ dataPromiseResult }}</span>
        <span>
            <i class="fa-regular fa-comment answerBtn"></i>
        </span>
        <span>
            {{ post.curtidas }}
            <i class="fa-regular fa-heart likeBtn" @click="curtir"></i>
        </span>
        <span>
          <p>{{post.id}}</p>
        </span>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'Post',
    props: {
      user: Object,
      post: Object,
    },
    data(){
      return {
        dataPromiseResult: null,
      }
    },
    methods: {
      curtir() {
        this.$store.dispatch('curtirPost', {user: this.user, post: this.post});
      },
    //   curtirPost(state, {usuarioAtual, post}) {
    //   //conferir se aquele usuario ja curtiu o post
    //   const usuarioAtual = state.userAtual;
    //   if (usuarioAtual) {
    //     const postIndex = post.id
    //     if (postIndex !== -1) {
    //       // Inverte o valor das curtidas e atualiza o status de curtida
    //       const postAtual = usuarioAtual.userPosts[postIndex];
    //       postAtual.curtidas = postAtual.curtido ? postAtual.curtidas - 1 : postAtual.curtidas + 1;
    //       postAtual.curtido = !postAtual.curtido;
    //       console.log(postAtual)
    //     }
    //     const i = this.post.indexOf(post)
    //     console.log(i)
    //   }
    // },
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