const cart = [
    {
        course : "web development",
        price : 1200
    },
    {
        course : "java developing",
        price : 3000
    },
    {
        course : "AIML",
        price : 500
    },
    {
        course : "Data Science",
        price : 10000
    },
]

const totalbuy = cart.reduce((total,individual)=> total + individual.price ,0)

console.log(totalbuy)