<template>
    <div class="catalog">
      <n-space vertical size="large">
        <n-layout>

          <n-layout-header style="height: 64px; padding: 24px" bordered>
            <h3>StonesWorld</h3>
          </n-layout-header>

          <n-layout has-sider>
            <n-layout-sider
              content-style="padding: 24px;"
              :native-scrollbar="false"
              bordered
            >
              <n-h2>Handian Bridge</n-h2>
            </n-layout-sider>

            <n-layout content-style="padding: 24px;" :native-scrollbar="false">
              <GridStore />
            </n-layout>

          </n-layout>

          <n-layout-footer 
            style="height: 64px; padding: 24px"
            bordered
          >
            城府路
          </n-layout-footer>
        </n-layout>
      </n-space>
    </div>
</template>

<script lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NSpace, NH2 } from 'naive-ui';
import GridStore from './GridStore.vue'
import { defineComponent } from 'vue';


export default defineComponent ({
    name: 'CatalogComponent',
    components: {
        NLayout,
        NLayoutHeader,
        NLayoutSider,
        NLayoutFooter,
        NSpace,
        NH2,
        GridStore
    }
})
</script>

<style scoped>
</style>