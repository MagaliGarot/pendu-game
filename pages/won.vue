<template>
    <div class="containerGame-Over">
        <h1>Vous avez gagné</h1>
        <p class="congrat">Félicitations</p>
        <img aria-hidden="true" id="teddy" :src="pictureHover"  @mouseover="hover = true" @mouseleave="hover = false">
        <button id="play"  @click="pageGame()">Rejouer</button>
        <div class="containerHeart">
            <img aria-hidden="true" id="heart" src="../assets/image/coeur-2.png">
            <img aria-hidden="true" id="heart2" src="../assets/image/coeur-2.png">
            <img aria-hidden="true" id="heart3" src="../assets/image/coeur-2.png">
        </div>
    </div>
</template>

<script>
export default{
    name: 'won',
     data () {
        return {
            teddyOne : require("../assets/image/nounours-smile.png"),
            teddyTwo : require("../assets/image/nounour-entier.png"),
            hover: false,
        }
    },
    computed: {
        pictureHover () {
        if (this.hover == true) {
            return this.teddyTwo
        } else {
            return this.teddyOne
        }
        }
    },
    methods: {
        pageGame(){
            this.$router.push('/');
        }
    }
   
}
</script>

<style lang="scss" scoped>

/*-----------@Mixin-----------*/
@mixin heart{
    display: block;
    width: 5rem;
    margin-right: auto;
    margin-left: auto;
    animation-name: heartAnim;
    animation-duration: 5s;
    opacity: 0%;
}

.containerGame-Over{
    width: 20rem;
    height: 20rem;
    margin-right: auto;
    margin-left: auto;
    .congrat{
        widows: 4rem;
        font-size: 2rem;
        font-family: 'Scada', sans-serif;
        padding-bottom: 3rem;
        padding-top: 2rem;
        animation-name: congrat;
        animation-duration: 10s;
        animation-iteration-count: infinite;
        @keyframes congrat{
        0% {  color: #22666e; }
        50%  {  color: #fc8fcb; }
        100%{   color: #22666e;}
        }
    }
    #teddy{
        display: block;
        width: 20rem;
        margin-right: auto;
        margin-left: auto;
        
        animation-name: fleet;
        animation-duration: 10s;
        animation-iteration-count: infinite;
        @keyframes fleet{
        0% {  transform: translateX(0%); }
        25% {  transform: translateX(0.5%); }
        50%  {  transform: translateX(-0.5%); }
        75% {  transform: translateX(0.5%); } 
        100%{  transform: translateX(-0.5%); }
     }
    }
    #play{
        background-color: #65b3be;
        color: white;
        border: none;
        border-radius: 3rem;
        width: 75px;
        height: 75px;
        font-family: 'Scada', sans-serif;
        font-size: 1.2rem;
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
    .containerHeart{
        display: flex;
        #heart{
            @include heart;
            animation-delay: 1.5s;

        }
        #heart2{
            @include heart;
            animation-delay: 1s;

        }
        #heart3{
            @include heart;
            animation-delay: 2s;
        }
        @keyframes heartAnim{
            0% {  
                transform: translateY(200px); 
                opacity: 80%;
            }
            100%{  
                transform: translateY(-850px); 
                opacity: 80%;
            }
        }
    }
}
</style>