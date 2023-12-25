const BubbleSort = (arr) => {
    let swapped;
    do {
      swapped = false;
  
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {  //Descending order
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  };
  console.log(BubbleSort([8, 20, -2, 4, -6]));  // [ 20, 8, 4, -2, -6 ]
  console.log(BubbleSort([55, 20, -22, 14, -69]));  // [ 55, 20, 14, -22, -69 ]
  console.log(BubbleSort([8, 20, -22, 14, -69]));  // [ 20, 14, 8, -22, -69 ]

//   // /* time complexity Big(O) = O(n^2) */
  