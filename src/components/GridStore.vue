<template>
    <div class="grid">
      <n-grid class="card" cols="1 s:2 m:3 l:4 xl:5 2xl:6" :x-gap="17" :y-gap="17" responsive="screen">
        <n-grid-item v-for="item in gridData" :key="item.id_article">
          <ArticleCard name="{{ item.name }}" price=100 photoUrl="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"/>
        </n-grid-item>
      </n-grid>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NGrid, NGridItem } from 'naive-ui';
import ArticleCard from './ArticleCard.vue';

export default defineComponent ({
    name: 'GridStore',
    components: {
        NGrid,
        NGridItem,
        ArticleCard
    }
})
</script>

<style scoped>
</style>