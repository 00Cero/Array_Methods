/******** Building method forEach() **********/

const myNumberArr = [1,2,3,4,5];
const myLetterArr = ["a","b","c","d"];

function forEACH(array,callback){
    for(let i = 0; i< array.length; i ++){
        callback(array[i],i,array);
    }
}

const toInsert = (value,index,theArray) => console.log(value,index,theArray);

forEACH(myLetterArr, toInsert);