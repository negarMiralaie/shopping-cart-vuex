<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About | </router-link>
    <router-link to="/products"> Products | </router-link>
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
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
