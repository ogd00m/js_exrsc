let letters = 'DDADSADASDAAADS'
const das = []

for (let i = 0; i < letters.length; i++){
    if (das.indexOf(letters[i]) === -1){
        das.push(letters[i])
    }
}
console.log(das)
