<template>
    <h4>{{product.name}}</h4>
    <p>{{product.price}}</p>
    <p>{{product.category}}</p>
    <p>{{product.quantity}}</p>
    <!-- <small>{{product.description}}</small> -->
    <small>{{shortDescription(product)}}</small>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
    name: "productCard",
    props:['product'],
    computed:{
        // shortDescription(){
        //     return this.$store.getters.shortDescription
        // }
        ...mapGetters([
            'shortDescription'
        ]),
    }
    
}
</script>