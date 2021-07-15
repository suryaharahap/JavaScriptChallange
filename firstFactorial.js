function FirstFactorial(num) { 

  // code goes here  
  if (num === 0) {
    return 1;
  } else {
    return num * FirstFactorial( num - 1);
  }
  return num; 
 
}
   
// keep this function call here 
console.log(FirstFactorial(4));