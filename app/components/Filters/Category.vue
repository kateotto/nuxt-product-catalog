<script setup lang="ts">
  const { category, categories } = useProducts()
</script>

<template>
  <div class="filter__category">
    <label class="filters__label" for="category">Category</label>
    <select id="category" v-model="category" class="filter__input">
      <option value="">All</option>
      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}
      </option>
    </select>
  </div>
</template>
<style scoped>
  .filter__category .filter__input {
    width: 50%;
  }

  @media (min-width: 1024px) {
    .filter__category .filter__input {
      width: calc(25% - 1rem);
    }
  }
</style>
