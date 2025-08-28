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
      let i = 0;
      while (i < this._dna.length) {
        if (returnRandBase() !== this._dna[i]) {
          this._dna[i] = returnRandBase();
        }
        i++;
      }
      return this._dna;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < pAequor['dna'].length; i++) {        
        if (pAequor['dna'][i] === this._dna[i]) {
          count++;
        }
      }
      let percentage = (count / pAequor['dna'].length) * 100;
      return `${this._specimenNum} and ${pAequor['specimenNum']} have ${percentage}% DNA in common.`;
    }
  }
};

//console.log(pAequorFactory(specimenNum, mockUpStrand()))
//console.log(mockUpStrand());



