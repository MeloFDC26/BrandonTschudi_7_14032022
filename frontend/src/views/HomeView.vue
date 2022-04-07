<template>
  <section id="posts">
    <div class="formulaire">
      <h1>Dites quelque chose</h1>
      <form class="form">
        <div class="message">
          <input
            class="input"
            id="title"
            required
            v-model="title"
            type="text"
            placeholder="Titre*"
          />
          <textarea
            v-model="description"
            id="message"
            name="message"
            placeholder="Présentez-vous, dites quelque chose..."
            required
          ></textarea>
          <input
            class="input"
            id="submit"
            type="button"
            @click="createPost"
            value="Poster !"
          />
        </div>
      </form>
    </div>
    <section>
      <PostComponent
        :post="post"
        v-for="post of posts"
        :key="post.id"
      ></PostComponent>
    </section>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    posts: [],
    title: "",
    description: "",
  }),
  // Création d'un post
  created() {
    this.axios
      .get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        this.posts = res.data.posts;
      })
      .catch((error) => {
        console.error(error);
        alert("Une erreur est survenue");
      });
  },
  methods: {
    createPost() {
      if (!this.title) {
        alert("Le titre est obligatoire");
        return;
      }
      this.axios
        .post(
          "http://localhost:3000/api/posts",
          {
            title: this.title,
            description: this.description,
            userId: Number(localStorage.getItem("userId")),
          },
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
template {
  display: flex;
  flex-direction: column !important;
}
section {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.formulaire {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: solid 1px black;
}
#message {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 100%;
  padding: 12px;
  background: white;
  outline: none;
  color: #42b983;
  border: solid 1px #b3aca7;
  transition: all 0.3s ease-in-out;
  border-radius: 15px;
}
input {
  border-radius: 15px;
}
textarea:hover {
  box-shadow: 0px 8px 15px #858282;
  transform: scale(0.95);
}
input:hover {
  background: #46c08993;
  color: #0f0e0e;
  box-shadow: 0px 8px 15px #858282;
  transform: scale(0.95);
}
.form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px black;
}
#title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 100%;
  padding: 12px;
  background: white;
  outline: none;
  color: #42b983;
  border: solid 1px #b3aca7;
  transition: all 0.3s ease-in-out;
}
#submit {
  padding: 25px;
  font-size: 0.875em;
  color: white;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border: solid 1px #b3aca7;
  border-radius: 50px;
  background: red;
  text-align: center;
}
#submit:hover {
  color: #e2dedb;
}
.message {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-direction: column;
  gap: 10px;
}
#posts {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
