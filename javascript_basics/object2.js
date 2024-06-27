const newUser = new Object() // to declare singleton object 

const newUser2 = {} // to declare multiton object 

newUser2.id=123
newUser2.name="tanishq dhawan"
newUser2.isLoggedIn = false

// console.log(newUser2)

const regularUser = {
    fullname : {
        userfullname : {
            firstname : "tanishq",
            secondname : "dhawan" 
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1:"a",
    2:"b"
}



const obj2 = {
    2:"c",
    3:"d"
}

const obj3 ={
    3:"e",
    4:"f"
}

const obj4={obj1,obj2,obj3}
// console.log(obj4)

const obj5=Object.assign(obj1,obj2,obj3)
// console.log(obj5)

const obj6={...obj1,...obj2,...obj3}
//  console.log(obj6)

//  console.log(Object.keys(obj1))
//  console.log(Object.values(obj1))
//  console.log(Object.entries(obj1))

 console.log(newUser2.hasOwnProperty('name2'))

