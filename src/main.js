import './assets/main.css';
import 'alertifyjs/build/css/alertify.css';

import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";

createApp(App)
  .use(store)
  .mount("#app");