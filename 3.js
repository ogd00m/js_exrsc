const arr = [7,2,4,6,1,3,5,9,8]
let count = 0


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


function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1
    while (found === false && start <= end){
        middle = Math.floor((start + end)/2);
        if (array[middle] === item){
            found = true
            position = middle
            return position;
        }
        if (item < array[middle]){
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}

console.log(quickSort(arr))
console.log(binarySearch(quickSort(arr), 5))