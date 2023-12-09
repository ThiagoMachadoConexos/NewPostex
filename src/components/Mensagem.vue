<template>
    <div class="container-mensagem">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    name: 'Mensagem',
    props: {
        msg: String
    }
}
</script>