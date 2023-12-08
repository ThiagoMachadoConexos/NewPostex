<template>
    <div id="new-post">
      <input
        class="publish-element"
        v-model="content"
        type="text"
        placeholder="O que você está pensando?"
        maxlength="70"
      />
      <button class="publish-element" @click="publicar">Publicar</button>
    </div>
</template>

<script>
export default {
    name: 'NewPost',
    data(){
        return {
            content: '',
            curtidas: 0,
            data: undefined
        }
    },
    methods: {
        publicar(){
            this.$store.dispatch("publicar", {content: this.content, curtidas: this.curtidas, data: this.data})
            this.content = '',
            this.curtidas = 0,
            this.data = undefined
        }
    }
}
</script>
