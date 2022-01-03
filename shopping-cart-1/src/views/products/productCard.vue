<template>
  <section>
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
    // shortDescription(){
    //     return this.$store.getters.shortDescription
    // }
    ...mapGetters(["shortDescription"]),
  },
};
</script>

<style scoped>
    section{
        background-color:rgb(49, 44, 44);
        border-radius:10px;
        width: 50%;
        padding: 1%;
    }
</style>
