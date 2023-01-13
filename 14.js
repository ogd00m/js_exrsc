class myString{
    constructor(firstString){
        this.firstString = firstString;
    }
    strReverse(){
        return this.firstString.split('').reverse().join('')
    }
    ucFirst(){
        return this.firstString[0].toUpperCase() + this.firstString.slice(1)
    }
    ucWords(){
        let randomStr = this.firstString.split('')
        for(let i = 0; i<randomStr.length; i++){
            
            if(randomStr[i-1] === " "){
                randomStr[i] = randomStr[i].toUpperCase()
            }
        }
        randomStr[0] = randomStr[0].toUpperCase()
        return randomStr.join('')
    }
} 
let someWords = new myString('чем больше хаха тем меньше глубина фокуса')
let reversedString = someWords.strReverse()

let upperCasedString = someWords.ucFirst()

let upperCasedWords = someWords.ucWords()
console.log(reversedString)
console.log(upperCasedString)
console.log(upperCasedWords)

// асукоф анибулг ешьнем мет ахах ешьлоб меч