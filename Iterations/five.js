const mylanguage = [
    {
        languagename : "python",
        filename : "py"
    },
    {
        languagename : "C++",
        filename : "cpp"
    },
    {
        languagename : "java",
        filename : "jv"
    }
]

mylanguage.forEach(function(language){
    console.log(language)
    console.log(language.languagename)
    console.log(language.filename)
})