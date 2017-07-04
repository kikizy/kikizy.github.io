// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
import App from './App'
import router from './router'
import store from './stores'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);

Vue.use(MuseUI);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
