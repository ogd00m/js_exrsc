function isEqual(firstObj, secondObj) {
    for (let prop in firstObj) {
        if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
            return false
        } else if (firstObj.hasOwnProperty(prop) && (firstObj[prop] == secondObj[prop])) {
            return true
        }
    }
}

let a = { a: 1, b: 1 }
let b = { a: 1, b: 1 }
console.log(isEqual(a, b))