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
      <span v-if="dataPromiseResult">{{ dataPromiseResult }}</span>
      <span>
          <NewComment/>
      </span>
      <span>
        {{ post.curtidas }}
        <i class="fa-regular fa-heart likeBtn" @click="curtir"></i>
      </span>
      <span>
        <p>{{ post.id }}</p>
      </span>
    </div>
    <Comment v-for="comment in post.respostas" :key="comment.nome" :comment="comment" />
  </div>
</template>
  
<script>

import Comment from './Comment.vue';
import NewComment from './NewComment.vue';

export default {
  name: 'Post',
  components: { Comment, NewComment },
  props: {
    user: Object,
    post: Object
  },
  data() {
    return {
      dataPromiseResult: null,
    }
  },
  methods: {
    curtir() {
      this.$store.dispatch('curtirPost', { user: this.user, post: this.post });
    },
  },
  mounted() {
    this.$store.dispatch('definirData').then(result => { this.dataPromiseResult = result })
  }
};
</script>

<style>
.post-liked {
  background-color: #303236;
  border: 2px solid #1a8cd8;
}
</style>