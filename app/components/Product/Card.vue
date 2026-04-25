<script setup lang="ts">
import type { Product } from '~/types/product';

defineProps<{
  product: Product
}>()
</script>
<template>
<div>
    <h2>{{ product.name }}</h2>
</div>
</template>