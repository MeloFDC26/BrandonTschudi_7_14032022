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
    <button @click="update" v-if="editMode">Valider</button>
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
    //Suppression d'un post
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
    // Modification d'un post
    update() {
      this.axios
        .put(
          "http://localhost:3000/api/posts/" + this.post.id,
          { title: this.postToEdit.title, description: this.postToEdit.description },
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
.post {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: lightgray;
  margin-top: 10px;
  min-width: 220px;
  border: solid 1px black;
  padding: 5px;
  border-radius: 15px;
}
button {
  border-radius: 15px;
  margin: 3px;
  padding: 2px;
}

button:hover {
  box-shadow: 0px 8px 15px #858282;
  transform: scale(0.95);
  cursor: pointer;
}
</style>