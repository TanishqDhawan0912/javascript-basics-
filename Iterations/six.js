const mylanguage =["python","html","javascript","java"]

const values = mylanguage.forEach((lang)=>{
    return lang
})

// console.log(values) // undefined


const mynums=[1,2,3,4,5]

const numvalues = mynums.filter((val)=>val%2==0)

console.log(numvalues)

const books = [
    {
        title : "Book 1",
        genre : "science",
        publish : "1983",
        edition : "2005"

    },
    {
        title : "Book 2",
        genre : "fiction",
        publish : "1994",
        edition : "2010"

    },
    {
        title : "Book 3",
        genre : "history",
        publish : "1950",
        edition : "2015"
    },
    {
        title : "Book 4",
        genre : "MYSTERY",
        publish : "2001",
        edition : "2020"
    },
    {
        title : "Book 5",
        genre : "history",
        publish : "1920",
        edition : "2001"
    }
]

let mychoose = books.filter((bk)=>bk.genre=="history")

// console.log(mychoose)