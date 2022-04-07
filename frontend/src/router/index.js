import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../views/ProfilView.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.name !== "login" &&
    to.name !== "signup" &&
    !localStorage.getItem("token")
  ) {
    next({ name: "login" });
  } else if (to.name === "login" || to.name === "signup") {
    localStorage.clear();
    next();
  } else next();
});


export default router
