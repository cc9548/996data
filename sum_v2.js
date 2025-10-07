//calc 1-2+3-4+...n
function sum2(n){
    var sum=0;
    if(n<0){
        console.log("error: n must >0")
        return 696;
    }
    else {
        for(var i=1;i<=n;i++){
            if(i%2==0)
                sum -= i;//even
                else
                sum += i;//odd
            }
        }
}
//test 
var n=100;
console.log ("1-2+3-4+..."+n+"="+sum2(n));