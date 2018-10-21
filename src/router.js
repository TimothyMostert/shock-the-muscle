import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Workouts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'workouts',
      component: Home,
    },
    {
      path: '/statistics',
      name: 'statistics',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Statistics.vue'),
    },
  ],
});
