<template>
    <div class="grid">
      <n-grid class="card" cols="1 s:2 m:3 l:4 xl:5 2xl:6" :x-gap="17" :y-gap="17" responsive="screen">
        <n-grid-item v-for="n in 15" :key="n">
          <ArticleCard name="Table" price=100 photoUrl="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"/>
        </n-grid-item>
      </n-grid>
    </div>
  </template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { NGrid, NGridItem } from 'naive-ui';
import ArticleCard from './ArticleCard.vue';

@Options({
  components: {
    NGrid,
    NGridItem,
    ArticleCard
  }
})
export default class GridStore extends Vue {
}
</script>

<style scoped>
</style>
