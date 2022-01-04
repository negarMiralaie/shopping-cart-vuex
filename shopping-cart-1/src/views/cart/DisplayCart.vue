<template>
  <section>
    <h1 @click="showCart">Cart</h1>
    <p>{{cart[0][0]}}</p>
    <!-- <section v-for="(cartItem, index) in cart" :key="index">
      {{ cartItem }}
    </section> -->

    <section>
        {{typeof cart}}
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
  },
  mounted(){
      console.log(JSON.parse(JSON.stringify(typeof this.cart)))
  }
  //   mounted() {
  //     this.cart.forEach((cartItem) => {
  //       console.log(JSON.parse(JSON.stringify(this.cartItem[product])));
  //     });

  //     // console.log(JSON.parse(JSON.stringify(this.cart)))
  //   },
};
</script>

<style scoped></style>
