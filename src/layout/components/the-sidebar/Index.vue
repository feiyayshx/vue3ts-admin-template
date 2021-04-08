<template>
  <div>
    <el-menu
      :uniqueOpened="true"
      default-active="activeMenu"
      class="el-menu-vertical-demo"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText">
      <sidebar-item v-for="item in asyncRoutes" :key="item.key" :item="item" />
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import variables from '@/styles/_variables.scss'
import { asyncRoutes } from 'mock/mockdb/routes'
import SidebarItem from './SidebarItem.vue'
export default defineComponent({
  components: {
    SidebarItem
  },
  setup () {
    console.log(asyncRoutes, 'asyncRoutes')
    return {
      variables,
      asyncRoutes,
      activeMenu: 'dashboard'
    }
  }
})
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  height:100%;
}
</style>
