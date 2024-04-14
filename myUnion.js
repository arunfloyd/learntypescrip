"use strict";
// We can use multiple expetation of types
Object.defineProperty(exports, "__esModule", { value: true });
var score = 55;
score = 34;
score = "Hello";
var arun = { name: "Aad", id: 23 };
arun = { username: "Aadu", id: 12 };
// Function
function getDbId(id) {
    if (typeof id === "number") {
        id + 2;
    }
}
// Array
var data = [1, 3, 4];
var data2 = ["1", "3"];
var data3 = [1, 3, "3"];
// Constant Values to the varibles
var seatAllotment;
seatAllotment = 'Birth';
