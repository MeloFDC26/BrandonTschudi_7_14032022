<template>
  <div class="login">
    <form action="" method="get" class="form-login">
      <div class="form-login">
        <label for="email">Email: </label>
        <input v-model="logEmail" type="email" name="email" id="email" required />
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
        <input @click="userLogin" type="submit" value="Se connecter" />
      </div>
    </form>
  </div>
</template>

<script>
//import components ici

export default {
    name: "LoginView",
    data() {
      return {
        email: "",
        password: "",
        submitted: false
      };
    },
    methods: {
      userLogin() {
        const logEmail = this.logEmail;
        const logPassword = this.logPassword;
        this.submitted = true;
        this.axios.post(
          'http://localhost:3000/api/auth/login',
          {
            email: this.logEmail,
            password: this.logPassword
          }, 
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function(response) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", logEmail);
          localStorage.setItem("password", logPassword);
          localStorage.setItem("isAdmin", response.data.isAdmin);
        })
      }
    }
};
</script>