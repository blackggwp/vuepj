<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <Title ss="renderPropsValue">aaaa</Title>
    <Post></Post>
  </div>
</template>

<script>
import Title from './Title'
import Post from './Post'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to home'
    }
  },
  components: {
    Title,
    Post
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
