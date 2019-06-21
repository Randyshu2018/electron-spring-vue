import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import interopFallback from './interop-fallback'
import router  from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css';



Vue.use(iView)

Vue.config.productionTip = false

Vue.prototype.$http = axios

const interop = window.interop || interopFallback
Vue.prototype.$interop = interop
Vue.prototype.$log = interop.log
Vue.$log = interop.log

Vue.$log.info('==========> Vue app start')

router.beforeEach(async(to, from, next) => {
    iView.LoadingBar.start();
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        let login = store.getters.isLogin;
        Vue.$log.info("isLogin:"+login);
        if (!login) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
});

router.afterEach(route=>{
    iView.LoadingBar.finish();
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
