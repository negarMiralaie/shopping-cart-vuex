<template>
  <section class="incrementDecrementSec">
    <section class="incrementDecrementBtns">
      <button @click="addToCart()">Increase</button>
      <p>{{ productAmountInCart(product.id) }}</p>
      <button @click="decreaseAmountInCart(product.id)">Decrease</button>
    </section>
    <section class="removeFromCartSec">
      <button @click="removeProductFromCart(product.id)">Remove</button>
    </section>
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
    decreaseAmountInCart() {
      this.$store.commit("DECREASE_AMOUNT_IN_CART", this.product.id);
    },
    removeProductFromCart() {
      this.$store.commit("REMOVE_PRODUCT_FROM_CART", this.product.id);
    },
  },
};
</script>

<style scoped>
.incrementDecrementSec {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.incrementDecrementBtns{
    display: flex;
    justify-content: center;
    align-items: center;
}

.removeFromCartSec{
    display: flex;
    justify-content: center;
}

.removeFromCartSec button{
    margin-top:auto;
}

p {
  padding: 0 5px;
  border: solid 1px;
  border-left: none;
  border-right: none;
}
</style>
