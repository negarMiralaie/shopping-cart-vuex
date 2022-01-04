<template>
  <section class="navCartContainer">
    <p>Cart</p>
    <section class="cartIconAndBadgeSec">
      <font-awesome-icon icon="shopping-cart" class="cartIcon" />
      <!-- <p class="navCartBadge">0</p> -->
    </section>
  </section>
</template>

<script>
export default {
  name: "NavCart",
};
</script>

<style scoped>
.navCartContainer {
  /* background-color:rgb(50, 117, 205); */
  display: flex;
  height: 100%;
}

.cartIconAndBadgeSec {
  position: relative;
  /* background-color:yellowgreen; */
  display: flex;
  align-items: center;
}

.cartIcon{
  /* background:red; */
}

.navCartBadge {
  background-color:rgb(248, 40, 25);
  position: absolute;
  bottom:15%;
  right: 0;
}
</style>
