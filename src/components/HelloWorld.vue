<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ lambdaMsg }}</h2>
    <button @click="callLambda">Call function</button>
    <button @click="createTable">Make connection to mongodb</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      lambdaMsg: 'Click to call a lambda message!',
      jsonTable: null,
    };
  },
  methods: {
    callLambda() {
      fetch('/.netlify/functions/hello').then(response => response.json()).then((json) => { this.lambdaMsg = json.msg; });
    },
    createTable() {
      fetch('./netlify/functions/mongodb').then((response) => { console.log(response); this.jsonTable = response; });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hello
  width 500px
  margin auto
  background lightgrey
  padding 20px

h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983S
</style>
