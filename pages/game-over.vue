<template>
    <div class="containerGame-Over">
        <h1 class="textGameOver">Vous avez perdu</h1>
        <img aria-hidden="true" alt="" id="teddy" src="../assets/image/nounours-game-over.png">
        <button id="play" @click="pageGame()">Rejouer</button>
        <p class="textOver">Sauverez-vous le nounours?</p>
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
   .textGameOver{
        animation-name: textAnimate;
        animation-duration: 14s;
        animation-iteration-count: infinite;
           text-shadow: 1px 12px 15px rgba(101,179,190,0.47);
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
        font-size: 1.4rem;
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
          -webkit-box-shadow: 1px 1px 15px 15px rgba(252,143,203,0.5); 
          box-shadow: 1px 1px 15px 15px rgba(252,143,203,0.5);
          outline: none;
        }
    }
    .textOver{
        margin-top: 3rem;
        font-size: 1.2rem;
        font-family: 'Gloria Hallelujah', cursive;
    }
     @keyframes fleet{
        0% {  
            transform: translateY(0%); 
            opacity: 100%;
        }
        25% {  
            transform: translateY(5%); 
            opacity: 60%;
        }
        50%  { 
            transform: translateY(-5%);
            transform: translateX(-1%);
        }
        75% { 
            transform: translateY(5%);
            opacity: 60%; 
        } 
        100%{ 
            transform: translateY(-5%);
            opacity: 90%; 
        }
     }
     @keyframes textAnimate{
        0% {  
            transform: translateX(0%); 
            opacity: 100%;
        }
        25% {  
            transform: translateX(1%); 
            opacity: 60%;
             font-size: 2.3rem;
        }
        50%  { 
            transform: translateX(-1%);
            opacity: 100%;
        }
        75% { 
            transform: translateX(1%);
            opacity: 90%; 
        } 
        100%{ 
            transform: translateX(-1%);
            opacity: 100%; 
        }
     }
}
</style>