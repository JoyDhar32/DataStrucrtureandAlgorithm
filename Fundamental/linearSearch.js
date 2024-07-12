const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
    };

    console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2
    console.log(linearSearch([1, 2, 3, 4, 5], 0)); // -1
    console.log(linearSearch([1, 2, 3, 4, 5], 5)); // 4

    // /* time complexity Big(O) = O(n) */