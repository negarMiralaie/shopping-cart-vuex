import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import './css/main.css'

library.add(fas);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
