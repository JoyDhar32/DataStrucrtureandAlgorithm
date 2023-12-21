function check(...args){
    for(let x of args){
        if(typeof x !== 'number'){
           throw new Error("Enter Valid Number");
        }
    }
}

function add(n1,n2){
    check(n1,n2);
    return n1+n2;
}
console.log(add(1,22));
console.log(add(1,'22'));