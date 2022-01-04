<template>
    <section>
        <h1 @click="showCart">Cart</h1>
        <p>{{cart}}</p>
        <section>
            <h2>{{isShowProductDetails}}</h2>
            <p>{{cart}}</p>
        </section>
    </section>
</template>

<script>
import {mapState} from 'vuex'

    export default {
        name: 'DisplayCart',
        computed: { ...mapState(["isShowProductDetails", "cart"]) },
        methods: {
            showCart(){
                console.log(JSON.parse(JSON.stringify(this.cart)))
            }
        }

    }
</script>

<style scoped>

</style>