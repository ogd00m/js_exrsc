const arr = [[1,4,5],[1,3,4],[2,6]] 
const oneDimArr = []

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[j].length; j++){
        oneDimArr.push(arr[i][j])
    }
}
function quickSort(array){
    if (array.length <= 1){
      return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++){
      if(i === pivotIndex)
      continue
      if (array[i] < pivot){
        less.push(array[i])
      } else {
        greater.push(array[i])
      }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
  }
console.log(quickSort(oneDimArr))