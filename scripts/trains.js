// var trainsOperational = 8;
// var totalTrains = 12;
// var dayOfWeek = "Friday";
// //
// // console.log("There are " + trainsOperational + " running trains.");
// // console.log(trainsOperational == totalTrains);
// // console.log("Train #" + 1 + " is running.");
//
// // var trainNumber = 1;
// // while (trainNumber <= trainsOperational) {
// //   console.log("Train #" + trainNumber + " is running.");
// //   trainNumber++;
// // }
// // for (var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++) {
// //   console.log("Train #" + trainNumber + " is running.")
// // }
// // for (var number = 5 ; number > 0; number--) {
// //   console.log(number);
// // }
//
// for (var stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++) {
//   console.log("Train #" + stoppedTrain + " is not running today.");
// }
// for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
//   if (trainNumber <= trainsOperational) {
//     console.log("Train #" + trainNumber + " is operating.")
//   } else {
//     console.log("Train #" + trainNumber + " is not operational.");
//   }
// }
// for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
//   if (trainNumber <= trainsOperational) {
//     console.log("Train #" + trainNumber + " is in service.")
//   } else if (trainNumber == 10) {
//     console.log("Train #10 begins running at noon.");
//   } else {
//     console.log("Train #" + trainNumber + " is not in service.");
//   }
// }
// // nested conditionals
// if(trainsOperational > 0) {
//   if (trainsOperational == totalTrains) {
//     console.log("All trains are running.");
//   } else {
//     for (var trainNumber =1; trainNumber <= totalTrains; trainNumber++) {
//     if (trainNumber <= trainsOperational && trainNumber != 3) {
//         console.log("Train #" + trainNumber + " is up and running.");
//       } else if (trainNumber == 10 || trainNumber == 12) {
//         console.log("Train #" + trainNumber + " begins running at noon.");
//       } else if (trainNumber == 3 && dayOfWeek == "Sunday") {
//         console.log("Train # 3 is running.");
//       } else {
//         console.log("Train #" + trainNumber + " is not in service.");
//       }
//     }
//   }
// } else {
//   console.log("Trains are not in service today.");
// }
// // added complex conditional
//
// // alert("Alert! Alert! Last call to board train #4!");
// // confirm("Dude. Are you sure you wanna ride #8? Just saying...");
// // prompt("Who let the dogs out?");
// var gotName  = false;
// while(gotName == false) {
//   var userName = prompt("What is your name, passenger?");
//   if (confirm("Are you sure your name is " + userName + "?") ) {
//     alert("Hello " + userName + "!");
//     gotName = true;
//   }
//
// }
// function countE() {
//   var yourPhrase = prompt("Type a phrase, please.");
//   if( typeof(yourPhrase) != "string") {
//       alert("That wasn't a phrase!");
//       return false;
//   } else {
//       var eCount = 0;
//       for (var i = 0; i < yourPhrase.length; i++) {
//           if(yourPhrase.charAt(i)== 'E' || yourPhrase.charAt(i)=='e') {
//             eCount++;
//           }
//       }
//   alert("there are " + eCount + " e's in \""+ yourPhrase + "\".");
//   }
// }
// countE();
//
//
// //arrays
// var passengers = ["Breadley Sevens", "Olivia Snake", "Jimothy Klein", "Justin Kidding", "Marina Fey"];
// console.log(passengers.length);
// passengers.pop();
// console.log(passengers);
// passengers.push("Samwise Gimcoucho");
// console.log(passengers);
//
//
// var comboArray1 = ["one", "fish", 2, "fish"];
//
// var poisson = "fish";
// var comboArray2 = ["red", poisson, "Blue", poisson];
// console.log(comboArray2);
// console.log(poisson);
//
// var arrayOfArrays = [comboArray1, comboArray2];
// console.log(arrayOfArrays);
// console.log(arrayOfArrays[1]);
// console.log(arrayOfArrays[1][2]);
//
// var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];
// for (var i = 0; i < numberList.length; i++) {
//     console.log("The value in cell " + i + " is " + numberList[i]);
// }
// // numberList[5]=undefined;
//
// var evenCount = 0;
//   for (var i = 0; i < numberList.length; i++) {
//    if (numberList[i] % 2 == 0) {
//      evenCount++;
//    } else {
//      numberList[i] = undefined;
//    }
//   }
//   console.log(evenCount);
//   console.log(numberList);
//
// function addPassenger (passengerName, passengerArray) {
//     if (passengerArray.length == 0) {
//       passengerArray.push(passengerName);
//     } else {
//       for (var i = 0; i < passengerArray.length; i++) {
//         if (passengerArray[i] == undefined) {
//           passengerArray[i] = passengerName;
//           return passengerArray;
//         } else if (i == passengerArray.length -1 ) {
//           passengerArray.push(passengerName);
//           return passengerArray;
//         }
//       }
//     }
// }
// var passengerList = [];
// addPassenger("Bethy Sevans", passengerList);
// console.log(passengerList);
// addPassenger("Love Newton", passengerList);
// console.log(passengerList);
// addPassenger("Cam Broon", passengerList);
// console.log(passengerList);
// function deletePassenger (passengerName, passengerArray) {
//     if(passengerArray.length ==0){
//       console.log("list is empty");
//     } else {
//         for (var i = 0; i < passengerArray.length; i++) {
//             if (passengerArray[i] == passengerName) {
//                 passengerArray[i] = undefined;
//             } else if (i == passengerArray.length -1) {
//               console.log("Passenger not found!");
//             }
//         }
//     }
//     return passengerArray;
// }
// deletePassenger("Bethy Sevans", passengerList);
// console.log(passengerList);
//
// addPassenger("Jimothy Churchington", passengerList);
// console.log(passengerList);
// deletePassenger("Bethy Sevans", passengerList);
//
//
// //function expressions and anonymous functions
//
// var diff = function (a, b) {
//   return a*a - b*b;
// }
// console.log(diff(4,2));
// console.log(diff);
// // var newCustomer = false;
// var greeting;
// var selection = $('#customerForm').val();
//
//   if( selection == 'newCustomer'){
//     greeting = function () {
//       alert("Thanks for visiting the Badlands!\n" +
//             "We hope your stay is...better than most.");
//       }
//   } else {
//     greeting = function () {
//       alert("Thanks for visiting the Badlands!\n" +
//             "Guess they aren't so bad huh?");
//         }
//   }
//
//
// closeTerminal(greeting);
//
// function closeTerminal (message) {
//   message();
// }
//
// //map method and function expressions
// console.log(numberList);
// var results = numberList.map(function (arrayCell) {
//               return arrayCell * 2;
//             }
// );
// console.log(results);
//
//
// //returning functions and immediate invocation
// var parkRides = [["Birch Bumpers", 40],
//                  ["Pines Plunge", 55],
//                  ["Cedar Coaster", 20],
//                  ["Fir-ris Wheel", 90]
// ];
// var fastPassQueue = ["Cedar Coaster",
//                       "Pines Plunge",
//                       "Birch Bumpers",
//                       "Pines Plunge"
//                       ];
// // fastPassQueue.push("Pines plunge");
// // fastPassQueue.shift();
// // console.log(fastPassQueue.length);
// // var firstFastPass = fastPassQueue.shift();
// // console.log(firstFastPass);
// function buildTicket (allRides, passRides, pick) {
//       if(passRides[0] == pick) {
//         var pass = passRides.shift();
//         return function () {alert("Quick! You've got a Fast Pass to " + pass + "!");
//                 };
//       } else {
//         for (var i = 0; i < allRides.length; i++) {
//           if (allRides[i][0] == pick) {
//             return function () {alert("A ticket is printing for " + pick + "!\n" +
//                       "Your wait time is about " + allRides[i][1] + " minutes.");
//                   }
//           }
//         }
//       }
// }
// var wantsRide = "Cedar Coaster";
// var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
// ticket();
//
// //immediate invocation
// wantsRide = "Pines Plunge";
// buildTicket(parkRides, fastPassQueue, wantsRide)();
//
// //closures
// //returning a functiong from a function, complete
// //with variables from an external scope is a closure
//
// function testClosure(){
//   var x= 4;
//   function closeX() {
//     return x;
//   }
//   return closeX;
// }
// var checkLocalX = testClosure();
//
// function buildCoveTicketMaker(transport) {
//     var passengerNumber = 0;
//     return function (name) {
//       passengerNumber++;
//       alert("Here is your transportation ticket via the " + transport + ".\n"
//       + "Welcome to the Cold Closures Cove, " + name + "!\n" +
//       "You are passenger #" + passengerNumber + ".");
//     }
// }
// var getSubmarineTicket = buildCoveTicketMaker("Submarine");
// var getBattleshipTicket = buildCoveTicketMaker("Battleship");
// var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");
// getGiantSeagullTicket("Jimmy Choo");
// getBattleshipTicket("Bevan");
//
//
//
//
// function mystery(input) {
//   var secret = 4;
//   input += 2;
//   function mystery2(multiplier) {
//     multiplier *= input;
//     return secret * multiplier;
//   }
//   return mystery2;
// }
//
// function mystery3(param) {
//   function mystery4(bonus) {
//     return param(6) + bonus;
//   }
//   return mystery4;
// }
//
// var hidden = mystery(3);
// var jumble = mystery3(hidden);
// var result = jumble(2);
// console.log(result);
// getBattleshipTicket("Lip Gallagher");
//
//
// function assignTorpedo (name, passengerArray) {
//
//   for (var i = 0; i < passengerArray.length; i++) {
//     if (passengerArray[i] == name) {
//       return function () {
//         alert("Ahoy, " + name + "!\n" +
//               "Man your post at Torpedo #" + (i+1) + "!");
//       };
//     }
//   }
//   return torpedoAssignment;
// }
// var subPassengers = ["Beth", "Lip", "Bread", "Snake", "Don", "Angelove", "Bryan"];
// var giveAssignment = assignTorpedo("Lip", subPassengers);
// giveAssignment();
//
// function makeTorpedoAssigner(passengerArray) {
//     return function (name) {
//       for (var i = 0; i < passengerArray.length; i++) {
//         if (passengerArray[i]==name) {
//           alert("Ahoy, " + name + "!\n" +
//           "Man your post at Torpedo #" + (i+1) + "!");
//
//         }
//       }
//     };
// }
//
// var getTorpedoFor = makeTorpedoAssigner(subPassengers);
// getTorpedoFor("Snake");
//
//
// var listOfSharks = ["Sea Pain", "Great Wheezy",
//                     "DJ Chewie", "Lil' Bitey",
//                     "Finmaster Flex", "Swim Khalifa",
//                     "Ice Teeth", "The Notorious J.A.W."];
//
// var listOfTargets = ["icicle bat", "snow yeti",
//                      "killer penguin", "frost tiger",
//                      "polar bear", "iceberg",
//                      "blue witch", "wooly mammoth"];
//
//   function makeTargetAssigner(sharks, targets) {
//   // insert your code here
//   return function(shark) {
//     for(var i =0; i<sharks.length; i++) {
//       if(sharks[i] == shark) {
//   alert("Hey, " + shark + "!\n" + "There've been " + targets[i] + " sightings in our area!\n" + "Time to take care of business!");
//       }
//     }
//   };
// }
//
// var getTargetFor = makeTargetAssigner(listOfSharks,
//                                       listOfTargets);
// getTargetFor("Ice Teeth");
//
//
// var ar = [1, 2, 3, 4, 10, 11];
// function simpleArraySum(n, ar) {
//     // Complete this function
//     for (var i=0; i< n; i++){
//         var sum = 0;
//         sum += ar[i];
//     }
//     return sum;
// }
// //hoisting
// function capacityStatus (numPassengers, capacity) {
//   var noSeats = function () {
//     alert("No seats left!");
//     return false;
//   }
//   var seatsAvail = function() {
//     alert("There are " +(capacity - numPassengers) + " seats left!");
//     return true;
//   }
//     if (numPassengers == capacity) {
//       noSeats();
//     } else {
//       seatsAvail();
//     }
// }
// //OR
// function capacityStatus (numPassengers, capacity) {
//     if (numPassengers == capacity) {
//       noSeats();
//     } else {
//       seatsAvail();
//     }
//     function noSeats () {
//       alert("No seats left!");
//       return false;
//     }
//     function seatsAvail () {
//       alert("There are " +(capacity - numPassengers) + " seats left!");
//       return true;
//     }
// }
//
// function thisIsWeird() {
// var result;
//   // function secret() {
//   //   var unused3;
//   // }
//   //
//   // function secret() {
//   //   var unused1;
//   // }
//   function secret() {
//     var unused2;
//   }
//   // The following line of code assigns a
//   // secret function to the variable result.
//   result = secret;
//
//   return result;
// }
// //OBJECTS
// var book = {title: "Harry Potter and the Sorcerer's Stone",
//             author: "J.K. Rowling",
//             publisher: "Scholastic",
//             numChapters: 24,
//             numPages: 345,
//             illustrator: "Person McGee"
//             };
// var booksArray = ["Harry Potter", "The Hobbit", "The Hunger Games"];
// var myBox= {height: 6,
//             width: 8,
//             length: 10,
//             volume: 480,
//             material: "cardboard",
//             contents: booksArray
//         };
// myBox.width;
// //--> 8
// myBox.material;
// //--> "cardboard"
// myBox.contents;
// //--> booksArray is returned
// myBox.width = 12;
// console.log(myBox.width);
// myBox.volume = myBox.length * myBox.width * myBox.height;
// console.log(myBox.volume);
// myBox.contents.push("On The Road");
// myBox.weight = 24;
// myBox.destination1 = "Orlando";
// myBox.destination2 = "Miami";
// console.log(myBox["material"]);
// myBox["destination2"];
// //-->"Miami"
// //make properties this way trainsOperational
// myBox["# of stops"] = 2;
// // console.log(myBox."# of stops"); //bad returns error
// console.log(myBox["# of stops"]);
// //functions can go in brackets
// for (var i = 1; i <= myBox["# of stops"]; i++) {
//   console.log( myBox["destination" + i ]);
// };
// delete myBox.contents;
// //always returns true
// console.log(booksArray);
// myBox["# of Books"] = 0;
// function addBook (box, name, writer) {
//   box["# of Books"]++;
//   box["book" + box["# of Books"]] = {title: name, author: writer};
// }
// addBook(myBox,"Great Expectations", "Charles Dickens");
// addBook(myBox,"On the Road", "Jack Keroac");
// addBook(myBox,"Peter Pan", "J. M. Barrie");
// addBook(myBox,"The Remains of the Day", "Kazuo Ishiguro");
// console.log(myBox.book2.title);
// console.log(myBox["book4"]["author"]);
// //object parents aka prototypes
// //constructor
// // toString
// // propertyIsEnumerable
// // vlaueOf
// // toLocaleString
// // isPrototypeOf
// // hasOwnProperty
// //object prototype is the highest level
// String.prototype.countAll = function (letter) {
//   var letterCount = 0;
//   for (var i = 0; i < this.length; i++) {
//     if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
//         letterCount++;
//     }
//   }
// return letterCount;
//
// }
//
// //inheritance and constructors
// // var shoe = {size: 6,
// //             gender: "women",
// //             construction: "slipper"};
// // var magicShoe = Object.create(shoe);
// // magicShoe.jewels = "ruby";
// // magicShoe.travelAction = "click heels";
// // magicShoe.actionsRequired = 3;
// // console.log(shoe);
//
// var shoe = {size: undefined,
//             gender: undefined,
//             construction: undefined};
// var mensBoot = Object.create(shoe);
// mensBoot.size = 12;
// mensBoot.gender = "men";
// mensBoot.construction = "boot";
//
// var flipFlop = Object.create(shoe);
// flipFlop.size = 5;
// flipFlop.gender = "women";
// flipFlop.construction = "flip flop";
//
// //this sucks
// function Shoe (shoeSize, shoeColor, forGender, constructStyle) {
//     this.size = shoeSize;
//     this.color = shoeColor;
//     this.gender = forGender;
//     this.construction = constructStyle;
// }
// Shoe.prototype = {
//   putOn :function () {alert("Your " + this.construction + " is on!")},
//   takeOff: function () {alert("Phew! Somebody's size " +this.size + "'s are fragrant!")}
// };
// var beachShoe = new Shoe (10, "blue", "women", "flipflop" );
// beachShoe.straps = 2;
// console.log(beachShoe.gender);
// beachShoe.takeOff();
// beachShoe.hasOwnProperty("construction");


