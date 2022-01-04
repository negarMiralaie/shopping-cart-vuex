<template>
  <section>
    <h1 @click="showCart">Cart</h1>
    <section v-for="(cartItem, index) in cart" :key="index" class="cartSec">
      <h3>name: {{ cartItem["product"].name }}</h3>
      <p>price: {{ cartItem["product"].price }}</p>
      <small>amount: {{ cartItem["amount"] }}</small>
    </section>

  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DisplayCart",
  computed: { ...mapState(["isShowProductDetails", "cart"]) },
  methods: {
    showCart() {
      console.log(JSON.parse(JSON.stringify(this.cart)));
    },
  }
};
</script>

<style scoped>
    .cartSec{
        background-color:rgb(169, 169, 245);
        border-radius:10px;
        display: flex;
        flex-direction:column;
        align-items:flex-start;
    }
</style>
