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
