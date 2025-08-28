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
    mutate() {
      console.log(this._dna);
      let i = 0;
      while (i < this._dna.length) {
        let randomRna = returnRandBase();
        if (randomRna !== this._dna[i]) {
          this._dna[i] = randomRna;
        } else {
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
    }
  }
};

//Compare DNA
const myDna = {_specimenNum: 'specimen#2', _dna: mockUpStrand()};

//All log for testing function
console.log(pAequorFactory('specimen#1', mockUpStrand()).compareDNA(myDna));
console.log(pAequorFactory('specimen#1', mockUpStrand()).mutate());
//console.log(mockUpStrand());



