<template>
  <div class="login">
    <form action="" method="get" class="form-login">
      <div class="form-login">
        <label for="email">Email: </label>
        <input v-model="email" type="email" name="email" id="email" required />
      </div>
      <div class="form-login">
        <label for="password">Mot de passe: </label>
        <input v-model="password" type="password" name="password" id="password" required />
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
        password: ""
      };
    },
    methods: {
      userLogin() {
        this.axios.post(
          'http://localhost:3000/api/auth/login',
          {
            email: this.email,
            password: this.password
          }, 
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
      }
    }
};
</script>