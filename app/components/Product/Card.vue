<script setup lang="ts">
  import type { Product } from '~/types/product'

  defineProps<{
    product: Product
  }>()
</script>
<template>
  <div class="card">
    <div class="card__header">
      <span class="card__category">{{ product.category }}</span>
      <div class="card__manufacturer">{{ product.manufacturer }}</div>
    </div>

    <span class="card__name">{{ product.name }}</span>
    <p class="card__desc">{{ product.description }}</p>
    <span class="card__price">${{ product.price }}</span>
  </div>
</template>
<style scoped>
  .card {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding: 1.25rem;
    border-radius: 0.75rem;
  }

  .card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card__category {
    width: fit-content;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    margin: 0.5rem 0;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    background: #eef2ff;
    color: #2e3255;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .card__name {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .card__manufacturer {
    font-size: 0.75rem;
  }

  .card__desc {
    font-size: 0.85rem;
    color: #212121;
    flex-grow: 1;
  }

  .card__price {
    font-size: 1.5rem;
    font-weight: 700;
  }
</style>
