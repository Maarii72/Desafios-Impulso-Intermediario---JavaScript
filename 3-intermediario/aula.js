for(let j = 0; j<3;j++)
{
  let number = parseInt(gets());
  let velocity = gets().split(" ");
  //let number = 10;
  //let velocity = [10, 10, 10, 10, 15, 18, 20, 15, 11, 10];
  let max = 0;
  let level = 0;

  for(i = 0 ; i < number; i++){
    if(max < parseInt(velocity[i])){
      max = parseInt(velocity[i]);
    }
  }
  
  if(max < 10){
    level = 1;
  }
  else if(max >= 10 && max < 20){
    level = 2;
  } 
  else{
    level = 3;
  }
  
  console.log(level);
}