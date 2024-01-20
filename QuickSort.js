const QuickSort =(arr)=>{
    if(arr.length<1){
        return arr;
    }
    let left =[], right =[], pivot=arr[arr.length-1];
    for(let i=0; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)];
}
console.log(QuickSort([1,5,3,2,4,6,7,8,9,10])); // [1,2,3,4,5,6,7,8,9,10]
console.log(QuickSort([10,9,8,7,6,5,4,3,2,1])); // [1,2,3,4,5,6,7,8,9,10]
console.log(QuickSort([1,2,3,4,5,6,7,8,9,10])); // [1,2,3,4,5,6,7,8,9,10]
console.log(QuickSort([1,1,1,1,1,1,1,1,1,1])); // [1,1,1,1,1,1,1,1,1,1]
console.log(QuickSort([1,1,1,1,1,1,1,1,1,2])); // [1,1,1,1,1,1,1,1,1,2]
console.log(QuickSort([2,1,1,1,1,1,1,1,1,1])); // [1,1,1,1,1,1,1,1,1,2]

//⭐time complexity: O(nlogn)
