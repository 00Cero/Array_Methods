// Create a new array with only the even numbers
const numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((number)=> number % 2 === 0);

console.log(filteredNumbers);

// create a new array with only the days that start with the letter T
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const filteredDays = days.filter(day => day[0] === 'T');

  console.log(filteredDays);
  
// Create a new array with only the people who's first name is less than 4 characters long.
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

const filteredPeople = people.filter(person => person.first_name.length < 4);

console.log(filteredPeople);

// Create a new array with only the animals of size small
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



  const filteredAnimals = animals.filter(animals => animals.size === 'small');

  console.log(filteredAnimals);

// create a new array with only the words with a length longer than 6
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const filteredWords = words.filter(word => word.length > 6);
console.log(filteredWords);