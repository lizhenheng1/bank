// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';             //引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css';  //element-ui组件的样式需要单独引入
import router from './router'
import '../static/font/iconfont.js' 
import '../static/font/iconfont.css' 
import axios from 'axios'
import store from './store'//引入store
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
