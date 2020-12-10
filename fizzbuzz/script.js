const outPut = [];
const fizzbuzz = () => {
  const userInput = parseInt(prompt('please input a whole number'));
  
  for(let i = 0; i <= userInput.length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ!!'); 
    }  else if (i % 3 === 0) {
         console.log('fizz');
      } else if (i % 5 === 0) {
          console.log('buzz');
      }  else {
          console.log(i);
      }
  }
  return outPut;
}
fizzbuzz();

