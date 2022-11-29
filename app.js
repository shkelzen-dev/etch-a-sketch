//create container div
let div = document.createElement('div');
div.style.border = '1px solid black';
div.setAttribute('id','container');


let cellId = 0 ; 
let n = 16 ; 
 
let cellArray = [];
let tenPercentR = []; //10% of red value
let tenPercentG = []; //10% of green value
let tenPercentB = []; //10% of blue value

//create grid
function grid(){
for(let i = 0 ; i<n ; i++){
    var column = document.createElement('div');
    column.className = 'column';
   
    for(let j=0;j<n;j++){
       var row =  document.createElement('div');
       
       row.className = 'row';
       row.style.backgroundColor = 'white';
       
       row.id = cellId;
       cellId++;
       
       column.appendChild(row);
    }
    div.appendChild(column);
    
}
}

grid();

const btn = document.querySelector('.btn');
btn.addEventListener('click' , ()=>{
    document.body.removeChild(div);
    div = document.createElement('div')
    document.body.appendChild(div);
    div.style.border = '1px solid black';
    div.setAttribute('id','container');
    cellId = 0 ;
   
   n = window.prompt('Number of cols and rows you want');
   if(n>100){
   
    n = window.prompt('Number too big please enter a smaller number');
    
   }

   grid();
   document.body.appendChild(div);
   color();
  
});


document.body.appendChild(div);



function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let cellColor = [r,g,b];
    
    return cellColor ; 
}




function color(){
  let cellNumber = n*n ;
  for(let i=0 ; i<=cellNumber;i++){
  cellArray[i] = randomColor();
  tenPercentR[i] = cellArray[i][0]*0.1;
  tenPercentG[i] = cellArray[i][1]*0.1;
  tenPercentB[i] = cellArray[i][2]*0.1;

 }
}

color();

//when pointer is over cell , the cell becomes colored with a random color 
//every pass color becomes 10% darker
addEventListener('mouseover' ,(row)=>{
  
  let path = row.composedPath()[0].id;
  let cell = document.getElementById(path);
    
  let r = cellArray[path][0]-tenPercentR[path];      //makes red color 10% darker
  cellArray[path][0] = r ;                           //saves new red color to cellArray[]
  let g = cellArray[path][1]-tenPercentG[path];      //makes green color 10% darker
  cellArray[path][1] = g;                            //saves new green color to cellArray[]
  let b = cellArray[path][2]-tenPercentB[path];      //makes blue color 10% darker
  cellArray[path][2] = b ;                           //saves new blue color to cellArray[]
  
  cell.style.backgroundColor = "rgb("+r+","+g+","+b+")";
});