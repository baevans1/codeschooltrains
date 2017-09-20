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
