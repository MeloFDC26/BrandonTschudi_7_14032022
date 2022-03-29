<template>
  <div class="signup">
    <form action="" method="get" class="form-signup">
      <div class="form-signup">
        <label for="name">Nom d'utilisateur: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div class="form-signup">
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="form-signup">
        <label for="password">Mot de passe: </label>
        <input type="password" name="password" id="password" required />
      </div>
      <div class="form-signup">
        <input type="submit" value="S'inscrire" />
      </div>
    </form>
  </div>
</template>

<script>
//import components ici

export default {
    
}
</script>