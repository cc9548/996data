var Score=[
    [70,80,90,60,80],
    [80,90,70,75,85],
    [85,85,80,90,80]
]
function avg(score){
    var sum=0;
    for(var i=0;i<score.length;i++){
        sum+=score[i];
    }
    return (score.length>0)?sum/score.length:0;
}
console.log("student1 average:"+avg(Score[0]));
console.log("student2 average:"+avg(Score[1]));
console.log("student3 average:"+avg(Score[2]));