// We can use multiple expetation of types

let score: number | string = 55;

score = 34;

score = "Hello";

// Object

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let arun: User | Admin = { name: "Aad", id: 23 };

arun = { username: "Aadu", id: 12 };

// Function

function getDbId(id: string | number) {
  if (typeof id === "number") {
    id + 2;
  }
}

// Array

const data: number[] = [1, 3, 4];

const data2: string[] = ["1", "3"];

const data3: (number | string)[] = [1, 3, "3"];

// Constant Values to the varibles

let seatAllotment :'Window'|'Birth' |'Side'

seatAllotment ='Birth'

export{}