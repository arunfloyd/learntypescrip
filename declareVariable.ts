let greetings:string = 'Hello to Hell'

console.log(greetings)


// Number 
// There is NO int or float in JS TYPES so ONLY numbr
let myNumber : number =123 
let yourNumber : number = 123.5

// TS is smart enough to automatically finds that this is number
let otherNumber = 345
otherNumber.toFixed()


// Boolean
let bool :boolean = false

//any

let hero ;

function getHero(){
    return "Hello"
}
hero = getHero

export {}