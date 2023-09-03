<template>
    <n-form>
        <n-form-item
            label="Name article"
        >
            <n-input />
        </n-form-item>
        <n-form-item
            label="Price"
        >
            <n-input />
        </n-form-item>
        <n-space>
            <n-button>
                Save
            </n-button>
        </n-space>
    </n-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    NForm,
    NFormItem,
    NInput,
    NSpace,
    NButton
} from 'naive-ui';

export default defineComponent ({
    name: 'AddArticle',
    components: {
        NForm,
        NFormItem,
        NInput,
        NSpace,
        NButton
    }
})
</script>