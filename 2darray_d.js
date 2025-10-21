var readline = require ("readline-sync");
var row = readline.questionInt("how many row?");
var col = readline.questionInt("how many col?");
//2d Array row x col
var aryRowCol =[];
var a=1;
for (let r = 0; r < row ; r++){
     aryRowCol.push([]);
        for (let c=0; c<col; c++){
            aryRowCol[r].push (a++);
        }  
}
console.log(aryRowCol);