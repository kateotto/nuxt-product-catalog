<script setup lang="ts">
  const isExpanded = ref(false)
</script>
<template>
  <div class="filters__section">
    <FiltersSearch />
    <div>
      <button class="filters__toggle" @click="isExpanded = !isExpanded">
        {{ isExpanded ? 'Less filters ▲' : 'More filters ▼' }}
      </button>
    </div>
    <template v-if="isExpanded">
      <div class="filters__section__expandable">
        <FiltersCategory />
        <FiltersManufacturer />
        <FiltersPriceRange />
      </div>
    </template>
  </div>
</template>
<style>
  .filter__input {
    padding: 0.5rem;
    border: 1px solid #2e3255;
    border-radius: 0.75rem;
  }

  .filters__label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #2e3255;
    padding-bottom: 0.5rem;
  }

  .filters__section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 1.2rem 0;
    border-bottom: 1px solid #2e3255;
    gap: 1rem;
  }

  .filters__section__expandable {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .filters__toggle {
    padding: 1rem 0;
  }
</style>
