
/******** Building method indexOf() **********/

const myNumberArr = [1,2,3,4,5];
const myLetterArr = ["a","b","c","d"];

function indexOF(array,element){
    for(let i = 0; i< array.length; i ++){
       if(array[i] === element) return i;

    }
    return -1;
}

console.log(indexOF(myLetterArr, 1));