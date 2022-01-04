<template>
  <section>
    <p>Cart</p>
    <p class="navCartBadge">0</p>
  </section>
</template>

<script>
export default {
    name:'NavCart'
};
</script>

<style scoped>
  section{
    /* background-color:yellowgreen; */
    display: flex;
    align-items:start;
    justify-content:flex-start;
    height: 100%;
    position: relative;
  }

  .navCartBadge{
    /* background-color:rgb(248, 40, 25); */
    position:absolute;
    /* bottom:15%; */
    right:0;
  }
</style>
