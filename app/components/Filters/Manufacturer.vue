<script setup lang="ts">
  const { manufacturer, manufacturers } = useProducts()
</script>

<template>
  <div class="manufacturer__wrapper">
    <p class="filters__label">Producent</p>
    <div class="filters__checkboxes">
      <label v-for="man in manufacturers" :key="man" class="filters__checkbox">
        <input v-model="manufacturer" type="checkbox" :value="man" />
        <span>{{ man }}</span>
      </label>
    </div>
  </div>
</template>

<style scoped>
  .filters__label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #6b7280;
  }

  .filters__checkboxes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    max-height: 150px;
    overflow-y: scroll;
  }

  .filters__checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #374151;
    cursor: pointer;
  }

  .filters__checkbox input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    accent-color: #6366f1;
    cursor: pointer;
    flex-shrink: 0;
  }

  @media (min-width: 768px) {
    .filters__checkboxes {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .filters__checkboxes {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .filters__checkboxes {
      grid-template-columns: repeat(6, 1fr);
    }
  }
</style>
