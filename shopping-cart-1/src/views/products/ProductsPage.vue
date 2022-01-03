<template>
  <!-- <h2>Products:</h2> -->
  <section>
    <section
      v-for="product in productsList"
      :key="product.id"
      @click="showProductDetails(product)"
      class="products"
    >
      <productCard :product="product" />
    </section>
    <ProductDetails :isShowProductDetails="isShowProductDetails" :product="clickedProduct" />
  </section>
</template>

<script>
import ProductCard from "./productCard.vue";
import { mapState } from "vuex";
import productsList from "../../data/productsList";
import ProductDetails from "./ProductDetails.vue";

export default {
  name: "ProductsPage",
  components: { ProductCard, ProductDetails },
  data() {
    return {
      isShowProductDetails: false,
      clickedProduct: null
    };
  },
  computed: {
    ...mapState(["productsList"]),
  },
  methods: {
    showProductDetails(product) {
      this.isShowProductDetails = true;
      this.clickedProduct = product;
    },
  },
};
</script>

<style>
.products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(223, 201, 243);
  color: white;
}
</style>
