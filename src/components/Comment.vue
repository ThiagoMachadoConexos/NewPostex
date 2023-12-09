<template>
      <div class="comment-username">
            <i class="fa-solid fa-user"></i>
            {{ comment.nome }}
      </div>
      <div class="comment-content">
            <p>{{ comment.content }}</p>
      </div>
      <div class="comment-info">
            <span v-if="dataPromiseResult">{{ dataPromiseResult }}</span>
            <span>
                  <!-- <i class="fa-regular fa-comment answerBtn"></i> -->
            </span>
            <span>
                  {{ comment.curtidas }}
                  <i class="fa-regular fa-heart likeBtn" @click="curtir"></i>
            </span>
            <span>
                  <p>{{ comment.id }}</p>
            </span>
      </div>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      comment: Object
    },
    data(){
      return {
        dataPromiseResult: null,
      }
    },
    mounted() {
      this.$store.dispatch('definirData').then(result => {this.dataPromiseResult = result})
    }
  };
</script>

<style>
  .comment-liked {
    background-color: #303236;
    border: 2px solid #1a8cd8;
  }
</style>