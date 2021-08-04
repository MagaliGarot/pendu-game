<template>
     <div class="objectifText">
        <h2>Objectif :</h2>
        <br>
        <br>
        Relever un nouveau challenge comme
        <strong>Web développeuse Junior</strong>.
        <br>
        <br>
        Après une formation à 
        <strong> BeCode Liège </strong>, 
        dans le web développement, 
        j'ai réalisé un stage de trois mois orienté 
        <strong>vue.js</strong> 
        et 
        <strong>accessibilité web</strong>.
        <img aria-hidden="true" alt="" id="button" src="../assets/image/bouton.png">
        <br>
        <br>
        Bachelière en arts plastiques visuels et de l'espace (Saint-Luc Liège) depuis 2010, 
        en tant que graphiste, j'ai réalisé de nombreux supports de tout type pour des ASBL, 
        entreprises et particuliers. Grâce à mon coup de crayon, 
        j'ai été publiée chez plusieurs éditeurs en tant qu'illustratrice ou auteur.
        <br>
        <br>
        <p class="borderText">
            Je suis désormais à la recherche d'un emploi dans le web développement 
            dans lequel m'investir et grandir. 
        </p>
        <img aria-hidden="true" alt="" id="profil" src="../assets/image/magali2.png">
        <br>
        <br>
        <div class="containerButton">
            <a class="link" href="https://magaligarot.github.io/Portfolio/" target="_blank" aria-label="Lien vers mon Portfolio">
                <img aria-hidden="true" alt="" id="teddy" src="@/assets/fontawesome/book-solid.svg">
            </a>
            <a class="link" href="https://www.linkedin.com/in/magali-garot/" target="_blank" aria-label="Lien vers mon Linkedin">
                <img aria-hidden="true" alt="" id="teddy" src="@/assets/fontawesome/linkedin-brands.svg">
            </a>
            <a class="link" href="https://github.com/MagaliGarot" target="_blank"  aria-label="Lien vers mon Github">
                <img aria-hidden="true" alt="" id="teddy" src="@/assets/fontawesome/github-square-brands.svg">
            </a>
        </div>
        <h3>Mentions : </h3>
        <br>
        <br>
        <p class="credit">
        Les illustrations présentes sur ce jeu ont été réalisées par mes petites mains, merci de me contacter pour toute utilisation. 
        <br>
        Les icônes du gamepad, book, linkedin et github proviennent du site :  https://fontawesome.com/.
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .objectifText{
        width: 20rem;
        color: white;
        margin-right: auto;
        margin-left: auto;
        margin-top: 30px;
        font-family: 'Patrick Hand', cursive;
        font-size: 1.2rem;
        line-height: 180%;
        h2, h3{
            font-family: 'Gloria Hallelujah', cursive;
            color: #65b3be;
        }
        #button{
            display: block;
            width: 14rem;
            margin-top: 4rem;
            margin-right: auto;
            margin-left: auto;
            animation-name: buttonTourne;
            animation-duration: 10s;
            @keyframes buttonTourne{
               from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
        }
        #profil{
            width: 20rem;
            margin-top: 4rem;
        }
        .borderText{
            width: 15rem;
            margin-right: auto;
            margin-left: auto;
            border-style: solid none solid none;
            border-color: white;
            border-width: 3px;
            padding: 2rem;
            font-family: 'Gloria Hallelujah', cursive;
            font-size: 1.6rem;
        }
        .containerButton{
            width: 19rem;
            display: flex;
            margin-bottom: 4rem;
            margin-top: 3rem;
            justify-content: space-between;
            margin-right: auto;
            margin-left: auto;
            .link{
                background: rgb(146, 71, 127);
                width: 5rem;
                border-radius: 50px;
                margin: 1px;
                img{
                    display: block;
                    margin: 14px;
                    width: 3rem;
                    border: 90%;
                    border-width: 0px;
                    margin-right: auto;
                    margin-left: auto;
                }
                &:hover{
                        -webkit-box-shadow: 0px 1px 49px 8px rgba(252,143,203,0.73); 
                        box-shadow: 0px 1px 49px 8px rgba(252,143,203,0.73);
                }
                &:focus{
                        outline: none;
                        -webkit-box-shadow: 1px 1px 15px 15px rgba(252,143,203,0.5); 
                        box-shadow: 1px 1px 15px 15px rgba(252,143,203,0.5);
                }
            }
        }
        .credit{
            font-family: 'Patrick Hand', cursive;
            font-size: 1.1rem;
        }
    }

</style>