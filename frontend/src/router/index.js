import { createRouter, createWebHashHistory } from 'vue-router'

//Paramètrage du routeur
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

//Création du routeur
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//Redirection si l'utilisateur n'est pas loggé et suppression des données du local storage en cas de déconnexion
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
