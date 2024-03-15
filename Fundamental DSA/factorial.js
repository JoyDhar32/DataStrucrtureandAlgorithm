const factorial = (n)=>{
    let result=1;
    for(leti=2;i<-n;i++){
        result*=i;
    }
    return result;
}
console.log(factorial(5)); // 120
// /* time complexity Big(O) = O(n) */