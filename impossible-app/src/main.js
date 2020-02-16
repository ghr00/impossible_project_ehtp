import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
 
const socket = io('http://localhost:5000');
 
Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
