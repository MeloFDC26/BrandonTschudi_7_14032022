<template>
  <div class="signup">
    <form action="" method="get" class="form-signup">
      <div class="form-signup">
        <label for="pseudo">Nom d'utilisateur: </label>
        <input v-model="pseudo" type="text" name="pseudo" id="pseudo" required />
      </div>
      <div class="form-signup">
        <label for="email">Email: </label>
        <input v-model="email" type="email" name="email" id="email" required />
      </div>
      <div class="form-signup">
        <label for="password">Mot de passe: </label>
        <input v-model="password" type="password" name="password" id="password" required />
      </div>
      <div class="form-signup">
        <input @click="onSubmit" type="submit" value="S'inscrire" />
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
        password: ""
      };
    },
    methods: {
      onSubmit() {
        this.axios.post(
          'http://localhost:3000/api/auth/signup',
          {
            pseudo: this.pseudo,
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
}
</script>