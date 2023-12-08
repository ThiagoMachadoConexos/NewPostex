<template>
    <div class="post">
      <div class="post-username">
        @{{ user.nome }}
      </div>
      <div class="post-content">
        <p>{{ post.content }}</p>
      </div>
      <div class="post-info">
        <span v-if="dataPromiseResult">{{ dataPromiseResult }}</span>
        <span>Responder</span>
        <span>
            {{ post.curtidas }}
            <i class="fa-regular fa-heart likeBtn"></i>
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
        dataPromiseResult: null
      }
    },
    methods: {
      curtir() {
        this.$emit('curtir', this.user, this.post);
      },
    },
    mounted() {
      this.$store.dispatch('definirData').then(result => {this.dataPromiseResult = result})
    }
  };
</script>