const myNums = [1,2,3,4,5,6,7,8,9]

const values = myNums.map((num)=>num+10)
// console.log(values)

// chaining

const value = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=41)
// console.log(value)

