var trainsOperational = 8;
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
