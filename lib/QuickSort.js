let quicksort = (arr, left, right) => {
  let index = partition(arr, left, right);
  if (left < index - 1) { // sort left half
    quicksort(arr, left, index - 1);
  }
  if (index < right) { // sort right half
    quicksort(arr, index, right);
  }
}

let partition = (arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)]; // pick pivot point

  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}