//ternary conditionals
// var weapon;
// if (isArthur) {
//   weapon = "Excalibur";
// }  else {
//   weapon = "Longsword";
// }

var isArthur = true;
var isKing=false;
var isArcher = true;
var weapon;
var helmet;
// someCondition ? pickThisIfTrue : pickThisIfFalse;
// var weapon = isArthur ? "Excalibur" : "Longsword";
console.log("Current weapon: " + weapon);
console.log("Current weapon: " + (isArthur ? "Excalibur" : "Longsword"));
console.log("Current weapon: " + (isArthur && isKing ? "Excalibur" : "Longsword"));
isArthur && isKing ? alert("Hail Arthur, King of the Britons!") :
                    alert("Charge on, ye Knight, for the glory of the King!");

isArthur && isKing ? function () {
      alert("Hail Arthur, King of the Britons!")
      console.log("Current weapon: Excalibur");
    }()
    :
    function () {
      alert("Charge on, ye Knight, for the glory of the King!");
      console.log("Current weapon: Longsword");
    }();

isArthur && isKing ? (weapon ="Excalibur", helmet = "Goosewhite")
                      :
                      (weapon ="Longsword", helmet = "Iron Helm");

isArthur && isKing ? (weapon ="Excalibur", helmet = "Goosewhite")
                                            :
                                            isArcher ? (weapon = "Longbow", helmet  = "Mail Helm") :
                                            (weapon ="Longsword", helmet = "Iron Helm")
