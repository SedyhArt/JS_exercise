let arr1 = [1, 65456, 753, 23, 45, 67, 67, 67, 4, 565, 76, 45, 45, 4];
let count = 0;
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let less = [];
  let more = [];

  for (let i = 0; i < arr.length; i++) {
    count++;
    if (i === middleIndex) continue;
    if (arr[i] <= arr[middleIndex]) {
      less.push(arr[i]);
    } else more.push(arr[i]);
  }

  return [...quickSort(less), arr[middleIndex], ...quickSort(more)];
}

console.log(quickSort(arr1));
console.log(count);
