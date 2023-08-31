<template>
  <CatalogComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CatalogComponent from './components/CatalogComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    CatalogComponent
  }
});
</script>

<style>

</style>

