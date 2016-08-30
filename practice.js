//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      /*
      'this' allows you to access the execution context of the function. In other words,
      it allows you to pull information from the object that calls the function, which can be really
      useful for passing information to the function after writing it. It also allows the function to be
      reusable.
      */

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      /*
      1. Explicit binding: Does the function have an explicit binding to an object through call(), apply(), or bind()?
      2. Implicit binding: Does the function have an object on the left side of the dot (in the invocation)?
      3. Does the 'new' keyword bind the function to the object on the left side of the assignment statement (left of the equals)?
      3. Default: If none of the above, use the window as the object which 'this' refers to.

  // 3) What is the difference between call and apply?

      //Answer
      /*
      Both methods take in the object which will be the execution context as the first parameter, and both methods invoke the function immediately, but the call() method takes in additional arguments as individual values, and apply() takes in additional arguments for the function as an array of values.

  // 4) What does .bind do?

      //Answer
      /* Like call() and apply(), bind() explicitly sets the execution context for a function by binding a copy of the function to a given object in the argument. But unlike call() and apply(), bind() uses a copy of the function and does not immediately invoke the function. */

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'Brian',
      email: 'brian@brian.com',
      getUsername: function() {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  }
}


// Write the function definitions which will make the following function invocations function properly.
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  var getPriusYear = getYear.bind(prius);
  var getMustangYear = getYear.bind(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser)(); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
  /*
  It would return undefined because the execution context is not visible to the function inside getMyUserName, so it defaults to the window, which has no username property.
  */
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  // The window
//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
