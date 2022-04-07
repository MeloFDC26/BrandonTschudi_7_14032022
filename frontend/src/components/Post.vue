<template>
  <div class="post">
    <h2 v-if="!editMode">{{ post.title }}</h2>
    <input type="text" v-model="postToEdit.title" v-if="editMode" />
    <p v-if="!editMode">{{ post.description }}</p>
    <textarea v-model="postToEdit.description" v-if="editMode"></textarea>
    <p v-if="post.User">{{ post.User.pseudo }}</p>
    <button
      @click="setEditMode"
      v-if="isAdmin || !post.User || currentUserId == post.User.id"
    >
      Modifier
    </button>
    <button
      @click="update"
      v-if="editMode"
    >
      Valider
    </button>
    <button
      @click="deletePost"
      v-if="isAdmin || !post.User || currentUserId == post.User.id"
    >
      Supprimer
    </button>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: ["post"],
  data() {
    return {
      editMode: false,
      currentUserId: localStorage.getItem("userId"),
      isAdmin: localStorage.getItem("isAdmin") === "true",
      content: "",
      postToEdit: { ...this.post },
    };
  },
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
              "Content-Type": "application/json",
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