<template>
    <div class="app-wrapper">
        <the-sidebar></the-sidebar>
    </div>
</template>
<script lang="ts">
import { TheSidebar } from './components/index'

export default {
  components: {
    TheSidebar
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
    width: 100%;
    height:100%;
    position:relative;
}
</style>
