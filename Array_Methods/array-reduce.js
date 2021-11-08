// Create a number that is the sum of all the numbers in the array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((sum,number)=>{
    return sum += number;
},0);

console.log(sum);

// Create an object with the fruit as a key and the number of occurences of that fruit as a value
const fruits = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

const fruitsObj = fruits.reduce((acumulator,value,index,array)=>{

  if (!acumulator[value]) acumulator[value] = 1
  acumulator[value]++;
  return acumulator;
},{});

console.log(fruitsObj);

// Create a number that is the average price of all the prices in the array
// HINT: you will need to check the index to determine if you should return the sum or the average
const prices = [29.76, 41.85, 46.5];
const easyPrices = [2,4,4];

const averagePrice = easyPrices.reduce((acumulator,value,index,array)=>{
    let newvalue = acumulator + value / array.length;
    return newvalue; 
},0);

console.log(averagePrice);

// create a new array with the first 3 letters of each day
//better done with map();
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const startDays = days.reduce((acumulator,value)=>{
    acumulator.push(value.slice(0,3));
    return acumulator;
},[]);

console.log(startDays);

// create a new array with only the words with a length longer than 6
//better done with map()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const maxWords = words.reduce((acumulator,value)=>{
    // if(value.length > 6) acumulator.push(value);
    value.length > 6 ? acumulator.push(value): "";  
    return acumulator;
},[]);

console.log(maxWords);

// Create an object where the keys are the id and the values are the people
const people = [{
    id: 1,
    first_name: 'CJ',
    last_name: 'R.'
  }, {
    id: 2,
    first_name: 'Brendan',
    last_name: 'Eich'
  }, {
    id: 3,
    first_name: 'Kyle',
    last_name: 'Simpson'
  }, {
    id: 4,
    first_name: 'Douglas',
    last_name: 'Crockford'
  }];

const newPeople = people.reduce((acumulator,value,index,array)=>{
    acumulator[value.id] = {first_name : value["first_name"], last_name: value.last_name};
    return acumulator;
},{});

console.log(newPeople);

// Create an object where the keys are the size and the values are an array of all animals that size
const animals = [{
    name: 'cat',
    size: 'small'
  }, {
    name: 'dog',
    size: 'small'
  }, {
    name: 'lion',
    size: 'medium'
  }, {
    name: 'elephant',
    size: 'big'
  }];

const newAnimals = animals.reduce((acumulator,value)=>{    
    if(!acumulator[value.size]) acumulator[value.size] = [];
    acumulator[value.size].push(value.name); 
    return acumulator;
},{});

console.log(newAnimals);


