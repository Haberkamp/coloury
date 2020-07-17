import Vue from 'vue';
import App from './App.vue';
import colorStore from './store/color.store';
import './assets/styles/main.css';
import i18n from './i18n';

Vue.config.productionTip = false;

new Vue({
  store: colorStore,
  i18n,
  render: h => h(App)
}).$mount('#app');
