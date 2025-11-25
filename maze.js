
var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];//8,10

class Point{
    constructor(_row,_col){
        this.row= _row;
        this.col=_col;
    }
}

var start=new Point(1,1);
var end = new Point(8,10);
var Stack=[];

var CP=start;//currentPosition
do{
    MAZE[CP.row][CP.col]=2;
    //4 directions
    //up
    if(MAZE[CP.row-1][CP.col]==0){
        Stack.push(CP);
        CP = new Point(CP.row-1,CP.col);
    }else if(MAZE[CP.row][CP.col-1]==0){ //left

    } 
    else if (MAZE[CP.row + 1][CP.col] == 0) { // 下
        Stack.push(CP);
        CP = new Point(CP.row + 1, CP.col);
    } 
    else if (MAZE[CP.row][CP.col + 1] == 0) { // 右
        Stack.push(CP);
        CP = new Point(CP.row, CP.col + 1);
    }
    else {
        // 四個方向都不能走 → 回溯
        if (Stack.length > 0) {
            CP = Stack.pop();
        } else {
            console.log("No Solution");
            break;
        }
    }
//}while(!(CP.row==end.row && CP.col==end.col));
}while(CP.row!=end.row || CP.col!=end.col);
