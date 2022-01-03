<template>
  <section v-if="isShowProductDetails">
      <p>{{product.name}}</p>
    </section>
</template>

<script>
import ProductCard from './productCard.vue'

export default {
  name: "ProductDetails",
  components: {ProductCard},
  props: ["product", "isShowProductDetails"],
  data() {
    return {};
  },
  mounted() {
      console.log("mounted")
    console.log(this.product);
  },
};
</script>

<style scoped>
section {
  background-color: red;
  /* position:fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
  width: 100%;
  height: 100%;
  z-index: 5;
}

p {
  background-color: rgb(18, 126, 8);
}
</style>
