<template>
  <div id="Posts">
    <div v-for="user in this.$store.state.users" :key="user.nome">
      <Post
        v-for="post in user.userPosts"
        :key="post.content"
        :user="user"
        :post="post"
        @curtir="curtirPost"
      />
    </div>
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  name: 'Posts',
  components: { Post },
  methods: {
    curtirPost(user, post) {
      this.$store.commit('curtirPost', { user, post });
    },
  },
};
</script>