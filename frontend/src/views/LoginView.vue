<template>
  <section>
    <NavComponent></NavComponent>
    <div class="login">
      <form @submit="userLogin">
        <div class="form-login">
          <label for="email">Email: </label>
          <input
            v-model="logEmail"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="form-login">
          <label for="password">Mot de passe: </label>
          <input
            v-model="logPassword"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <div class="form-login">
          <input type="submit" value="Se connecter" />
        </div>
        <div class="form-login">
          <router-link to="/signup"
            >Vous n'avez pas de compte ? Créez en un !</router-link
          >
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  //Login utilisateur
  created: () => {
    localStorage.clear();
  },
  methods: {
    userLogin(e) {
      e.preventDefault();
      this.axios
        .post(
          "http://localhost:3000/api/auth/login",
          {
            email: this.logEmail,
            password: this.logPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        //Initialisation et paramètrage du localStorage
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", this.logEmail);
          localStorage.setItem("isAdmin", response.data.isAdmin);
          localStorage.setItem("userId", response.data.userId);
          this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped>
.login {
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
.form-login {
  display: flex;
  flex-direction: column;
}
</style>