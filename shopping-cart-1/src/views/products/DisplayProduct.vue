<template>
  <section>
    <h5>{{ product.name }}</h5>
    <p>{{ product.category }}</p>
    <p>{{ product.price }}</p>
    <p v-show="isShowProductDetails">{{ product.description }}</p>
    <p v-show="isShowProductDetails">{{ product.quantity }}</p>
    <button @click="addToCart()">BUY</button>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "DisplayProduct",
  props: ["product"],
  computed: { ...mapState(["isShowProductDetails"]) },
  methods: {
    addToCart() {
      // updateLocalStorageCart
      this.$store.commit("ADD_TO_CART", this.product);
    },
  },
};
</script>

<style scoped></style>
