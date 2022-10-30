// Your task is to make a function that can take any non-negative integer as an argument and return it
//  with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321




function sortNumber(n){
    let toString = n.toString();
    let array = [];
    for(let i = 0; i < toString.length; i++){
        array.push(parseInt(toString[i]));
    }
    array.sort((a, b) => b - a);
    let join = array.join('');
    return Number(join)
    
}

console.log(sortNumber(1021))
