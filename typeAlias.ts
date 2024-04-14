type User ={
    name:string;
    email:string;
    isActive :boolean
}

// Rename the string , but why this need
type MyString = string;

function createUser(user:User):User{
    return {name:'',email:'',isActive:true}
}

createUser({name:'',email:'',isActive:true})

export{}