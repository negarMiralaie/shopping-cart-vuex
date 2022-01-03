<template>
  <section>
    <h5>{{ product.name }}</h5>
    <p>{{ product.category }}</p>
    <p>{{ product.price }}</p>
    <p v-show="isShowProductDetails">{{ product.description }}</p>
    <p v-show="isShowProductDetails">{{ product.quantity }}</p>
  </section>
</template>

<script>
import {mapState} from 'vuex'

    export default {
        name:"DisplayProduct",
        props:["product"],
        computed:{...mapState(['isShowProductDetails'])}
    }
</script>

<style scoped></style>
