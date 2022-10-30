// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.
function inArray(array1,array2){
    let array = [];
      for(let i = 0; i < array1.length; i++){
          for(let j = 0; j < array2.length; j++){
          if(array2[j].includes(array1[i])){
              array.push(array1[i])
          }
          }
      }
      let newArray = [];
      for(let i = 0; i < array.length; i++){
          if(!newArray.includes(array[i])){
          newArray.push(array[i])
          }
      }
      return newArray.sort();
       }


       // function inArray(array1,array2){
//   return array1
//   .filter(a1 => array2.find(a2 => a2.match(a1)))
//   .sort()
// }


//function inArray(a1,a2){
//     return a1.filter( sub => a2.some( whole => whole.includes(sub))).sort();
// }


//function inArray(array1,array2){
//     return array1.filter( e => array2.join(' ').includes(e) ).sort();
// }




