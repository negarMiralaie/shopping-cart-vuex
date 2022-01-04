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
  },
};
</script>

