var trainsOperational = 8;
var totalTrains = 12;
var dayOfWeek = "Friday";
//
// console.log("There are " + trainsOperational + " running trains.");
// console.log(trainsOperational == totalTrains);
// console.log("Train #" + 1 + " is running.");

// var trainNumber = 1;
// while (trainNumber <= trainsOperational) {
//   console.log("Train #" + trainNumber + " is running.");
//   trainNumber++;
// }
// for (var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++) {
//   console.log("Train #" + trainNumber + " is running.")
// }
// for (var number = 5 ; number > 0; number--) {
//   console.log(number);
// }

for (var stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++) {
  console.log("Train #" + stoppedTrain + " is not running today.");
}
for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
  if (trainNumber <= trainsOperational) {
    console.log("Train #" + trainNumber + " is operating.")
  } else {
    console.log("Train #" + trainNumber + " is not operational.");
  }
}
for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
  if (trainNumber <= trainsOperational) {
    console.log("Train #" + trainNumber + " is in service.")
  } else if (trainNumber == 10) {
    console.log("Train #10 begins running at noon.");
  } else {
    console.log("Train #" + trainNumber + " is not in service.");
  }
}
// nested conditionals
if(trainsOperational > 0) {
  if (trainsOperational == totalTrains) {
    console.log("All trains are running.");
  } else {
    for (var trainNumber =1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= trainsOperational && trainNumber != 3) {
        console.log("Train #" + trainNumber + " is up and running.");
      } else if (trainNumber == 10 || trainNumber == 12) {
        console.log("Train #" + trainNumber + " begins running at noon.");
      } else if (trainNumber == 3 && dayOfWeek == "Sunday") {
        console.log("Train # 3 is running.");
      } else {
        console.log("Train #" + trainNumber + " is not in service.");
      }
    }
  }
} else {
  console.log("Trains are not in service today.");
}
// added complex conditional

// alert("Alert! Alert! Last call to board train #4!");
// confirm("Dude. Are you sure you wanna ride #8? Just saying...");
// prompt("Who let the dogs out?");
var gotName  = false;
while(gotName == false) {
  var userName = prompt("What is your name, passenger?");
  if (confirm("Are you sure your name is " + userName + "?") ) {
    alert("Hello " + userName + "!");
    gotName = true;
  }

}
function countE() {
  var yourPhrase = prompt("Type a phrase, please.");
  if( typeof(yourPhrase) != "string") {
      alert("That wasn't a phrase!");
      return false;
  } else {
      var eCount = 0;
      for (var i = 0; i < yourPhrase.length; i++) {
          if(yourPhrase.charAt(i)== 'E' || yourPhrase.charAt(i)=='e') {
            eCount++;
          }
      }
  alert("there are " + eCount + " e's in \""+ yourPhrase + "\".");
  }
}
countE();


//arrays
var passengers = ["Breadley Sevens", "Olivia Snake", "Jimothy Klein", "Justin Kidding", "Marina Fey"];
console.log(passengers.length);
passengers.pop();
console.log(passengers);
passengers.push("Samwise Gimcoucho");
console.log(passengers);


var comboArray1 = ["one", "fish", 2, "fish"];

var poisson = "fish";
var comboArray2 = ["red", poisson, "Blue", poisson];
console.log(comboArray2);
console.log(poisson);

var arrayOfArrays = [comboArray1, comboArray2];
console.log(arrayOfArrays);
console.log(arrayOfArrays[1]);
console.log(arrayOfArrays[1][2]);

var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];
for (var i = 0; i < numberList.length; i++) {
    console.log("The value in cell " + i + " is " + numberList[i]);
}
// numberList[5]=undefined;

var evenCount = 0;
  for (var i = 0; i < numberList.length; i++) {
   if (numberList[i] % 2 == 0) {
     evenCount++;
   } else {
     numberList[i] = undefined;
   }
  }
  console.log(evenCount);
  console.log(numberList);

function addPassenger (passengerName, passengerArray) {
    if (passengerArray.length == 0) {
      passengerArray.push(passengerName);
    } else {
      for (var i = 0; i < passengerArray.length; i++) {
        if (passengerArray[i] == undefined) {
          passengerArray[i] = passengerName;
          return passengerArray;
        } else if (i == passengerArray.length -1 ) {
          passengerArray.push(passengerName);
          return passengerArray;
        }
      }
    }
}
var passengerList = [];
addPassenger("Bethy Sevans", passengerList);
console.log(passengerList);
addPassenger("Love Newton", passengerList);
console.log(passengerList);
addPassenger("Cam Broon", passengerList);
console.log(passengerList);
function deletePassenger (passengerName, passengerArray) {
    if(passengerArray.length ==0){
      console.log("list is empty");
    } else {
        for (var i = 0; i < passengerArray.length; i++) {
            if (passengerArray[i] == passengerName) {
                passengerArray[i] = undefined;
            } else if (i == passengerArray.length -1) {
              console.log("Passenger not found!");
            }
        }
    }
    return passengerArray;
}
deletePassenger("Bethy Sevans", passengerList);
console.log(passengerList);

