<template>
  <div id="app">
    <el-container>
      <el-header>
        <Navbar></Navbar>
      </el-header>
      <el-container>
        <el-aside>
          <Aside-navbar></Aside-navbar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import AsideNavbar from './components/AsideNavbar.vue';

export default {
  components: {
    Navbar,
    AsideNavbar,
  },
};
</script>

<style lang="stylus">
body
  margin: 0

.el-header
  padding 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
