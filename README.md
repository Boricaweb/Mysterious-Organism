
# Mysterious Organism

This project is one of the challenge project of the Full-Stack Engineer (Javascript part) in www.codecademy.com. 
The topic is about writing the function in Javascript langauge to implement and control the data that is a random of the P.aequorthe, which is a new specie under the ocean and has 15 strand of DNA-base.


## Lessons Learned

**1. DNA-base**

**2. Javascript:** 
* Function 
* Conditional statement
* Loop
* Array method
* Object


## Tech Stack

**Back-end:** Javascript (Node.js)


## Environment Variables

To run this project, you will need to install Node.js in your computer


## Function Explanation

* Functon returnRandBase:
  * To return the random single strand of DNA-base and sent to the function mockUpStrand
* Function mockUpStrand:
  * To generate the random 15 strand of DNA-base of P.aequor
* Factory Function pAequorFactory:
  * To implement and control the random .aequor's DNA
  * Factory function's method:
    1. Method mutate():
      * Mutate the random P.aequor's DNA that put to the factory function
    2. Method compareDNA(pAequor):
      * Compare the 2 differences of P.aequor's DNA and return string that inform the percentage of difference of 2 DNA-base
    3. Method willLikelySurvive():
      * To screen which DNA can survive the environment or can not
    4. Method complementStrand():
      * To generate the complement strand of P.aequor's DNA-base
* Function randomSurviveDna:
  * To generate the random of 30 P.aequor's DNA which can survive in the environment


## Running Test

To test this project, after copy and paste the code to your text editor.

You can use the following functions to random the DNA-base or create by your own, it up to you!
* Function mockUpStrand and function returnRandBase:
  * To generate the random 15 strand of DNA-base of P.aequor
* Function randomSurviveDna:
  * To generate the random of 30 P.aequor's DNA which can survive in the environment


Next uncomment the following log to test each functions(read the function explanation above)
```bash
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
```

then run the following command on the terminal to see the result
```bash
  node main.js
```


## Acknowledgements

 - [Javascript object from Mozilla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics)
 - [Javascript object method from W3schools](https://www.w3schools.com/js/js_objects.asp)


## 🚀 About Me
I'm studying and learning to be a full stack developer.
