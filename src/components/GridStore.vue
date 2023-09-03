<template>
    <div class="grid">
      <n-grid
        class="card"
        cols="2 s:3 m:4 l:5 xl:5 2xl:6"
        :x-gap="17"
        :y-gap="17"
        responsive="screen"
      >
        <n-grid-item v-for="item in gridData" :key="item.id_article">
          <ArticleCard
            :name="item.name"
            :id_article="item.id_article"
            :price="item.price"
            photoUrl="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </n-grid-item>
      </n-grid>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NGrid, NGridItem } from 'naive-ui';
import ArticleCard from './ArticleCard.vue';
import IArticle from '@/interfaces/article';
import axios from 'axios'

export default defineComponent ({
    name: 'GridStore',
    components: {
        NGrid,
        NGridItem,
        ArticleCard
    },
    data() {
      return {
        gridData: [] as IArticle[]
      }
    },
    mounted() {
      axios.get('/api/article')
      .then((response) => {
        this.gridData = response.data;
      }).catch(error => {
        console.log(error)
        this.gridData = [
            {
                "id_article": 1,
                "name": "Table",
                "price": 5000
            },
            {
                "id_article": 2,
                "name": "Стул",
                "price": 2000
            },
            {
                "id_article": 3,
                "name": "Лунный камень",
                "price": 1000
            },
            {
                "id_article": 4,
                "name": "Диван",
                "price": 7000
            },
            {
                "id_article": 5,
                "name": "Кровать",
                "price": 12000
            }
        ]
      })
    },
})
</script>

<style scoped>
</style>