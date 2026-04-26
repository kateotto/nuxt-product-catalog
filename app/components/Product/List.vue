<script setup>
  import { ProductStatuses } from '~/types/product'

  const { getProductsStatus, filteredProducts } = useProducts()
</script>

<template>
  <div>
    <div v-if="getProductsStatus === ProductStatuses.Pending">Loader</div>
    <div v-else class="list__wrapper">
      <div class="list__grid">
        <template v-if="filteredProducts.length > 0">
          <ProductCard v-for="(product, key) in filteredProducts" :key="key" :product="product" />
        </template>
        <div v-else>No results...</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .list__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  @media (min-width: 640px) {
    .list__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .filter__search {
      width: 50%;
    }

    .filter__range-item {
      width: calc(25% - 1rem);
    }

    .list__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .list__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
