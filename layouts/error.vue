<template>
     <div class="containerError">
        <h1 class="textError" v-if="error.statusCode === 404"> 404 </h1>
        <h1 class="textError" v-else>An error occurred - {{ error.statusCode }}</h1>
        <p class="textErrorTwo">Ouuupsss,
            <br>
            page non trouvée, c'est embêtant !
        </p>
        <img aria-hidden="true" alt="" id="teddy" src="@/assets/image/nounours-game-over.png">
        <button id="play" @click="pageGame()">Jouer</button>
    </div>
</template>

<script>
export default {
    name: 'Notfound',
    props: ['error'],
    layout: 'error', // you can set a custom layout for the error page
    methods: {
        pageGame(){
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>

.containerError{
    width: 20rem;
    margin-right: auto;
    margin-left: auto;
   .textError{
        font-size: 5rem;
        font-family: 'Patrick Hand', cursive;
        animation-name: textAnimate;
        animation-duration: 14s;
        animation-iteration-count: infinite;
        text-shadow: 1px 12px 15px rgba(101,179,190,0.47);
   }
   .textErrorTwo{
        font-size: 1.6rem;
        font-family: 'Gloria Hallelujah', cursive;
   }
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
        font-family: 'Patrick Hand', cursive;
        font-size: 1.8rem;
        font-weight: 800;
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-top: 30px;
        margin-bottom: 30px;
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
     @keyframes fleet{
        0% {  
            transform: translateY(0%); 
            opacity: 100%;
        }
        25% {  
            transform: translateY(4%); 
            opacity: 60%;
        }
        50%  { 
            transform: translateY(-4%);
            transform: translateX(-1%);
        }
        75% { 
            transform: translateY(4%);
            opacity: 60%; 
        } 
        100%{ 
            transform: translateY(-4%);
            opacity: 90%; 
        }
     }
     @keyframes textAnimate{
            0% {
            transform: skewX(-5deg);
      }
      5% {
        transform: skewX(5deg);
      }
      10% {
        transform: skewX(-5deg);
      }
      15% {
        transform: skewX(5deg);
      }
      20% {
        transform: skewX(3deg);
      }
      100% {
        transform: skewX(-3deg);
      }
     }
}
</style>