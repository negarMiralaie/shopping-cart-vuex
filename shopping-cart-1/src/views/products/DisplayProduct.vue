<template>
    <section>
        <h5>{{product.name}}</h5>
        <p>{{product.category}}</p>
        <p>{{product.price}}</p>
        <p>{{product.description}}</p>
        <p>{{product.quantity}}</p>
    </section>
</template>

<script>
    export default {
        name:"DisplayProduct",
        props:["product"] 
    }
</script>

<style scoped>

</style>