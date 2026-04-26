<script setup>
  const { search } = useProducts()
</script>
<template>
  <input
    id="search"
    v-model="search"
    class="filter__input filter__search"
    type="text"
    placeholder="Search..."
  />
</template>
<style scoped>
  .filter__search {
    padding: 0.5rem;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .filter__search {
      width: 50%;
    }
  }
</style>
