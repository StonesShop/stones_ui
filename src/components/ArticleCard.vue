<template>
    <div class="card">
      <n-card :title="name">
        <template #cover>
          <img :src="photoUrl"> 
        </template>
        {{ price }}р
      </n-card>
    </div>
</template>

<script lang="ts">
import { NCard } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'ArticleCard',
  components: {
    NCard
  },
  props: {
    name: String,
    price: Number,
    photoUrl: String,
  }
})
</script>

<style scoped>

</style>