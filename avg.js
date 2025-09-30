function avg(score){
    var sum=0, average=0;
    for(var i=1; i<score.length; i++){
        sum+=score[i];
    }
    if(score.length>0){
        average=sum/(score.length-1);
        return average;
    }
}
//test
var Score=[10,20,30,55,45,69];
console. log(Score .toString="average is "+avg(Score));