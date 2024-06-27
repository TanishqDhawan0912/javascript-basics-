// let a = 4
// const b = 5 
// var c = 3

// console.log(a) // 4
// console.log(b) // 5
// console.log(c) // 3

// if(true){
//     let a = 4
//     const b = 5 
//     var c = 3
// }

// console.log(a) // error
// console.log(b) // error
// console.log(c) // 3

// +++++++++++++++++ funtion scoping +++++++++++++++++++++

addone(5) // runs here also

function addone(num){
    return num+1;
}

addone(5) // run here also

// console.log(addone(5))

addtwo(5) // gives error 

const addtwo = function(num){
    return num+2;
}

addtwo(5) // run here only