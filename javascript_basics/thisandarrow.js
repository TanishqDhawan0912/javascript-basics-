const user ={
    username : "tanishq",
    age : 22,
    welcomemessage : function (){
        console.log(`Hi ${this.username} , welcome to our website `)
        console.log(this)
    }
    
}

// user.welcomemessage()
// user.username = "mann"
// user.welcomemessage()

// console.log(this)

// function hello(){
//     const username = "tanishq"
//     console.log(this.username) // can not use this operator in function 
// }

// hello()

// const hello = function(){
//     const username = "tanishq"
//     console.log(this)
// }

// hello()

// const hello = () => {
//     const username = "tanishq"
//     console.log(this) // here it shows the empty bracket 
// }

// hello()

// const addtwo = (num1,num2) => {
//     console.log( num1+num2)
// }

// addtwo(2,4)

const addtwo = (num1,num2) => num1+num2

console.log(addtwo(2,4))