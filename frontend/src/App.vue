<template>
  <div>
    <nav v-if="isLogged">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/profil">Profil</router-link> |
      <router-link to="/login">Déconnexion</router-link>
    </nav>
    <main><router-view /></main>
  </div>
</template>
<script>
export default {
  name: "App",
  // fonction pour la recupération du token
  data: () => ({
    isLogged: localStorage.getItem("token"),
  }),
  // fonction pour la mise a jour du token
  updated() {
    this.isLogged = localStorage.getItem("token");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
