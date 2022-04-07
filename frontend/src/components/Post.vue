<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.description }}</p>
    <p>Auteur du post</p>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  data: () => ({
    editMode: false,
    currentUserId: localStorage.getItem("userId"),
    isAdmin: localStorage.getItem("isAdmin") === "true",
    content: "",
  }),
  props: ["post"],
  methods: {
    setEditMode() {
      this.editMode = !this.editMode;
    },
    //suppression d'un post
    deletePost() {
      if (confirm("Êtes vous sûr de vouloir supprimer votre post ?")) {
        this.axios
          .delete("http://localhost:3000/api/posts/" + this.post.id, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then(() => {
            this.$router.go();
          })
          .catch((error) => {
            console.error(error);
            alert("Une erreur est survenue");
          });
      }
    },
    // modification d'un post
    update() {
      this.axios
        .put(
          "http://localhost:3000/api/posts/" + this.post.id,
          { title: this.post.title, description: this.post.description },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          this.$router.go();
        })
        .catch((error) => {
          console.error(error);
          alert("Une erreur est survenue");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>