var armory = { addSword: function (sword) {
                this.swords = this.swords ? this.swords : [];
                this.swords.push(sword);
              }
        };
var armory2 = { addSword: function (sword) {
              this.swords = this.swords || [];
              this.swords.push(sword);
              }
            };

armory2.addSword("Excalibur");
console.log(armory2.swords);
armory2.addSword("Katana");
console.log(armory2.swords);
armory2.addSword("Claymore");
armory2.addSword("Scimitar");
console.log(armory2.swords);
var res1 = undefined || 42;
var res2 = 0 ||['sweet', 'tangy'];
var res3 = "" || {type: "ring", stone: "diamond"};
console.log(res1);
console.log(res2);
console.log(res3);
//logical operations veryfirst not false value will be accepted
var res4 = "King"|| "Arthur";
var res5 = "Arthur"|| "King";
console.log(res4);
console.log(res5);
var res6 = ""|| undefined;
var res7 = undefined || "";
//neuther are true so it takes last value
console.log(res6);
console.log(res7);

//logical operations &&
//&& takes the rightmost truth or first false
var res8 = undefined && 42;
//returns undefined 42 is not examined
var res9 = 0 && ["sweet", "tangy"];
//returns 0
var res10 = "" && {type: "ring", stone: "diamond"};
//returns ""
var res11 = "King" && "Arthur";
//returns arthur the last truth
var res12 = "Arthur" && "King";
//returns king
var res13 = undefined && "";
//returns undefined bc short circuit
var res14 = "" && undefined;
//returns "" bc short circuit
//and is useful in contingent assignments

