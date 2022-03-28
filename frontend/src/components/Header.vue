<template>
  <div class="header">
    <img src="..\assets\logos\icon-above-font.png" alt="Logo Groupomania" />
    <router-link to="/">
      <button class="logout_btn">Se déconnecter</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  max-height: 100px;
  justify-content: space-between;
  align-items: center;
}

img {
  max-width: 100px;
  max-height: 100px;
}
</style>