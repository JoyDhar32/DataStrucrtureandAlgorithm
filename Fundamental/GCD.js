const gcd = (a,b)=>{
    if(b===0) return a;
    while(b!=0){
        let temp =b;
        b=a%b;
        a=temp;
    }
    return a;
}

console.log(gcd(12,15)); // 3
console.log(gcd(9,12)); // 3


// GCD from array

let gcdOfArray = (arr)=>{
    return arr.reduce((acc,current)=> gcdSeries(acc,current),arr[0]);
}

let gcdSeries = (a,b)=>{
    if(b===0)return a;
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
console.log(`GCD of array`);
console.log(gcdOfArray([2,4,6,8,16])); // 2
console.log(gcdOfArray([3,6,9,12,15])); // 3





