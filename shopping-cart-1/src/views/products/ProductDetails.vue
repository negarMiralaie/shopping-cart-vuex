<template>
  <section v-if="isShowProductDetails" class="productDetailsBg">
    <section class="productDetails">
      <DisplayProduct :product="product"/>
    </section>
  </section>
</template>

<script>
import ProductCard from "./productCard.vue";
import DisplayProduct from './DisplayProduct.vue'

export default {
  name: "ProductDetails",
  components: { ProductCard, DisplayProduct},
  props: ["product", "isShowProductDetails"]
};
</script>

<style scoped>
.productDetailsBg{
  background-color: rgb(126, 119, 119);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: grid;
  place-items: center;
}

.productDetails{
  background-color:rgb(250, 99, 192);
  position: fixed;
}

</style>
