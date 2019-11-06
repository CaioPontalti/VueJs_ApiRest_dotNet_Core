import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home.vue';
import Login from '@/pages/login/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      meta: { public: true },
      redirect: { path: '/404' }
    },
    {
      path: '/home',
      name: 'Home',
      meta: { public: false },
      component: Home,

      beforeEnter: (to, from, next) => {
        let acess = localStorage.getItem('token');
        if (acess) {
          next();
        } else {
          next({ path: '/login' });
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      meta: { public: true },
      component: Login
    }
  ]
});
