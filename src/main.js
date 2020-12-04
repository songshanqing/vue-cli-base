import Vue from 'vue'
import App from './App.vue'
import Storage from 'vue-ls'
import store from './store'
import axios from './utils/request.js'
import router from './router/index.js'

Vue.config.productionTip = false
let options = {
  namespace: 'vuejs__', // key键前缀
  name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
  storage: 'local', // 存储名称: session, local, memory
};
Vue.use(Storage, options);

Vue.prototype.$ajax=axios
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