addPassenger("Jimothy Churchington", passengerList);
console.log(passengerList);
deletePassenger("Bethy Sevans", passengerList);


//function expressions and anonymous functions

var diff = function (a, b) {
  return a*a - b*b;
}
console.log(diff(4,2));
console.log(diff);
// var newCustomer = false;
var greeting;
var selection = $('#customerForm').val();

  if( selection == 'newCustomer'){
    greeting = function () {
      alert("Thanks for visiting the Badlands!\n" +
            "We hope your stay is...better than most.");
      }
  } else {
    greeting = function () {
      alert("Thanks for visiting the Badlands!\n" +
            "Guess they aren't so bad huh?");
        }
  }


closeTerminal(greeting);

function closeTerminal (message) {
  message();
}

//map method and function expressions
console.log(numberList);
var results = numberList.map(function (arrayCell) {
              return arrayCell * 2;
            }
);
console.log(results);


//returning functions and immediate invocation
var parkRides = [["Birch Bumpers", 40],
                 ["Pines Plunge", 55],
                 ["Cedar Coaster", 20],
                 ["Fir-ris Wheel", 90]
];
var fastPassQueue = ["Cedar Coaster",
                      "Pines Plunge",
                      "Birch Bumpers",
                      "Pines Plunge"
                      ];
// fastPassQueue.push("Pines plunge");
// fastPassQueue.shift();
// console.log(fastPassQueue.length);
// var firstFastPass = fastPassQueue.shift();
// console.log(firstFastPass);
function buildTicket (allRides, passRides, pick) {
      if(passRides[0] == pick) {
        var pass = passRides.shift();
        return function () {alert("Quick! You've got a Fast Pass to " + pass + "!");
                };
      } else {
        for (var i = 0; i < allRides.length; i++) {
          if (allRides[i][0] == pick) {
            return function () {alert("A ticket is printing for " + pick + "!\n" +
                      "Your wait time is about " + allRides[i][1] + " minutes.");
                  }
          }
        }
      }
}
var wantsRide = "Cedar Coaster";
var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
ticket();

//immediate invocation
wantsRide = "Pines Plunge";
buildTicket(parkRides, fastPassQueue, wantsRide)();

//closures
//returning a functiong from a function, complete
//with variables from an external scope is a closure

function testClosure(){
  var x= 4;
  function closeX() {
    return x;
  }
  return closeX;
}
var checkLocalX = testClosure();

function buildCoveTicketMaker(transport) {
    var passengerNumber = 0;
    return function (name) {
      passengerNumber++;
      alert("Here is your transportation ticket via the " + transport + ".\n"
      + "Welcome to the Cold Closures Cove, " + name + "!\n" +
      "You are passenger #" + passengerNumber + ".");
    }
}
var getSubmarineTicket = buildCoveTicketMaker("Submarine");
var getBattleshipTicket = buildCoveTicketMaker("Battleship");
var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");
getGiantSeagullTicket("Jimmy Choo");
getBattleshipTicket("Bevan");




function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);
console.log(result);
getBattleshipTicket("Lip Gallagher");


function assignTorpedo (name, passengerArray) {

  for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name) {
      return function () {
        alert("Ahoy, " + name + "!\n" +
              "Man your post at Torpedo #" + (i+1) + "!");
      };
    }
  }
  return torpedoAssignment;
}
var subPassengers = ["Beth", "Lip", "Bread", "Snake", "Don", "Angelove", "Bryan"];
var giveAssignment = assignTorpedo("Lip", subPassengers);
giveAssignment();

function makeTorpedoAssigner(passengerArray) {
    return function (name) {
      for (var i = 0; i < passengerArray.length; i++) {
        if (passengerArray[i]==name) {
          alert("Ahoy, " + name + "!\n" +
          "Man your post at Torpedo #" + (i+1) + "!");

        }
      }
    };
}

var getTorpedoFor = makeTorpedoAssigner(subPassengers);
getTorpedoFor("Snake");
