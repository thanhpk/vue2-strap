import DropdownHover from './dropdownhover.vue';
import Carousel from './carousel.vue';
import Tooltip from './tooltip.vue';
import Collapse from './collapse.vue';
import Dropdown from './dropdown.vue';
import Modal from './modal.vue';

import bootstrap from './css/bootstrap.min.css';
export default {
  name: 'app',
	components: {
    dropdownhover: DropdownHover,
		carousel: Carousel,
		collapse: Collapse,
		dropdown: Dropdown,
		modal: Modal
  },
	directives: {
	  tooltip: Tooltip
	},
	methods: {
		showModal() {
			this.modalOptions = new String('show');
		},
		cool() {
			//this.g = 4;
			this.g ++;
		}
	},
  data () {
    return {
			modalOptions: "",
			tooltipoptions: { delay: { show: 500, hide: 100 } },
			g: 4,
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
