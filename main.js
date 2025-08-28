// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//P.aequor generator
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    //method for change all of the RNA in the DNA
    mutate() {
      let i = 0;
      while (i < this.dna.length) {
        let randomRna = returnRandBase();
        if (randomRna !== this.dna[i]) {
          //Check for the random RNA is different or not, if it different, replace with the current.
          this.dna[i] = randomRna;
        } else {
          //IF it still the same, just loop again by decrease the iteration before it increase.
          i--;
        }
        i++;
      }
      return this.dna;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < pAequor['dna'].length; i++) {        
        if (pAequor['dna'][i] === this.dna[i]) {
          count++;
        }
      }
      let percentage = Math.floor((count / pAequor['dna'].length) * 100);
      return `${this.specimenNum}: [${this.dna}]\n${pAequor['specimenNum']}: [${pAequor['dna']}]\nComparison result: ${percentage}% DNA in common.`;
    },
    willLikelySurvive() {
      let countC = 0;
      let countG = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C') {
          countC++;
        } else if (this.dna[i] === 'G') {
          countG++;
        }
      }
      if (Math.floor((countC / this.dna.length) * 100) >= 60 || Math.floor((countG / this.dna.length) * 100) >= 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      let dnaStrand = [];
      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A': dnaStrand[i] = 'T'; break;
          case 'T': dnaStrand[i] = 'A'; break;
          case 'C': dnaStrand[i] = 'G'; break;
          case 'G': dnaStrand[i] = 'C'; break;
          default: break;
        }
      }
      return dnaStrand;
    }
  }
};

//Random P.aquor's DNA of 30 instances which all can survive in their natural
const randomSurviveDna = () => {
  let nestedOfDna = [];
  for (let i = 0; i < 30; i++) {
    let arrayOfDna = pAequorFactory(`specimen#${[i]}`, mockUpStrand());
    if (arrayOfDna.willLikelySurvive()) {
      nestedOfDna.push(arrayOfDna.dna);
    } else {
      i--;
    }
    /*while (true) {
      //let arrayOfDna = mockUpStrand();
      let countC = 0;
      let countG = 0;
      //Loop for check the DNA base which can survive 
      for (let j = 0; j < arrayOfDna.length; j++) {
        if (arrayOfDna[j] === 'C') {
          countC++;
        } else if (arrayOfDna[j] === 'G') {
          countG++;
        }
      }
      if (Math.floor((countC / arrayOfDna.length) * 100) >= 60 || Math.floor((countG / arrayOfDna.length) * 100) >= 60) {
        nestedOfDna.push(arrayOfDna);
        break;
      }
    }*/
  }
  return nestedOfDna;
};


//Sample of Compare DNA
const myDna = {specimenNum: 'specimen#2', dna: mockUpStrand()};
//DNA input
const pAquorInput = mockUpStrand();


//All log for testing function
//console.log(pAquorInput);
//console.log(returnRandBase());
//console.log(mockUpStrand());
//console.log(pAequorFactory('specimen#1', pAquorInput));
//console.log(pAequorFactory('specimen#1', pAquorInput).mutate());
//console.log(pAequorFactory('specimen#1', pAquorInput).compareDNA(myDna));
//console.log(pAequorFactory('specimen#1', pAquorInput).willLikelySurvive());
console.log(randomSurviveDna());
//console.log(pAequorFactory('specimen#1', pAquorInput).complementStrand());


