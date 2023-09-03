<template>
    <h1>Admin Panel</h1>
    <n-button @click="showAddModal = true">Add article</n-button>
    <n-modal v-model:show="showAddModal">
        <n-card
            style="width: 900px; height: 600px;"
            title="Add article"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
            >
            <AddArticle />
        </n-card>
    </n-modal>
    <n-table>
        <thead>
            <tr>
                <th>ID Article</th>
                <th>Name Article</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in gridData" :key="item.id_article">
                <td>{{ item.id_article }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
            </tr>
        </tbody>
    </n-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NTable, NButton, NModal, NCard} from 'naive-ui';
import AddArticle from '@/components/AddArticle.vue';
import axios from 'axios';
import IArticle from '@/interfaces/article'

export default defineComponent({
    name: 'AdminPanel',
    components: {
        NTable,
        NButton,
        NModal,
        NCard,
        AddArticle
    },
    data() {
      return {
        gridData: [] as IArticle[],
        showAddModal: false,
        formValue: ref({
            name: '',
            age: '',
            phone: ''
        })
      }
    },
    methods: {
        handleValidateClick() {
            alert('Hello')
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