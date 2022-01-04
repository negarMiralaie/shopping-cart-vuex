<template>
  <section>
    <button>Increase</button>
    <p>{{productAmountInCart(product.id)}}</p>
    <button>Decrease</button>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "IncrementDecrementBtn",
  props: ["product"],
  computed: {
    ...mapGetters(["productAmountInCart"]),
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  background-color: red;
}
</style>
