import Vue from 'vue'
import App from './App'
import { MessageBox } from './components/MyUI';

Vue.use(MessageBox);  // 调用 index 中的 install

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
