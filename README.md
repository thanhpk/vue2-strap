# vue2-strap
Bootstrap 3 as Vue2 component

## You don't have to learn another syntax to use bootstrap in your vue2 app !
Just wrap your standard bootstrap html with vue2-strap and it will run

```html
<html>
<head></head>
<body>
<div id="app">
  <button v-tooltip type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on bottom">Tooltip on bottom</button>
  
  <dropdown>
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"> Drop down <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#"> Action</a></li>
      <li><a href="#"> Another action</a></li>
      <li><a href="#"> Something else here</a></li>
    </ul>
  </dropdown>
</div>
</body>
</html>
```

```js
// main.js

import Vue from 'vue';
import bootstrapcss from 'bootstrap/css/bootstrap.min.css';

import tooltip from 'bootstrap/tooltip.vue';
import dropdown from 'bootstrap/dropdown.vue';

new Vue({
  el: '#app'.
  render: h => h(App),
  components: {
    dropdown: dropdown,
  },
  directives: {
    tooltip: tooltip
  }
});
```

# install
1. download the source
```sh
npm install --save vue2-strap
```

2. add resolve
In your `webpack.config.js` (or `webpack.base.conf.js`), add resolve alias for vue2-strap
```json
module.exports = {
  entry: ...
  output: ...
  module: ...
  resolve: {
    alias: {
      'vue$': ...,
	  'bootstrap': 'bootstrap': path.resolve(__dirname, '../node_modules/vue2-strap/dist')
    }
  },
  ...
}
```
