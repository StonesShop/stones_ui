<template>
    <n-image lazy width="800" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
    <!-- <h1>Article: {{ id_article }}</h1> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { NImage } from 'naive-ui';
import axios from 'axios';

export default defineComponent({
    name: 'ArticleView',
    components: {
        NImage
    },
    data () {
        return {
            articleData: {}
        }
    },
    mounted() {
        const route = useRoute()
        const id_article = route.params.id
        
        axios.get(`/api/article/${id_article}`)
        .then((response) => {
            this.articleData = response.data;
        }).catch(error => {
            console.log(error)
            this.articleData = [
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
    }
})
</script>