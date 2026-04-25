<script setup>
import { ProductStatuses } from '~/types/product';

const { products, getProductsStatus } = useProducts()
</script>

<template>
    <div>
        <div v-if="getProductsStatus === ProductStatuses.Pending">
            Loader
        </div>
       <div v-else>
        <ProductCard v-for="(product, key) in products" :key="key" :product="product" />
       </div>
    </div>
</template>
