

for (let i = 0; i < 101; i++) {

    if ( i % 5 == 0 && i % 3 == 0){ // ho dovuto inserire questa condizione all'inizio perchè mettendola dopo non funzionava. c'è un altro metodo?

        console.log("FizzBuzz")
    }
    else if ( i % 5 == 0){

        console.log("Buzz")
    }

    else if (i % 3 == 0){

        console.log("Fizz")
    }


    else{
        console.log(i);
      }
    
}