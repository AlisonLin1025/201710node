import Vue from 'vue'; // runtime不支持template 只支持render
// compiler + runtime
import App from './App.vue';

import router from './router/index.js';
import notify from './plugin/notify.js';
Vue.use(notify,{
    delay:5000
}); // 使用带有install的对象
new Vue({
    router,
    el:'#app',
    render:h=>h(App)
});

