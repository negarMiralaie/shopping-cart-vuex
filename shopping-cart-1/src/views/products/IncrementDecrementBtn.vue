<template>
  <section class="incrementDecrementSec">
    <button @click="addToCart()">Increase</button>
    <p>{{ productAmountInCart(product.id) }}</p>
    <button @click="decreaseAmountInCart(product.id)">Decrease</button>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "IncrementDecrementBtn",
  props: ["product"],
  computed: {
    ...mapGetters(["productAmountInCart"]),
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", this.product);
    },
    decreaseAmountInCart(){
        this.$store.commit("DECREASE_AMOUNT_IN_CART", this.product.id);
    }
  }
};
</script>

<style scoped>
.incrementDecrementSec {
  display: flex;
  justify-content: center;
}

section {
  display: flex;
  text-align: center;
  align-items: center;
}

p {
  padding: 0 5px;
  border: solid 1px;
  border-left: none;
  border-right: none;
}
</style>
