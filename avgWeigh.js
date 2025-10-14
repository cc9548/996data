function avgWeight(score, weight) {
  var sum=0;
  sumWight=0;
  for(var i=0;i<score.length;i++){
    sum+= score[i]*weight[i];
    sumWight+=weight[i];
  }
  return (score.lengh>0)?sum/sumWight:0;
}
//test
var Score=[];
var Weight=[6,5,5,3,3];
const num=5;
//input
var readline = require('readline-sync');
for (let i=0;i<num;i++){
    Score[i]=parseFloat(readline.question("input"+(i+1)+"'s score?"));
}
console.log(Score.toString()+"average:"+avgWeight(Score,Weight));
