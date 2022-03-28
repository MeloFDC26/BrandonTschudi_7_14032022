<template>
  <div class="login">
    <form action="" method="get" class="form-login">
      <div class="form-login">
        <label for="name">Nom d'utilisateur: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div class="form-login">
        <label for="email">Mot de passe: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="form-login">
        <input type="submit" value="Se connecter" />
      </div>
    </form>
  </div>
</template>

<script>
//import components ici

export default {
    
};
</script>