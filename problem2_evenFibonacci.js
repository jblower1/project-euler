var fib1=0;
var fib2=0;
var fibTotal=0;
var fibEvenSum=0;
//while fib numbers are < 4 million
while(fibTotal < 4000000){
    fibTotal = fib1 + fib2;
    if(fibTotal % 2 == 0)fibEvenSum+=fibTotal;
   	fib1 = fib2;
    fib2 = fibTotal;
}
console.log(fibEvenSum);

//alternative solution? functional programming

const upperLimit = 4000000; const fib1 = 0; const fib2 = 1;

function sumEvenFibs(fib1, fib2, upperLimit){
  var fibEvenSum = 0;
  fibTotal = fib1 + fib2;
  while(fibTotal < upperLimit){
    if(fibTotal % 2 == 0){fibEvenSum+=fibTotal};
    fib1 = fib2;
    fib2 = fibTotal;
  }
  return fibEvenSum;
};

console.log(sumEvenFibs(fib1, fib2, upperLimit));
