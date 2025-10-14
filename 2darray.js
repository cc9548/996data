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
var Student=[
    {"name":"John","grade":2,"score":[70,80,90,60,80]},
    {"name":"Mary","grade":2,"score":[80,90,70,75,85]},
    {"name":"Tom","grade":3,"score":[85,85,80,90,80]}
]
console.log("student1 name and average:"+avg(Student[0].score));
console.log("student2 name and average:"+avg(Score[1].score));
console.log("student3 name and average:"+avg(Student[2].score));