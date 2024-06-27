// immediately invoked function expressions

(function chai(){
    console.log("DB connected")
})();


( ()=>{
    console.log(`DB2 connected`)
})();



( (name)=>{
    console.log(`DB2 connected ${name}`)
})("tanishq")