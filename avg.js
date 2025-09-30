// function avg(score){
//    var sum=0, average=0;
//    for(var i=0; i<score.length; i++){
//        sum+=score[i];
//    }
//    if(score.length>0)
//        average=sum/score.length;
//    return average;
//    
//}
function avg(score){
    var sum=0, average=0;
    for(var i=0; i<score.length; i++){
        sum+=score[i];
    }
    if(score.length>0)
        average=sum/score.length;
    return average;
    
}
//test
var Score=[10,20,30,55,45,60];
console.log(Score .toString="average is "+avg(Score));