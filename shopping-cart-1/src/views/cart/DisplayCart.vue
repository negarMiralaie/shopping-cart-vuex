<template>
  <section>
    <h1 class="cartPageTitle">Cart</h1>
    <section
      v-for="(cartItem, index) in cart"
      :key="index"
      @click="showProductDetails(product)"
      class="cartSec"
    >
      <h3>Name: {{ cartItem["product"].name }}</h3>
      <p>Category: {{ cartItem["product"].category }}</p>
      <p>Price: {{ cartItem["product"].price }}</p>
      <small>Amount: {{ cartItem["amount"] }}</small>
      <ProductDetails
        :isShowProductDetails="isShowProductDetails"
        :product='cartItem["product"]'
      />
    </section>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import ProductDetails from "../products/ProductDetails.vue";

export default {
  name: "DisplayCart",
  computed: { ...mapState(["isShowProductDetails", "cart"]) },
  components: { ProductDetails },
  methods: {
    changeIsShowProductDetails() {
      this.$store.commit("CHANGE_IS_SHOW_PRODUCT_DETAILS");
    },
    showProductDetails(product) {
      this.changeIsShowProductDetails();
      this.clickedProduct = product;
    },
  },
};
</script>
