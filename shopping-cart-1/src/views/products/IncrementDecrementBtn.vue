<template>
  <section class="incrementDecrementSec">
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
.incrementDecrementSec{
    display: flex;
    justify-content: center;
}

section {
  display: flex;
  text-align: center;
  align-items: center;
}

p{
    padding: 0 5px;
    border: solid 1px;
    border-left: none;
    border-right: none;
}
</style>
