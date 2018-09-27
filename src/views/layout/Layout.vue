<template>
  <div class="app-wrapper">
    <siderbar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <app-main/>
    </div>
  </div>
</template>

<script>
  import { Navbar, Siderbar, AppMain } from './components'

  export default {
    name: 'Layout',
    components: {
      Navbar,
      Siderbar,
      AppMain
    }
  }
</script>

<style scoped>

</style>
