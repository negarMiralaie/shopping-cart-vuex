<template>
  <section class="navCartContainer">
    <p>Cart</p>
    <section class="cartIconAndBadgeSec">
      <font-awesome-icon icon="shopping-cart" class="cartIcon" />
      <p class="navCartBadge">{{cartLength}}</p>
    </section>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "NavCart",
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>

.navCartContainer {
  display: flex;
  height: 100%;
}

.cartIconAndBadgeSec {
  position: relative;
  display: flex;
  align-items: center;
}

.cartIconAndBadgeSec p{
  color: #212121;
}

.navCartBadge {
  background-color:#D9CAB3;
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
