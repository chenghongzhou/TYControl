import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import vueQuillEditor from 'vue-quill-editor';
// require styles 引入样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(vueQuillEditor);
// 这里进行判断相对应的角色



/* eslint-disable no-new */
new Vue({
    //el: '#app',
    //template: '<App/>',
    router,
    //components: { App }
    render: h => h(App)
}).$mount('#app');