<template>
    <div class="containerNav">
        <button class="containerButtonImg" @click="reload()">
            <img aria-hidden="true" alt="" id="button" src="../assets/image/bouton.png">
        </button>
        <NuxtLink class="navBar" to="/">Jeu du pendu</NuxtLink>
        <NuxtLink class="navBar" to="/apropos">A propos</NuxtLink>
    </div>
</template>

<script>
export default{
    methods: {
        reload(){

            if($nuxt.$route.path == '/') {
                document.location.reload();
            }
            else{
                this.$router.push({ path: '/'} );
            }
        }
    }
}
</script>