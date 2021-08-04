<template>
    <div class="containerGame-Over">
        <h1>Vous avez gagné</h1>
        <p class="congrat">
            Félicitations, le nounours est hyper content ...
        </p>
        <img aria-hidden="true" alt="" id="teddy" :src="pictureHover"  @mouseover="hover = true" @mouseleave="hover = false">
        <p class="textWon">
            Faudrait pas l'habituer !
        </p>
        <button id="play"  @click="pageGame()">Rejouer</button>
        <div class="containerHeart">
            <img aria-hidden="true" alt="" id="heart" src="../assets/image/coeur-2.png">
            <img aria-hidden="true" alt="" id="heart2" src="../assets/image/coeur-2.png">
            <img aria-hidden="true" alt="" id="heart3" src="../assets/image/coeur-2.png">
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
        font-size: 1.8rem;
        font-family: 'Patrick Hand', cursive;
        padding-bottom: 2rem;
        padding-top: 1rem;
        animation-name: congrat;
        animation-duration: 10s;
        animation-iteration-count: infinite;
        @keyframes congrat{
        0% {  color: #22666e; }
        50%  {  color: #65b3be; }
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
    .textWon{
        font-size: 1.4rem;
        font-family: 'Patrick Hand', cursive;
    }
    #play{
        background-color: #65b3be;
        color: white;
        border: none;
        border-radius: 3rem;
        width: 75px;
        height: 75px;
        font-size: 1.4rem;
        font-family: 'Patrick Hand', cursive;
        font-weight: 800;
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-top: 50px;
        &:hover{
          background-color: #fc8fcb;
          -webkit-box-shadow: 1px 1px 15px 15px rgba(252,143,203,0.5); 
          box-shadow: 1px 1px 15px 15px rgba(252,143,203,0.5);
        }
        &:focus{
          background-color: #fc8fcb;
          outline: none;
          -webkit-box-shadow: 1px 1px 15px 15px rgba(252,143,203,0.5); 
          box-shadow: 1px 1px 15px 15px rgba(252,143,203,0.5);
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