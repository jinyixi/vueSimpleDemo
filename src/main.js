// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 引用element-ui组件库
import 'element-ui/lib/theme-chalk/index.css'; // 引用样式
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */

// 权限拦截，全局的
import './permission'

Vue.config.productionTip = process.env.NODE_ENV === 'production'
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
