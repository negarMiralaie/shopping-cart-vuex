<template>
  <div>
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
  background-color: #6D9886;
  margin-top: .5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
