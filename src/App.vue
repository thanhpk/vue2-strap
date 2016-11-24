<template>
  <div >
    FUCK APP

<carousel>HU</carousel>
  </div>
</template>

<script>
	import carousel from './carousel.vue';
console.log('HA', carousel);
const B = 10;

var app = {
	name: 'app',
	components: {carousel},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}


export {B, carousel, app};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
