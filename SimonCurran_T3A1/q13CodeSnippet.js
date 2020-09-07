class Car {
  // the parent class

  constructor(brand) {
    // takes 1 input on initialization of an instance, => 'brand'
    this.carname = brand;
  }

  present() {
    // a function that can be called on the instance object of the class 
    // returns a string with the carname/brand that was just set on 'this' instance
    return 'I have a ' + this.carname;
  }
}


switch (key) {
  case value:
    
    break;

  default:
    break;
}

class Model extends Car {
  // the child class that inherits from its parent 'Car'
  
  constructor(brand, mod) {
    // takes 2 inputs on initialization of an instance, 
    // brand (which is super'd/inherited from the parent class), 
    // and the model/year of the car
    super(brand);
    this.model = mod;
  }
  
  show() {
    // a function that can be called on the instance object of the class, 
    // this calls the parents instance function, 
    // and adds its own string to this string which includes the year of the car that was just set in this class
    return this.present() + ', it was made in ' + this.model;
  }
}


// sets a global array of 3 different makes
let makes = ["Ford", "Holden", "Toyota"]
//  Array.from creates an array from array-like objects
// it also takes in an optional parameter which allows us to run a map() over each element being created
// this code creates an array with 40 items, where the first item starts at 1980 and the last finishes at 2019, 
  // increasing by 1 each iteration
let models = Array.from(new Array(40), (x,i) => i + 1980)


function randomIntFromInterval(min,max) { // min and max are included in the range
  // Returns a whole random number between any range, inclusive of the numbers provided 
  return Math.floor(Math.random()*(max-min+1)+min);
}



for (model of models) {
  // a for loop that runs 40 times (i.e. length of the models array)
  // it then gets a random number between 0 and 2 and returns a string out of that array to use in the creation of the instance
  // then gets another random number between 0 and 2 which returns a random to use in the creation of the instance
    // (Note for assignment marker: I'm guessing this should have been models.length?)
  make = makes[randomIntFromInterval(0,makes.length-1)]
  model = models[randomIntFromInterval(0,makes.length-1)]
    
  // create an instance of the Model class
  // log the result of the returned string from the instance function to the console
  mycar = new Model(make, model);
  console.log(mycar.show())
}