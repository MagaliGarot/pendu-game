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
      </button>
      <img aria-hidden="true" id="teddy" src="../assets/image/nounour-entier.png">
      <div> 
        <p>{{ splitLetter }}</p>
        <p id="letterFind"></p>
        <div v-if="selectWord.length" id="containerButton">
          <button :aria-label="item.letter" :id="item.letter" class="buttonAlphabet" v-for="(item, index) in alphabet" :key="index" @click="validateLetter(item) in alphabet">
            {{ item.letter }}
          </button>
        </div>
      </div>
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
              'vêtement',
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

            letterButton : [],

            correct:[],
            notCorrect:[],
        }
    },

    methods: {
      displayWord(){
        const random = Math.floor(Math.random() * this.listes.length);
        this.selectWord.push(this.listes[random]);

        let word = this.selectWord[0];
        const letters = word.split('');
        this.splitLetter.push(letters);
      },

      
      validateLetter(alphabet){ 
        let counter = 0;
        this.letterButton.push({
          letter : alphabet.letter
        })

        if(this.splitLetter.length > 0){
          let letterButtonclick = this.letterButton.map(el => el.letter);

          console.log('indexOf : ', this.splitLetter[0].indexOf(letterButtonclick[0]));
          let searchLetter = this.splitLetter[0].indexOf(letterButtonclick[0])

           if(searchLetter > -1) {
            console.log('Element trouvé');
          } 
          else{
            console.log('pas trouvé');
            counter ++;
            console.log(counter);
          }
        }
          this.letterButton = [];
      },
    },
}
</script>


