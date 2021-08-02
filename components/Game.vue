<template>
  <div id="containerMain">
    <h1> Jeu du pendu </h1>
    <div>
      <button 
        aria-label="Lancer la partie"
        id="play"
        v-if="selectWord.length == 0" 
        @click="displayWord()"
        >
        <img aria-hidden="true" class="icon" src="../assets/image/gamepad-solid.svg">
        Jouer
      </button>
      <img v-if="this.counterFalse.length == 0" aria-hidden="true" id="teddy" src="../assets/image/nounour-entier.png">
      <img v-if="this.counterFalse.length == 1" aria-hidden="true" id="teddy" src="../assets/image/nounours-1life.png">
      <img v-if="this.counterFalse.length == 2" aria-hidden="true" id="teddy" src="../assets/image/nounours-2life.png">
      <img v-if="this.counterFalse.length == 3" aria-hidden="true" id="teddy" src="../assets/image/nounours-3life.png">
      <img v-if="this.counterFalse.length == 4" aria-hidden="true" id="teddy" src="../assets/image/nounours-4life.png">
      <img v-if="this.counterFalse.length == 5" aria-hidden="true" id="teddy" src="../assets/image/nounours-5life.png">
      <button v-if="this.numberLetter.length == this.letterWon.length" @click="refreshTrue()">
        Rejouer
      </button>
      <div> 

        <div id="letterFind">
            <span :id="item+index" v-for="(item, index) in splitLetter[0]" :key="index">
                {{ item }}
            </span>
            <br>
            <p v-for="(index) in splitLetter[0]" :key="'line'+index"></p>
        </div>

        <div v-if="selectWord.length" id="containerButton">
          <button :aria-label="item.letter" :id="'push' + item.letter" class="buttonAlphabet" v-for="(item, index) in alphabet" :key="index" @click="validateLetter(item) in alphabet">
            {{ item.letter }}
          </button>
        </div>
      </div>
    <!--   A supprimer -->
      <p>{{ splitLetter }}</p>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Game',
  data: () => {
        return {
             listes: [
              'chat',
              'chien',
              'hamburger',
              'tapis',
              'plante',
              'hamster',
              'pyjama',
              'magique',
              'patate',
              'mario',
              'pikachu',
            ],
             alphabet: [
               { letter: 'a' },{ letter: 'b' },{ letter: 'c' },{ letter: 'd' },{ letter: 'e' },{ letter: 'f' },{ letter: 'g' },
               { letter: 'h' },{ letter: 'i' },{ letter: 'j' },{ letter: 'k' },{ letter: 'l' },{ letter: 'm' },{ letter: 'n' },
               { letter: 'o' },{ letter: 'p' },{ letter: 'q' },{ letter: 'r' },{ letter: 's' },{ letter: 't' },{ letter: 'u' },
               { letter: 'v' },{ letter: 'w' },{ letter: 'x' },{ letter: 'y' },{ letter: 'z' },
            ],
            selectWord : [],
            splitLetter : [],
            numberLetter: [],
            letterButton : [],
            counterFalse : [],
            letterWon: [],
        }
    },

    methods: {
      displayWord(){
        const random = Math.floor(Math.random() * this.listes.length);
        this.selectWord.push(this.listes[random]);

        let word = this.selectWord[0];
        const letters = word.split('');
        this.splitLetter.push(letters);

        for(let i = 0; i < letters.length; i++){ 
          this.numberLetter.push(i);
        }
        console.log('this.numberLetter', this.numberLetter)
        },

      validateLetter(alphabet){ 
        this.letterButton.push({
          letter : alphabet.letter
        })
        if(this.splitLetter.length > 0){
          //cherche la lettre cliquée
          let letterButtonclick = this.letterButton.map(el => el.letter);
          //cherche si des lettres correspondent à ce qui a été cliqué
          let checkLetter = this.splitLetter[0].filter((item, index) => {
            return item == letterButtonclick[0];
          });

          console.log('checkLetter : ', checkLetter)
          console.log('letterButtonclick[0] : ', letterButtonclick[0])

          let counter = 0;

          if(checkLetter.length > 0){
            console.log('lettre trouvée')
            console.log('avant la boucle for this.numberLetter.length', this.numberLetter.length)
            for(let i = 0; i < this.numberLetter.length; i++){
              let myId =  document.getElementById(letterButtonclick[0]+`${i}`)
              if(myId === null){
                console.log('id inexistant')
              }else{
                document.getElementById(letterButtonclick[0]+`${i}`).style.cssText = "opacity: 100%;";
              }
            }
            document.getElementById('push'+letterButtonclick[0]).style.cssText = "background-color: #50ef8d;";  
            this.letterWon.push(checkLetter);
            console.log('letterWon', this.letterWon.length);
          }
          else{
            console.log('lettre non trouvée')
            document.getElementById('push'+letterButtonclick[0]).style.cssText = "background-color: #ed220a;"; 
            let counterResult = counter ++;
            //counter == 5 -> Game Over
            this.counterFalse.push(counterResult);
            console.log('counterResult :', counterResult)
            console.log('counterFalse :', this.counterFalse)
          } 
          if(this.counterFalse.length >= 5){
             let self = this;

               setTimeout(function(){ 
                  self.$router.push('/game-over');
                }, 1000);
          }
          if(this.numberLetter.length == this.letterWon.length){
            alert('gagné')
          }
        }
        this.letterButton = [];
      },
    },
}
</script>


