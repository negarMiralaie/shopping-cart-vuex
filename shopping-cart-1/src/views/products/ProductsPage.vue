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
  data() {
    return {
    //   productsList: productsList
    };
  },
//   methods: {
//     showProducts() {
//       console.log(JSON.parse(JSON.stringify(this.productsList)));
//       console.log("here");
//     },
//   },
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
        /* gap:100px;
        column-gap: 100px;
        row-gap: 100px; */
        background-color:rgb(223, 201, 243);
        color: white;
    }
</style>