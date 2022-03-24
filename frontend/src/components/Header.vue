<template>
    <div class="header">
        <img src="..\assets\logos\icon-above-font.png" alt="Logo Groupomania">
        <router-link to="/">
            <button class="logout_btn">Se déconnecter</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Header'

}
</script>

<style lang="scss" scoped>

</style>