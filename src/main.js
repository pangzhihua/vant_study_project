import Vue from 'vue';
import App from './App';
import { router } from './router';
import axios from 'axios'

Vue.prototype.$http = axios
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
