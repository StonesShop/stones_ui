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
import { Options, Vue } from 'vue-class-component';
import { NCard } from 'naive-ui';

@Options({
  components: {
    NCard
  },
  props: {
    name: String,
    price: Number,
    photoUrl: String
  }
})
export default class ArticleCard extends Vue {
  name!: string
  price!: number
  photoUrl!: string
}
</script>

<style scoped>

</style>
