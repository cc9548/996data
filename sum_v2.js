//calc 1-2+3-4+...n
const readline = require("readline-sync");
function sum2(n){
    let sum=0;
    if(n<=0){
        console.log("error: n must >0")
        return 696;
    }
    else {
        for(let i=1;i<=n;i++){
            if(i%2===0) sum-=i;
            else sum+=i ;              
            }
        return sum;
    }
}
//test 
//readline
let n=readline.questionInt("Enter a number:");
console.log ("1-2+3-4+...+n="+sum2(n));