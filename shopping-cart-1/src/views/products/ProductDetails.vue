<template>
  <section v-if="isShowProductDetails" @click="closeProductDetails" class="productDetailsBg">
    <section class="productDetails">
      <DisplayProduct :product="product"/>
    </section>
  </section>
</template>

<script>
import ProductCard from "./productCard.vue";
import DisplayProduct from './DisplayProduct.vue'
import {mapMutations} from 'vuex'

export default {
  name: "ProductDetails",
  components: { ProductCard, DisplayProduct},
  props: ["product", "isShowProductDetails"],
  methods:{
    changeIsShowProductDetails() {
      this.$store.commit("CHANGE_IS_SHOW_PRODUCT_DETAILS");
    },
    closeProductDetails(event){
      if(event.target.className.includes('productDetailsBg')){
        this.changeIsShowProductDetails();
      }
    }
  }
};
</script>

<style scoped>
.productDetailsBg{
  background-color: rgba(0,0,0,0.6);
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
