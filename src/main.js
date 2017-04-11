import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
// 移动端相应响应

require('./js/app_move.js')

new Vue({
  el: '#app',
  render: h => h(App),

})
