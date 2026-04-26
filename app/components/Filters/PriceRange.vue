<script setup lang="ts">
  const { priceFrom, priceTo, minPrice, maxPrice } = useProducts()
</script>
<template>
  <div class="list__filters">
    <div class="filter__range">
      <div class="filter__range-item">
        <label class="filters__label" for="range_min">Min:</label>
        <input
          id="range_min"
          v-model.number="priceFrom"
          class="filter__input range__input range__min"
          type="number"
          :min="minPrice"
          :max="priceTo"
        />
      </div>
      <div class="filter__range-item">
        <label class="filters__label" for="range_max">Max:</label>
        <input
          id="range_max"
          v-model.number="priceTo"
          class="filter__input range__input range__max"
          type="number"
          :min="priceFrom"
          :max="maxPrice"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
  .filter__range {
    margin: 1rem 0;
    display: flex;
    gap: 2rem;
  }

  .filter__range-item {
    width: 100%;
  }

  .range__input {
    width: 100%;
  }

  @media (min-width: 1024px) {
    .filter__range-item {
      width: calc(25% - 1rem);
    }
  }
</style>
