<template>
    <div class="containerGame-Over">
        <h1>Vous avez perdu</h1>
        <img aria-hidden="true" id="teddy" src="../assets/image/nounours-game-over.png">
        <button id="play"  @click="pageGame()">Rejouer</button>
    </div>
</template>

<script>
export default{
    methods: {
        pageGame(){
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>

.containerGame-Over{
    width: 20rem;
    margin-right: auto;
    margin-left: auto;
    #teddy{
        display: block;
        width: 20rem;
        margin-right: auto;
        margin-left: auto;
        
        animation-name: fleet;
        animation-duration: 14s;
        animation-iteration-count: infinite;
    }
    #play{
        background-color: #65b3be;
        color: white;
        border: none;
        border-radius: 3rem;
        width: 75px;
        height: 75px;
        font-family: 'Scada', sans-serif;
        font-weight: 800;
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-top: 50px;
        &:hover{
          background-color: #fc8fcb;
        }
        &:focus{
          background-color: #fc8fcb;
          outline: none;
        }
    }
     @keyframes fleet{
        0% {  transform: translateY(0%); }
        25% {  transform: translateY(5%); }
        50%  {  transform: translateY(-5%); }
        75% {  transform: translateY(5%); } 
        100%{  transform: translateY(-5%); }
     }
}
</style>