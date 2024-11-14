let pronoun = [ "the ", "our " ];
let adjective = [ "best ", "awsome " ];
let noun = [ "world", "house" ];

const createTheBestCode = (pronounList, adjectiveList, nounList) => {
  let state = [];
  pronounList.forEach( (firstWord) => {
    const mixedCombinations = adjectiveList.map( (secondWord) => {
      const mixedCombinations2 = nounList.map( (thirdWord) => {
        return `${firstWord}${secondWord}${thirdWord}`} );
      state = [...state, ...mixedCombinations2];
      })
  })
  console.log(state);
}

createTheBestCode(pronoun, adjective, noun);

