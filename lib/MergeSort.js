let mergesort = (arr) => {
  let helper = [];
  mergesortAux(arr, helper, 0, arr.length - 1);
}

let mergesortAux = (arr, helper, low, high) => {
  if (low < high) { // if low > high, then we're done sorting the array
    const middle = Math.floor((low + high) / 2);
    mergesortAux(arr, helper, low, middle); // sorting left half
    mergesortAux(arr, helper, middle+1, high); // sorting right half
    merge(arr, helper, low, middle, high); // merge!
  }
}

let merge = (arr, helper, low, middle, high) => {
  // copy both halves into helper array
  for (let i = low; i <= high; i++) {
    helper[i] = arr[i];
  }

  let helperLeft = low;
  let helperRight = middle + 1;
  let current = low;

  // iterate through helper array. compare left and right half, copying back the smaller element from the two halves into the original array
  while (helperLeft <= middle && helperRight <= high) {
    if (helper[helperLeft] <= helper[helperRight]) {
      arr[current] = helper[helperLeft];
      helperLeft++;
    } else {
      arr[current] = helper[helperRight];
      helperRight++;
    }
    current++;
  }

  // copy rest of left side of the array into target array
  let remaining = middle - helperLeft;
  for (let i = 0; i <= remaining; i++) {
    arr[current + i] = helper[helperLeft + i];
  }
}

module.exports = mergesort;
