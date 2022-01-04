<template>
  <section>
    <h1 @click="showCart" class="cartPageTitle">Cart</h1>
    <section v-for="(cartItem, index) in cart" :key="index" class="cartSec">
      <h3>Name: {{ cartItem["product"].name }}</h3>
      <p>Category: {{cartItem["product"].category}}</p>
      <p>Price: {{ cartItem["product"].price }}</p>
      <small>Amount: {{ cartItem["amount"] }}</small>
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
