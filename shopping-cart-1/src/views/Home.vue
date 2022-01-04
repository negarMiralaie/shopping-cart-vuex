<template>
  <section class="home">
    <h1>Home</h1>
  </section>
</template>

<script>
import ProductsPage from './products/ProductsPage.vue'

export default {
  name: 'Home',
  components: {ProductsPage}
}
</script>

<style scoped>
section {
  text-align: center
}
</style>
