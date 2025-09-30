function sun(n){
    var result=0;
    var i=0;
    while(i++<n){
        result +=i;
    }
    return result;
}
//test
console.log("1+2+...+"+n+"="+sun(10));
