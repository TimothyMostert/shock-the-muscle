<template>
    <div id="nav">
        <h1 class="nav__header">Shock The Muscle</h1>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="stylus" scoped>
#nav
    background: #EBEEF5
    display: flex
    align-items center
    justify-content space-around
    height inherit

.nav__header
    font-family: 'Roboto', sans-serif
</style>
