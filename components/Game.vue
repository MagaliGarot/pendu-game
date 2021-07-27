<template>
  <div>
    <h1> Jeu du pendu </h1>
    <div>
      <button 
        v-if="selectWord.length == 0" 
        @click="displayWord()"
        >
        Jouer
      </button>
      <div> 
        <p>{{ selectWord }}</p>
        <div v-if="selectWord.length" id="target">
          <button v-for="(item, index) in alphabet" :key="index" @click="validateLetter(item) in alphabet">
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
       /*  console.log(this.listes[random].length)
        console.log(this.listes[random]) */
      },

      
      validateLetter(alphabet){ 
        let counter = 0;
        this.letterButton.push({
          letter : alphabet.letter
        })

        if(this.splitLetter.length > 0){
          let letterButtonclick = this.letterButton.map(el => el.letter);
          let searchLetter = this.splitLetter[0].indexOf(letterButtonclick[0])

           if(searchLetter > 0) {
            console.log('Element trouvé');
          } 
          else{
            console.log('pas trouvé');
            counter ++;
            console.log(counter);
          }
        }


       /*  for(let j = 0; j < this.splitLetter.length; j++) {
          const letterButtonclick = this.letterButton.map(el => el.letter);

          console.log('letterButton sans le click', this.letterButton)
          console.log('letterButtonclick', letterButtonclick)
          console.log('splitLetter array + J', this.splitLetter[j])
    
          if(letterButtonclick[0] === this.splitLetter[j]) {
            console.log('Element trouvé');
          } 
          else{
            console.log('pas trouvé');
            counter ++;
            console.log(counter);
          }
        } */
          this.letterButton = [];
      },
    },
}
</script>


