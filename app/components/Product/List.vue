<script setup>
  import { ProductStatuses } from '~/types/product'

  const { products, getProductsStatus } = useProducts()
</script>

<template>
  <div>
    <div v-if="getProductsStatus === ProductStatuses.Pending">Loader</div>
    <div v-else class="list__wrapper">
      <ProductCard v-for="(product, key) in products" :key="key" :product="product" />
    </div>
  </div>
</template>
<style scoped>
  .list__wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 1.5rem;
  }

  @media (min-width: 640px) {
    .list__wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .list__wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .list__wrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
