/************ Building method map() ***************** */
const myNumberArr = [1,2,3,4,5];
const myLetterArr = ["a","b","c","d"];

function mapIt(array,callback){
    let newArr = [];
    for(let i = 0; i< array.length; i ++){
        newArr.push(callback(array[i],i,array));
    }
    return newArr;
}

const toInsert = (value,index,theArray) => value * 2;

console.log(mapIt(myNumberArr, toInsert));

/********** Exercises ******************/

// Create a new array with the numbers doubled
const numbers = [13, 42, 1337];


const doubled = numbers.map(number => number * 2);

console.log(doubled);

/***************************/
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  // create a new array with the first 3 letters of each day

// const abreviated = days.map(function(day){
//     return day.slice(0,3);
// });

const abreviated = days.map(day => day.slice(0,3));

console.log(abreviated);

/***************************/

const people = [{
    first_name: 'CJ',
    last_name: 'R.'
  }, {
    first_name: 'Brendan',
    last_name: 'Eich'
  }, {
    first_name: 'Kyle',
    last_name: 'Simpson'
  }, {
    first_name: 'Douglas',
    last_name: 'Crockford'
  }];
  // Create a new array with the string full name of each person

  const fullName = people.map(function(person){
    // fName = person.first_name;
    // sName = person.last_name;
    // let fullStr = fName.concat(' ', sName);  
    // return fullStr;
    return `${person.first_name} ${person.last_name}`;
  });

  console.log(fullName);

/*****************************/
const animals = [{
    'name': 'cat',
    'size': 'small'
    }, {
    'name': 'dog',
    'size': 'small'
    }, {
    'name': 'lion',
    'size': 'medium'
    }, {
    'name': 'elephant',
    'size': 'big'   
    }];

// Create a new array with just the names of the animals

const justNames = animals.map(animal=> animal.name);

console.log(justNames);

/****************************/

const theNumbers = [4, 8, 15, 16, 23, 42];
// create a new array of objects with the properties value and index
const objectNumb = theNumbers.map((number,index)=>{
    // let newObject = {};
    // newObject.value = number;
    // newObject.index = index;
    // return newObject;
    return {number, index} ;

    
});

console.log(objectNumb);

/***************************/
const starter = [2, 5, 10];
// Create a new array with each value multiplied by the next value
// The last value should be multiplied by the first value
// e.g. [2*5, 5*10, 10*2] == [10, 50, 20]
const multiArr = starter.map((number,index,array)=>{
    let nextIndex = index + 1;
    if(index == array.length - 1) nextIndex = 0; 
    return number * array[nextIndex];
});
console.log(multiArr);