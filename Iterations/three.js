const mylanguage = {
    js : "javascript",
    py : "python",
    cpp : "C++",
    html : "hypertext markup language"
}

for (const key in mylanguage){  // for in used for iterable objects 
    // console.log(mylanguage[key])
}

const countrycodes = new Map() // map are not iterables

countrycodes.set('IN','India')
countrycodes.set('USA','United States of America')
countrycodes.set('Fr','France')
countrycodes.set('IN','India')

for(const key in countrycodes){
    console.log(key)
}



