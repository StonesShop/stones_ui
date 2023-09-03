<template>
    <h1>About us {{ id }}</h1>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent ({
    name: 'AboutView',
    data () {
        const route = useRoute()
        return {
            id: computed(() => route.params.id)
        }
    }
})
</script>