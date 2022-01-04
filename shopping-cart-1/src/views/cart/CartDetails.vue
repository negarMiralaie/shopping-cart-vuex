<template>
  <div>
    <h1>This is cart</h1>
    <DisplayCart class="cart" />
  </div>
</template>

<script>
import DisplayCart from "./DisplayCart.vue";

export default {
  name: "CartDetails",
  components: { DisplayCart },
};
</script>

<style scoped>
.cart {
  background-color: rgb(236, 86, 86);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
