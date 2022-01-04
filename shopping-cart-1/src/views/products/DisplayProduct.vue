<template>
  <section>
    <h5>{{ product.name }}</h5>
    <p>{{ product.category }}</p>
    <p>{{ product.price }}</p>
    <p v-show="isShowProductDetails">{{ product.description }}</p>
    <p v-show="isShowProductDetails">{{ product.quantity }}</p>
    <section v-if="productIsInCart(product.id)">
      <IncrementDecrementBtn :product="product" />
    </section>
    <section v-else>
      <button @click="addToCart()">BUY</button>
    </section>
    <h1>{{productIsInCart(product.id)}}</h1>
  </section>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import IncrementDecrementBtn from "./IncrementDecrementBtn.vue";

export default {
  name: "DisplayProduct",
  props: ["product"],
  components: { IncrementDecrementBtn },
  computed: {
    ...mapState(["isShowProductDetails"]),
    ...mapGetters(["productIsInCart"]),
  },
  methods: {
    addToCart() {
      // updateLocalStorageCart
      this.$store.commit("ADD_TO_CART", this.product);
    },
  },
  // mounted(){
  //   console.log(this.productIsInCart(product))
  // }
};
</script>

<style scoped>
h1 {
  background-color: red;
}
</style>
