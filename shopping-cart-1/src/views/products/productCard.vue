<template>
    <h4>{{product.name}}</h4>
    <p>{{product.price}}</p>
    <p>{{product.category}}</p>
    <p>{{product.quantity}}</p>
    <small>{{product.description}}</small>
</template>

<script>
export default {
    name: "productCard",
    props:['product']
    
}
</script>