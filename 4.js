const arr = [7,2,4,6,1,3,5,9,8]
const strArr = ['one', 'two','three']
let count = 0


function bubbleSort(array){
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[j+1] < array[j]){
        let tmp = array[j]
        array[j] = array[j+1]
        array[j+1] = tmp
      }
    }
  }

  return array.concat(strArr)
}
console.log(bubbleSort(arr))