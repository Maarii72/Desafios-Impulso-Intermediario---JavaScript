/*
let x = parseInt(gets());
let y = parseFloat(gets());
*/
//TODO: Complete os espaços em branco com uma possível resolução para o problema.
for(let j = 0; j<3;j++)
{
  let number = parseInt(gets());
  let velocity = gets().split(" ");
  let max = 0;
  let level = 0;

  for(i = 0 ; i < number; i++){
    if(max < parseInt(velocity[i])){
      max = parseInt(        );
    }
  }
  
  if(max <  ){
    level = 1;
  }
  else if(max >=  && max < ){
    level = 2;
  } 
  else{
    level = 3;
  }
  print(   );
}