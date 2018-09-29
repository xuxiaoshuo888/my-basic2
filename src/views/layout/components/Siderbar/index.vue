<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import Siderbaritem from './SiderbarItem'

  export default {
    name: 'Siderbar',
    components: { Siderbaritem },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
