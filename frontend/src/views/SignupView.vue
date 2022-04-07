<template>
  <div class="signup">
    <form @submit="onSubmit">
      <div class="form-signup">
        <label for="pseudo">Nom d'utilisateur: </label>
        <input
          v-model="pseudo"
          type="text"
          name="pseudo"
          id="pseudo"
          required
        />
      </div>
      <div class="form-signup">
        <label for="email">Email: </label>
        <input v-model="email" type="email" name="email" id="email" required />
      </div>
      <div class="form-signup">
        <label for="password">Mot de passe: </label>
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          required
        />
      </div>
      <div class="form-signup">
        <input type="submit" value="S'inscrire" />
      </div>
      <div class="form-signup">
        <router-link to="login"
          >Vous avez déjà un compte ? Connectez-vous !</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
//import components ici

export default {
  name: "SignupView",
  data() {
    return {
      pseudo: "",
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.axios
        .post(
          "http://localhost:3000/api/auth/signup",
          {
            pseudo: this.pseudo,
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => this.$router.push("/login"));
    },
  },
};
</script>

<style scoped>
.signup {
  background: lavenderblush;
  display: flex;
  justify-content: center;
}
form {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-signup {
  display: flex;
  flex-direction: column;
}
</style>