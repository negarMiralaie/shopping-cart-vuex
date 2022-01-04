<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/cart">
      <NavCart />
    </router-link>
  </div>
  <router-view />
</template>

<script>
import { mapState, mapMutations } from "vuex";
import NavCart from "./views/cart/NavCart.vue"

export default {
  components:{NavCart},
  mounted() {
    this.$store.commit("SYNC_CART_WITH_LOCAL_STORAGE");
  },
};
</script>

<style>

#nav a {
  font-weight: bold;
  /* background-color:red; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
