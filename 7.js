const a = 'дим'
const b = 'an'
const c = 'рота'

function reverseString(str) {
    return str.split("").reverse().join("")
}

function palindrome(str){
    splitStr = str + reverseString(str)
    let asd = splitStr.split("")
    for (let i = 0; i<asd.length; i++){
        if(asd[i] == asd[i+1]){
            asd.splice(i, 1)
        }
    }
    asd = asd.join("")
    return asd
}
console.log(palindrome(c))