armory.retreiveSword = function(request) {
      return (this.swords.indexOf(request) >= 0) ?
      this.swords.splice(this.swords.indexOf(request), 1)[0] :
      alert("No " + request);
};
//will return -1 if it doesn't exist
var armoryIsOpen = true;
var isKnight = true;
// var weapon = armoryIsOpen && isKnight && armory.retreiveSword("Katana");

var makeup = ["Mascara", "Eyeliner", "Blush", "Foundation"];
makeup.splice(2,2);
//starts at index 2 removes 2 items
//returns ["Blush", "Foundation"]  their own array

//switch block
function Knight (name, regiment) {
  this.name = name;
  this.regiment = regiment;
  switch (regiment) {
    case 1:
      this.weapon = "Broadsword";
      break;
    case 2:
      this.weapon = "Claymore";
      break;
    case 3:
      this.weapon = "Longsword";
      break;

    case 5:
      this.weapon = "War Haven";
      break;
    case 6:
      this.weapon = "Batte Axe";
      break;
    case 4:
    case 7:
    //fallthrough will apply
    case 8:
      this.weapon = "Morning Star";
      break;
    case "King":
      this.weapon  = "Excalibur";
      break;
    default:
        alert(name + " has an incorrect regiment. No weapon assigned!");
  }
}
var soldier = new Knight("Richard", 4);
console.log(soldier.weapon);
var king = new Knight("Arthur", "King");
console.log(king.weapon);
var soldier3 = new Knight("Jerome", 12);

//hierarchy of the switch block
function ceremonialDagger(knight, rank) {
  this.length = 8;
  this.owner = knight;
  switch(rank){
    case "King": this.diamonds = 1;
    case "High Constable": this.amethyst = 2;
    case "Field Marshal": this.sapphires = 4;
    case "Captain": this.emeralds = 1;
    case "Knight" : this.rubies = 6;
  }
}
var knightsDagger = new ceremonialDagger("Jimbo", "Knight");
console.log(knightsDagger);
var marshalDagger = new ceremonialDagger("temmy", "Field Marshal");
console.log(marshalDagger);
var kingDagger = new ceremonialDagger("Siron", "King");
console.log(kingDagger);
