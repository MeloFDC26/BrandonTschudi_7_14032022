<template>
  <section>
    <NavComponent></NavComponent>
    <h1>{{ user.pseudo }}</h1>
    <button v-if="!isAdmin" @click="deleteAccount" class="delete">
      Supprimer mon compte
    </button>

    <section id="posts">
      <PostComponent
        :post="post"
        v-for="post of user.Posts"
        :key="post.id"
      ></PostComponent>
    </section>
  </section>
</template>

<script>
export default {
  name: "ProfilView",
  data: () => ({
    user: {},
    isAdmin: localStorage.getItem("isAdmin") === "true",
  }),
  // Récupération des informations de l'utilisateur et ses posts
  created() {
    this.axios
      .get(
        "http://localhost:3000/api/users/" + localStorage.getItem("userId"),
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        this.user = res.data.user;
      })
      .catch(() => {
        alert("Une erreur est survenue");
      });
  },
  methods: {
    // Fonction pour la suppression d'un compte utilisateur
    deleteAccount() {
      if (confirm("Êtes vous sûr de vouloir supprimer votre compte ?")) {
        this.axios
          .delete(
            "http://localhost:3000/api/users/" + localStorage.getItem("userId"),
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then(() => {
            localStorage.clear();
            this.$router.push("/login");
          })
          .catch(() => {
            alert("Une erreur est survenue");
          });
      }
    },
  },
};
</script>

<style scoped>
#posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  border-radius: 15px;
  margin: 3px;
  padding: 2px;
  min-width: 175px;
}

button:hover {
  box-shadow: 0px 8px 15px #858282;
  transform: scale(0.95);
  cursor: pointer;
}
</style>