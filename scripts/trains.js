var trainsOperational = 0;
var totalTrains = 12;
//
// console.log("There are " + trainsOperational + " running trains.");
// console.log(trainsOperational == totalTrains);
// console.log("Train #" + 1 + " is running.");

var trainNumber = 1;
while (trainNumber <= trainsOperational) {
  console.log("Train #" + trainNumber + " is running.");
  trainNumber++;
}
for (var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++) {
  console.log("Train #" + trainNumber + " is running.")
}
for (var number = 5 ; number > 0; number--) {
  console.log(number);
}

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
      if (trainNumber <= trainsOperational) {
        console.log("Train #" + trainNumber + " is up and running.");
      } else if (trainNumber == 10) {
        console.log("Train #10 begins running at noon.");
      } else {
        console.log("Train #" + trainNumber + " is not in service.");
      }
    }
  }
} else {
  console.log("Trains are not in service today.");
}
