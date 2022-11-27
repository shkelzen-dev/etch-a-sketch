
let div = document.createElement('div');
div.style.border = '1px solid black';
div.setAttribute('id','container');


let numId = 0 ; 
let n = 16 ; 

for(let i = 0 ; i<n ; i++){
    var column = document.createElement('div');
    
    column.className = 'column';
    
    
    
    for(let j=0;j<n;j++){
       var row =  document.createElement('div');
       
       row.className = 'row';
       row.style.backgroundColor = 'white';
       row.id = numId;
       numId++;
       
       column.appendChild(row);
    }
    div.appendChild(column);
    
}

const btn = document.querySelector('.btn');
btn.addEventListener('click' , ()=>{
    document.body.removeChild(div);
    div = document.createElement('div')
    document.body.appendChild(div);
    div.style.border = '1px solid black';
    div.setAttribute('id','container');
   
   n = window.prompt('Number of cols and rows you want');
   if(n>100){
   
    n = window.prompt('Number too big please enter a smaller number');
    
   }
   for(let i = 0 ; i<n ; i++){
    let column = document.createElement('div');
   
    column.className = 'column';
    
    
    
    for(let j=0;j<n;j++){
       const row =  document.createElement('div');
       
       row.className = 'row';
       
       row.id = numId;
       numId++;
       
       column.appendChild(row);
    }
    
    div.appendChild(column);
    
}

});


document.body.appendChild(div);

function randomColor(){
    
}

addEventListener('mouseover' ,(row)=>{
  
  let path = row.composedPath()[0].id;
  let cell = document.getElementById(path);
  cell.style.backgroundColor = "blue";
  
});

