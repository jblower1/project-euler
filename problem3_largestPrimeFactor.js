/***************************************************/
//new solution - has double loop - slow processing

function isPrimeFactor(value, factor){
  //assume true and find exception
  var isPrimeFactor = true;
  //if 1 - not prime`7u0
  if(factor == 1){isPrimeFactor == false;}
  //ensure factor is a factor
  if(value % factor == 0){
    //check for prime
    var currentDivisor = 2;
    while(isPrimeFactor && currentDivisor < factor){
      if(factor % currentDivisor == 0){
        isPrimeFactor = false;
      }
      currentDivisor++;
    }
  }else{
    isPrimeFactor = false;
  }
  return isPrimeFactor;
}

function getLargestPrime(number){
  for(var i=number; i>=1; i--){
    if(isPrimeFactor(number, i)){
      return i;
    }
  }
}
/**********************Works*********************/


//solution with recursion? - no loops?
function getLargestPrime(number){
  //base case
  if(number == 2){
    return 2;
  }else{
    if(isPrimeFactor()){
      return
    }else{

    }
    getLargestPrime(number-1)
  }
}


//lets get a isprime method using recursion
function isPrime(value){
//value is even therefore not prime (unless 2)
  var isPrime = true;
  if(value == 2){
    return isPrime;
  }
  else if(value % 2 == 0){
    return isPrime(value-1);
  }
  else{
    //logic to determine if prime
    
    return isPrime(value-2);
  }
}
