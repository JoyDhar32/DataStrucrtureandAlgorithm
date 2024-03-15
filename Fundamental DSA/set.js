const mySet=new Set([1,2,3,4,5,6,7,8,9,10,10,9,8]);
console.log(mySet);
const array1=[1,2,2,33,3,31,1,11];
const setArray=new Set(array1)
console.log(setArray);

const fun=(nums)=>{
    return [...new Set(nums)]
}
console.log(fun(array1));