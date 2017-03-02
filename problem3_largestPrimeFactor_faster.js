function isPrimeFactor(value, factor){
  //assume true and find exception
  var isPrimeFactor = true;
  //if 1 - not prime`7u0
  if(factor == 1){isPrimeFactor == false;}
  //ensure factor is a factor
  if(value % factor == 0){
    //check for prime
    var currentDivisor = 2;
    while(isPrimeFactor && currentDivisor < factor/2){
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
  var highestFactor = Math.round(number/2);
  for(var i=highestFactor; i>=1; i--){
    if(i == 2){
      return i;
    }
    else if(i % 2 == 0){
      continue;
    }
    else if(isPrimeFactor(number, i)){
      return i;
    }
  }
}
/**********************Works*********************/
