<template>
    <div class="aside-navbar">
        <router-link to="/">Workouts</router-link>
        <router-link to="/statistics">Statistics</router-link>
    </div>
</template>

<script>
export default {
  name: 'AsideNavbar',
};
</script>

<style lang="stylus" scoped>
.aside-navbar
    display flex
    flex-direction column
    align-items center

a
    font-weight bold
    text-decoration none
    color #2c3e50
    font-size 24px
    padding 24px
    &.router-link-exact-active
        color #42b983
</style>
