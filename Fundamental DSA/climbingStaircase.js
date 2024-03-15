const climbingStaircase =(n) =>{
    const step=[1,2];
    for(let i=2;i<=n;i++){
        step[i]=step[i-1]+step[i-2];
    }
    return step[n-1]
}
console.log(climbingStaircase(1)); //
console.log(climbingStaircase(10)); //
console.log(climbingStaircase(11)); //
console.log(climbingStaircase(4)); //

