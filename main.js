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
    _specimenNum: specimenNum,
    _dna: dna,
    //method for change all of the RNA in the DNA
    mutate() {
      let i = 0;
      while (i < this._dna.length) {
        let randomRna = returnRandBase();
        if (randomRna !== this._dna[i]) {
          //Check for the random RNA is different or not, if it different, replace with the current.
          this._dna[i] = randomRna;
        } else {
          //IF it still the same, just loop again by decrease the iteration before it increase.
          i--;
        }
        i++;
      }
      return this._dna;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < pAequor['_dna'].length; i++) {        
        if (pAequor['_dna'][i] === this._dna[i]) {
          count++;
        }
      }
      let percentage = Math.floor((count / pAequor['_dna'].length) * 100);
      return `${this._specimenNum}: [${this._dna}]\n${pAequor['_specimenNum']}: [${pAequor['_dna']}]\nComparison result: ${percentage}% DNA in common.`;
    },
    willLikelySurvive() {
      let countC = 0;
      let countG = 0;
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === 'C') {
          countC++;
        } else if (this._dna[i] === 'G') {
          countG++;
        }
      }
      if (Math.floor((countC / this._dna.length) * 100) >= 60 || Math.floor((countG / this._dna.length) * 100) >= 60) {
        return true;
      } else {
        return false;
      }
    }
  }
};

//Random P.aquor's DNA of 30 instances which all can survive in their natural
const randomSurviveDna = () => {
  let nestedOfDna = [];
  for (let i = 0; i < 30; i++) {
    while (true) {
      let arrayOfDna = mockUpStrand();
      let countC = 0;
      let countG = 0;
      //Loop for check the DNA base which can survive 
      for (let k = 0; k < arrayOfDna.length; k++) {
        if (arrayOfDna[k] === 'C') {
          countC++;
        } else if (arrayOfDna[k] === 'G') {
          countG++;
        }
      }
      if (Math.floor((countC / arrayOfDna.length) * 100) >= 60 || Math.floor((countG / arrayOfDna.length) * 100) >= 60) {
        nestedOfDna.push(arrayOfDna);
        break;
      }
    }
  }
  return nestedOfDna;
};


//Sample of Compare DNA
const myDna = {_specimenNum: 'specimen#2', _dna: mockUpStrand()};
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
//console.log(randomSurviveDna());


