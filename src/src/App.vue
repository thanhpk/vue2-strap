<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

 <dropdownhover >
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"> Drop down <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li><a href="#"> Action</a> </li>
					<li>
            <a href="#"> Another action</a></li>
<li>            <a href="#"> Something else here</a></li>
</ul>
      </dropdownhover>


  

			<carousel id="carousel-example-generic" class="carousel slide col-sm-12" data-ride="carousel">
				<!-- Indicators -->
				<ol class="carousel-indicators">
					<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
					<li data-target="#carousel-example-generic" data-slide-to="2"></li>
				</ol>

				<!-- Wrapper for slides -->
				<div class="carousel-inner">
					<div class="item active">
						<img src="http://nghethuatchinhphuc.com/kcfinder/upload/images/7040206-beautiful-girl-photos-9072.jpg" alt="...">
						<div class="carousel-caption">
							<h3>Caption Text</h3>
						</div>
					</div>
					<div class="item">
						<img src="http://www.lanlinglaurel.com/data/out/28/4129657-girl-image.jpeg" alt="...">
						<div class="carousel-caption">
							<h3>Caption Text</h3>
						</div>
					</div>
					<div class="item">
						<img src="http://images.tapchianhdep.net/16-01anh-dep-hot-girl-vu-hoang-yen7.jpg" alt="...">
						<div class="carousel-caption">
							<h3>Caption Text</h3>
						</div>
					</div>
				</div>
</carousel>
</div>
</template>

<script>
import DropdownHover from './dropdownhover.vue';
import Carousel from './carousel.vue';

import bootstrap from './css/bootstrap.min.css';
export default {
  name: 'app',
	  components: {
    dropdownhover: DropdownHover,
		carousel: Carousel
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
