var trainsOperational = 8;
var totalTrains = 12;

console.log("There are " + trainsOperational + " running trains.");
console.log(trainsOperational == totalTrains);
console.log("Train #" + 1 + " is running.");

var trainNumber = 1;
while (trainNumber <= trainsOperational) {
  console.log("Train #" + trainNumber + " is running.");
  trainNumber++;
}
