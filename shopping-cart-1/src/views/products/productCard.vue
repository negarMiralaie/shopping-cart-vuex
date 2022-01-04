<template>
  <section class="productCard">
    <h4>{{ product.name }}</h4>
    <p>{{ product.price }}</p>
    <p>{{ product.category }}</p>
    <p>{{ product.quantity }}</p>
    <small>{{ shortDescription(product) }}</small>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "productCard",
  props: ["product"],
  computed: {
    ...mapGetters(["shortDescription"]),
  },
};
</script>
