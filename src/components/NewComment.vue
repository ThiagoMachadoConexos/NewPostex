<template>
      <div id="new-comment">
            <Mensagem :msg="msg" v-if="mostrarMensagem"></Mensagem>
            <div>
                  <input class="publish-element" v-model="content" type="text" placeholder="O que você está pensando?"
                        maxlength="280" />
                  <button class="publish-element" @click="comentar">Comentar</button>
                  <i class="fa-regular fa-comment answerBtn"></i>
            </div>
      </div>
</template>

<script>
import Mensagem from './Mensagem.vue'

export default {
    name: 'newComment',
    components: { Mensagem },
    data(){
        return {
            content: '',
            curtidas: 0,
            data: undefined,
            msg: 'Não é permitido comentario vazio!',
            mostrarMensagem: false
        }
    },
    methods: {
        comentar(){
            if(this.content !== ''){
                this.$store.dispatch("comentar", {user: this.user, post: this.post, content: this.content, curtidas: this.curtidas, data: this.data})
                this.content = '',
                this.curtidas = 0,
                this.data = undefined
            }
            else
            {
                console.log(this.msgErro)
                this.mostrarMensagem = true
                setTimeout(() => this.mostrarMensagem = false, 2500)
            } 
        }
    }
}
</script>