<template>
  <section>
    <h1>{{ user.email }}</h1>
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
//import components ici

export default {
  name: "ProfilView",
  data: () => ({
    user: {},
    isAdmin: localStorage.getItem("isAdmin") === "true",
  }),
  // récupération des informations de l'utilisateur et ses posts
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
    // fonction pour la suppression d'un compte utilisateur
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
</style>