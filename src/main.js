import Vue from "vue";
import App from "./App.vue";
import "./global/styles.scss";
import router from "./router";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
// Font Awesome
// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap
// import "./axios";
// Bootstrap Vue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Import Toastification
import Toast from "vue-toastification";
const options = {};
Vue.use(Toast, options);

library.add(fas, far);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import Print from "vue-print-nb";
// Global instruction
Vue.use(Print);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
