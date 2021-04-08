<template>
  <div>
    <template v-if="!item.children">
      <el-menu-item :index="item.path">
        <i v-if="item.icon" :class="item.icon"></i>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu :index="item.path">
        <template #title>
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <template v-if="item.children">
          <sidebar-item
            v-for="child in item.children"
            :key="child.key"
            :item="child"
          />
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup() {
    console.log('routes')
  }
})
</script>
<style lang="scss" scoped>
</style>
