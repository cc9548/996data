function fact(n){
    if(n==1)
        return 1;
    else
    return n*fact(n-1);
}
//test
let n=3;
console.log(n+"!="+fact(n));