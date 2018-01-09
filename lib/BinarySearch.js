let binarySearch = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] < x) {
      low = mid + 1;
    } else if (a[mid] > x) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

let binarySearchRecursive = (arr, x, low, high) => {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);
  if (arr[mid] < x) {
    return binarySearchRecursive(arr, x, mid + 1, high);
  } else if (arr[mid] > x) {
    return binarySearchRecursive(arr, x, low, mid - 1);
  } else {
    return mid;
  }
}
