const sum = myNums.reduce(function(acc,curr){
    console.log(`value of accumulator : ${acc} and currentvalue : ${curr}`)
    return acc+curr
},0)

const sum2 = myNums.reduce((acc,curr)=> acc+curr,0)

// console.log(sum)
// console.log(sum2)