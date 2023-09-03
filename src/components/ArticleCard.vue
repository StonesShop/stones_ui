<template>
    <div class="card">
      <router-link :to="{ name: 'article', params: { id: id_article}}">
        <n-card
          :title="name"
          :hoverable="true"
        >
          <template #cover>
            <img :src="photoUrl"> 
          </template>
          {{ price }}р
        </n-card>
      </router-link>
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
    id_article: Number,
    name: String,
    price: Number,
    photoUrl: String,
  },
  methods: {
    openArticle() {
      console.log(this.id_article)
    }
  }
})
</script>

<style scoped>

</style>