const User ={
    name: "Arun",
    email: "arun@gmail.com",
    isActive : true
}

function createUser({name:string ,isPaid :boolean}){

}

createUser({name:'Arun',isPaid:true})

function createCourse():{name:string ,price:number}{
    return {name:'Hello',price:399}
}

// Wired Method
function createAUser({name:string ,isPaid :boolean}){}

let user = {name:'Arun',isPaid:true,email:"arun@gmail.com"}
//Now i can pass the email through this
createAUser(user)






















export{}