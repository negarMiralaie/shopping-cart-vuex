<template>
<!-- <h2>Products:</h2> -->
  <section>
    <section v-for="product in productsList" :key="product.id" class="products">
      <productCard :product="product"/>
    </section>
  </section>
</template>

<script>
import ProductCard from "./productCard.vue";
import { mapState } from "vuex";
import productsList from "../../data/productsList";

export default {
  name: "ProductsPage",
  components: { ProductCard },
    computed:{
      ...mapState([
          "productsList"
      ])},
};
</script>

<style>
    .products{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color:rgb(223, 201, 243);
        color: white;
    }
</style>