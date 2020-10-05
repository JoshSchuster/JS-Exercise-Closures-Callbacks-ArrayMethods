// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

const stringListExample = ['foo', 'bar'];
const callBackExample = (str) => str + str;
console.log(processFirstItem(stringListExample, callBackExample)); //test

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 utilizes a closure. counter2 does not utilize a closure. As a result, the "count" variable in 
 * counter1 has block level scope within the function counterMaker(). This means that "count" 
 * cannot be accessed outside of counterMaker(). counter2's "count" variable has a global scope and can be 
 * accessed throughout the code. counter1 restricts access to manipulate "count" to counter1() calls. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 utilizes a closure. You can tell it uses a closure because it returns a 2nd function. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 would be preferable if you want to restrict access (enable data privacy) to the variable 
 * within counterMaker(). counter2 would be preferable if you need a common variable (global scope) that 
 * other functions/your program can manipulate. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){ //I removed the parameter, not sure why I would need a parameter for this or how it would be useful? 
    //generates random, whole number between 0 and 2
    return Math.floor(Math.random()*3);
}

console.log(inning()); //test
console.log(inning()); //test
console.log(inning()); //test
console.log(inning()); //test

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callBackFunction, numberOfInnings){
  let home = 0;
  let away = 0;

  for(let i = 0; i < numberOfInnings; i++){
    home = home + callBackFunction();
    away = away + callBackFunction();
  }
  return {
    "Home": home,
    "Away": away
  }
}

console.log(finalScore(inning, 9)); //test

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, inning, innings) {
  let inningScore = {};
  let awayScore = 0;
  let homeScore = 0;
  
  for (let i = 0; i < innings; i++){
    inningScore = getInningScore(inning, 1);
    if(i === 0){ //1st inning
      console.log(`${i+1}st inning: ${inningScore.Away+awayScore} - ${inningScore.Home+homeScore}`);
    }else if(i === 1){ //2nd inning
      console.log(`${i+1}nd inning: ${inningScore.Away+awayScore} - ${inningScore.Home+homeScore}`);
    }else if(i === 2){ //3rd inning
      console.log(`${i+1}rd inning: ${inningScore.Away+awayScore} - ${inningScore.Home+homeScore}`);
    }else{ //4th inning and beyond
      console.log(`${i+1}th inning: ${inningScore.Away+awayScore} - ${inningScore.Home+homeScore}`);
    }
    awayScore += inningScore.Away;
    homeScore += inningScore.Home;
  }
  console.log(""); //space
  console.log("Final Score: " + awayScore + " - " + homeScore);
}

scoreboard(finalScore, inning, 9); //test

