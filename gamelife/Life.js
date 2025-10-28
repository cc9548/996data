const LIVE=1, DEAD=0;

class Life {
  constructor(_row,_col){
      this.row=_row;
      this.col=_col;
      this.grid=[];
      //dynamic 2d array
     for (let r =0;r<_row;r++){
      this.grid.push([]);
      for (let c=0;c<_coll;c++){
        this.grid[r].push(DEAD);
      }
     }
  }

  getStatusAt=function(_row,_col){
    if (_row<0 || _col<0 || _row>=this.row || _col>=this.col){
      return DEAD;
    }else{
      this.grid[_row][_col];
    }
  }
  neighborCount=function(_row,_col){
    var count=0;
    count += this.getStatusAt(_row-1,_col-1);//left top
    count += this.getStatusAt(_row-1,_col);//top
    count += this.getStatusAt(_row-1,_col+1);//right top
    count += this.getStatusAt(_row,_col-1);//left 
    count += this.getStatusAt(_row,_col+1);//right 
    count += this.getStatusAt(_row+1,_col-1);//left bottom
    count += this.getStatusAt(_row+1,_col);//bottom
    count += this.getStatusAt(_row+1,_col+1);//right bottom
    return count;
  }
}

var myGame1=new Life(10,10);
var myGame2=new Life(5,5);