<template>
    <Header>
    <div class="post">
        <h2>Titre du post</h2>
        <p>Description du post</p>
        <p>Auteur du post</p>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: "Post",
  components: {
      Header
  }
};
</script>

<style lang="scss" scoped>

</style>