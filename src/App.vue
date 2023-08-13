<template>
  <Catalog />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Catalog from './components/Catalog.vue';

@Options({
  components: {
    Catalog
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
