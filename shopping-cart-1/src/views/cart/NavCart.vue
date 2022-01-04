<template>
  <section class="navCartContainer">
    <p>Cart</p>
    <section class="cartIconAndBadgeSec">
      <font-awesome-icon icon="shopping-cart" class="cartIcon" />
      <p class="navCartBadge">0</p>
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

.cartIconAndBadgeSec p{
  color: #D9CAB3;
}

.cartIcon{
  /* background:red; */
}

.navCartBadge {
  /* background-color:#D9CAB3; */
  background-color:black;
  width: 12px;
  height: 12px;
  border-radius:8px;
  position: absolute;
  bottom:60%;
  right: -20%;
  font-size:10px;
  text-align:center;
}
</style>
