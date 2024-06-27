function saymyname(){
    console.log("T")
    console.log("A")
    console.log("N")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("Q")
}

// saymyname // for reference
// saymyname() // for execution

function addTwoNumbers(num1,num2){
    return (num1+num2)
}


const result = addTwoNumbers(7,9)
// console.log(result) 


function LoggedUserName(username='sam' /* default parameter*/ ){
    if(!username){
        console.log("please enter a username !")
        return
    }
    return `${username} just logged in`
}

// const login = LoggedUserName()
// const login = LoggedUserName('tanishq')
// console.log(login)

// function CalculateCartPrice(...items){ // rest operator
//     return items
// }


function CalculateCartPrice(val1,val2,...items){ // rest operator
    return items
}


// console.log(CalculateCartPrice(200,400,500,1500))

const userlist ={
    itemname:'shampoo',
    price : 355
}

function handleobject(anyobject){
    console.log(`name of item is ${anyobject.itemname} & price is ${anyobject.price}`)
}

handleobject(userlist)






