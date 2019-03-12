//入口js
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'lib-flexible/flexible'
import './mock/mockServer'


new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
